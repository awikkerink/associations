import { Classes } from 'd2l-hypermedia-constants/index';
import { d2lfetch } from 'd2l-fetch/src/index.js';
import SirenParse from 'siren-parser';

export class HmInterface {
	constructor({
		href,
		type,
	}) {
		this.href = href;
		this.setupPromise = this.setup();
		this.stopped = false;
		this.type = type;
	}

	checkForRequiredParams() {
		if (!this.href) {
			throw new Error('no href provided');
		}
	}

	stop() {
		this.stopped = true;
	}

	async setActivityUsageItemAssociations(associationEntity) {
		const createAssociationAction = associationEntity.getActionByName('create-association');
		const searchParams = new URLSearchParams();
		searchParams.append('itemId', parseInt(createAssociationAction.getFieldByName('itemId').value));
		searchParams.append('type', createAssociationAction.getFieldByName('type').value);
		return this.makeCall(createAssociationAction.href, { method: 'POST', body: searchParams, contentType: 'application/x-www-form-urlencoded' }, true);
	}

	async setup() {
		this.checkForRequiredParams();
		this.activityUsage = await this.makeCall(this.href);
		const queryAssociationsAction = this.activityUsage.getActionByName('query-associations');
		this.associationsHref = this.getQueryActionHref(queryAssociationsAction, { type: this.type.name });
		this.associations = await this.makeCall(this.associationsHref);
		this.potentialAssociations = this.associations.getSubEntitiesByClass(Classes.activities.potentialAssociation);
		const augmentedPotentialAssociations = this.potentialAssociations.map(this.fetchItemForPotentialAssociation, this);
		this.augmentedPotentialAssociations = await Promise.all(augmentedPotentialAssociations);
	}

	async fetchItemForPotentialAssociation(potentialAssociation) {
		const href = potentialAssociation.getLinkByRel(this.type.itemRel).href;
		const item = await this.makeCall(href);
		return {
			association: potentialAssociation,
			item
		};
	}

	getQueryActionHref(action, params) {
		let href = action.href;
		const queryStrings = [];
		action.fields.forEach(field => {
			if (params[field.name]) {
				queryStrings.push({ name: field.name, value: params[field.name] });
			}
		});
		if (queryStrings.length > 0) {
			href += `?${queryStrings.map(x => `${x.name}=${x.value}`).join('&')}`;
		}
		return href;
	}

	async makeCall(href, { method = 'GET', body, contentType } = {}, updateEntityStore = false) {
		if (this.stopped) {
			return;
		}
		if (!href) {
			throw new Error('no href provided');
		}

		const token = (typeof this.token === 'function') ? await this.token() : this.token;
		const headers = { Authorization: token };
		if (contentType) {
			headers['content-type'] = contentType;
		}

		const response = await d2lfetch.fetch(new Request(href, {
			method,
			body: body,
			headers
		}));
		if (!response.ok || !this.isSuccessResponse(response)) {
			throw new Error(`${href} call was not successful, status: ${response.status}, ok: ${response.ok}`);
		}
		const responseJSON = await response.json();
		const deserializedResponse = SirenParse(responseJSON);
		if (updateEntityStore && window.D2L && window.D2L.Siren && window.D2L.Siren.EntityStore) {
			window.D2L.Siren.EntityStore.update(href, token, deserializedResponse);
		}
		return deserializedResponse;
	}

	isSuccessResponse(response) {
		return Math.floor(response.status / 100) === 2;
	}
}
