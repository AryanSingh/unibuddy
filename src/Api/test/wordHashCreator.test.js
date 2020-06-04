import {createHash} from "../wordHashCreator";


// export const createHash = (hashObj, currentObj) => {
//
// 	let newObj = {...hashObj};
//
// 	let modifiedSummary = ingester(lowerCasing, removePlural, removePreposition)(currentObj.summary.split(/[\s,\-\(\)\:\.]+/));
// 	modifiedSummary.map((item) => {
// 		if(item in newObj){
// 			if(newObj[item].indexOf(currentObj.id) === -1){
// 				let index = modified_binary_Search(newObj[item], currentObj.id);
// 				newObj[item].splice(index, 0, currentObj.id);
// 			}
// 		}else {
// 			newObj[item] = [];
// 			newObj[item].push(currentObj.id)
// 		}
// 	});
//
// 	let allKeys = Object.keys(newObj);
// 	allKeys.map((key) => {
// 		if(key.length >= 3){
// 			let subStrings = getAllSubstrings(key)
// 			subStrings.map(str =>  {
// 				if(!newObj[str]){
// 					newObj[str] = newObj[key]
// 				} else {
// 					newObj[str] = mergeSortedArray(newObj[str], newObj[key])
// 				}
// 			})
// 		}
// 	});
// return newObj;
// }

test('test word hash creator', () => {
	// expect
});