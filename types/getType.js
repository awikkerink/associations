import { RubricType } from './rubric';

export default function getType(type, localize) {
	if (type === 'rubrics') {
		return new RubricType(localize);
	}

	throw new Error(`Type '${type}' doesn't exist`);
}
