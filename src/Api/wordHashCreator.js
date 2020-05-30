import {ingester} from "./ingester";
import {removePlural} from "./singularizeTokenizer";
import {removePreposition} from "./prepsRemoveTokenizer";
import {modified_binary_Search} from "./helpers";
import {lowerCasing} from "./lowercasing";

// {
// 	"id": 1,
// 	"summary": "The Book in Three Sentences: The 10X Rule says that 1) you should set targets for yourself that are 10X greater than what you believe you can achieve and 2) you should take actions that are 10X greater than what you believe are necessary to achieve your goals. The biggest mistake most people make in life is not setting goals high enough. Taking massive action is the only way to fulfill your true potential."
// }

export const createHash = (hashObj, currentObj) => {

	let newObj = {...hashObj};

	let modifiedSummary = ingester(lowerCasing, removePlural, removePreposition)(currentObj.summary.split(/[\s,\-\(\)\:\.]+/));
	modifiedSummary.map((item) => {
		if(item in newObj){
			if(newObj[item].indexOf(currentObj.id) === -1){
				let index = modified_binary_Search(newObj[item], currentObj.id);
				newObj[item].splice(index, 0, currentObj.id);
				// newObj[item].push(currentObj.id)
			}
		}else {
			newObj[item] = [];
			newObj[item].push(currentObj.id)
		}
	});
	// console.log('newOjb', newObj, currentObj)
	return newObj;
};