import {ingester} from "./ingester";
import {removePlural} from "./tokenizer/singularizeTokenizer";
import {removePreposition} from "./tokenizer/prepsRemoveTokenizer";
import {modified_binary_Search} from "./helpers";
import {getAllSubstrings, mergeSortedArray, lowerCasing} from "./helpers";

// the function takes three arguments, current hash map(first argument), the summary object, which has to be processed and stored in the hashmap as second argument, and the 'author'(string) of the summary as the third argument. It processes the summary i.e, converts it into array of strings split by white spaces, colons, punctuation and '-'. The array of strings then is passed into ingester which removes plurals and prepositions from the array and converts array keys into lowercase.

//the processed array of keys is then individually checked if it's present in the existing hashmap. If it is present the summary's id is added to that key's value array in the hashmap. If it's not present, key is created in the hashmap and the index added to it's value array.

// In the last step, if key is more than lenght 3 all it's substrings are generated and receive the same value array of indexes which the keys has in the hashmap

//funtion then returns the new hashmap with new keys and values in it

export const createHash = (hashObj, currentObj, author) => {
	let newObj = {...hashObj};
	let splitStr = currentObj.summary + author;

	let modifiedSummary = ingester(lowerCasing, removePlural, removePreposition)(splitStr.split(/[\s,\-\(\)\:\.]+/ ));
	modifiedSummary.map((item) => {
		if(item in newObj){
			if(newObj[item].indexOf(currentObj.id) === -1){
				let index = modified_binary_Search(newObj[item], currentObj.id);
				newObj[item].splice(index, 0, currentObj.id);
			}
		}else {
			newObj[item] = [];
			newObj[item].push(currentObj.id)
		}
	});

	let allKeys = Object.keys(newObj);
	allKeys.map((key) => {
		if(key.length >= 3){
			let subStrings = getAllSubstrings(key)
			subStrings.map(str =>  {
				if(!newObj[str]){
					newObj[str] = newObj[key]
				} else {
					newObj[str] = mergeSortedArray(newObj[str], newObj[key])
				}
			})
		}
	});


	// console.log('newOjb', newObj, currentObj)
	return newObj;
};