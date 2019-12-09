import { Rels } from 'd2l-hypermedia-constants';

export class RubricType {
	constructor(localize) {
		this.localize = localize;
	}

	get title() {
		return 'addRubric';
	}

	get itemRel() {
		return Rels.Rubrics.rubric;
	}

	get addDesciption() {
		return 'selectFromList';
	}

	get name() {
		return 'rubrics';
	}
}
