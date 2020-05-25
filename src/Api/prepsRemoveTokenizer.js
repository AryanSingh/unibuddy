import {prepsList} from "../constants";

export default function (arr){
	return(arr.filter((item) => {
		if(prepsList.indexOf(item) === -1){
			return item
		}
	}))
}