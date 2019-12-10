import { Rels } from 'd2l-hypermedia-constants';

export class RubricType {
	static get name() {
		return 'rubrics';
	}

	constructor(localize) {
		this.localize = localize;
		this.title = 'addRubric';
		this.itemRel = Rels.Rubrics.rubric;
		this.addDescription = 'selectFromList';
	}
}
