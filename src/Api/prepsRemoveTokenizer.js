import {prepsList} from "../constants";

export const removePreposition = (arr) => {
	// console.log('arr', arr, typeof arr)
	return(arr.filter((item) => {
		if(prepsList.indexOf(item) === -1){
			return item
		}
	}))
};