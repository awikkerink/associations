import '@brightspace-ui/core/components/dialog/dialog';
import './add-associations';

import { css, html, LitElement } from 'lit-element/lit-element.js';
import getType from './types/getType';
import { langResources } from './lang';
import { LocalizeMixin } from '@brightspace-ui/core/mixins/localize-mixin.js';

class AddAssociationsLauncher extends LocalizeMixin(LitElement) {
	static get properties() {
		return {
			activityUsageHref: { type: String, attribute: 'activity-usage-href' },
			token: { type: String },
			potentialAssociations: { type: String },
			_state: { type: Object },
			type: { type: String }
		};
	}

	static get styles() {
		return css``;
	}

	static async getLocalizeResources(langs) {
		for (let i = 0; i < langs.length; i++) {
			if (langResources[langs[i]]) {
				return {
					language: langs[i],
					resources: langResources[langs[i]]
				};
			}
		}

		return null;
	}

	get associationType() {
		return getType(this.type);
	}

	_toggleDialog(toggle) {
		const dialog = this.shadowRoot.querySelector('d2l-dialog');
		if (dialog) {
			dialog.opened = toggle;
			this._open = toggle;
			if (toggle) {
				this.shadowRoot.querySelector('d2l-add-associations').reset();
			}
		}
	}

	_resizeDialog() {
		const dialog = this.shadowRoot.querySelector('d2l-dialog');
		if (dialog) {
			dialog.resize();
		}
	}

	_closeDialog() {
		this._toggleDialog(false);
	}

	_onClick() {
		this._toggleDialog(true);
	}

	_onCloseEvent() {
	}

	render() {
		return html`
			<d2l-button @click="${this._onClick}" class="add-associations-launcher">
				${this.localize(this.associationType.title)}
			</d2l-button>
			<d2l-dialog
				@associations-done-work="${this._closeDialog}"
				@associations-resize-dialog="${this._resizeDialog}"
				width="700"
				title-text="${this.localize(this.associationType.title)}"
			>
				<d2l-add-associations
					token="${this.token}"
					type="${this.type}"
					activity-usage-href="${this.activityUsageHref}"
				></d2l-add-associations>
			</d2l-dialog>`;
	}
}

customElements.define('d2l-add-associations-launcher', AddAssociationsLauncher);
