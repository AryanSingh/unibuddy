import {prepsList} from "../../constants";


//this function takes an array of words and removes the most common prepositions from it, the list of prepositions to  be removed is imported from constants

export const removePreposition = (arr) => {
	return(arr.filter((item) => {
		if(prepsList.indexOf(item) === -1){
			return item
		}
	}))
};