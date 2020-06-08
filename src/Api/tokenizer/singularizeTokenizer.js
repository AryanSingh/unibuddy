var pluralize = require('pluralize');


//this function takes an array of words and converts plural words into singular.

export const removePlural =   (arr) => {
	return(arr.map((item) => {
		return pluralize.singular(item)
	}))
};