var pluralize = require('pluralize');

export const removePlural =   (arr) => {
	return(arr.map((item) => {
		return pluralize.singular(item)
	}))
};