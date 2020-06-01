import {removePreposition} from "./tokenizer/prepsRemoveTokenizer";

export const modified_binary_Search = function(items, value){
	let firstIndex  = 0,
		lastIndex   = items.length - 1,
		middleIndex = Math.floor((lastIndex + firstIndex)/2);

	while(items[middleIndex] !== value && firstIndex < lastIndex)
	{
		if (value < items[middleIndex])
		{
			lastIndex = middleIndex - 1;
		}
		else if (value > items[middleIndex])
		{
			firstIndex = middleIndex + 1;
		}
		middleIndex = Math.floor((lastIndex + firstIndex)/2);
	}

	if(items[middleIndex] > value){
		return middleIndex - 1
	} else if(items[middleIndex] < value){
		return middleIndex + 1
	}


	// return (items[middleIndex] !== value) ? -1 : middleIndex;
};


export const binary_Search = function(items, value){
	var firstIndex  = 0,
		lastIndex   = items.length - 1,
		middleIndex = Math.floor((lastIndex + firstIndex)/2);

	while(items[middleIndex] !== value && firstIndex < lastIndex)
	{
		if (value < items[middleIndex])
		{
			lastIndex = middleIndex - 1;
		}
		else if (value > items[middleIndex])
		{
			firstIndex = middleIndex + 1;
		}
		middleIndex = Math.floor((lastIndex + firstIndex)/2);
	}


	return (items[middleIndex] !== value) ? -1 : middleIndex;
};

export const find_common_elements = (array) => {
	// let array = Array.prototype.slice.call(arr);
	console.log('array', array);
	let commonElements = [];

	let firstArr = array[0];
	if(array.length === 1){
		return array[0]
	}

	for(let i=1; i< array.length ; i++){
		commonElements = [];
		for(let j = 0; j< firstArr.length; j++){
			if(binary_Search(array[i], firstArr[j]) !== -1){
				commonElements.push(firstArr[j])
			}
		}
		firstArr = commonElements;
	}
	console.log('common elements', commonElements);
	return commonElements;

};

export const getAllSubstrings = (str) => {
	let i, j, result = [];

	for (i = 0; i < str.length; i++) {
		for (j = i + 1; j < str.length + 1; j++) {
			if(j - i >= 3){
				result.push(str.slice(i, j));
			}
		}
	}
	return result;
};

export const mergeSortedArray = (a, b) => {
	var sorted = [], indexA = 0, indexB = 0;

	while (indexA < a.length && indexB < b.length) {
		if (sortFn(a[indexA], b[indexB]) > 0 && sorted.indexOf(b[indexB]) === -1) {
			sorted.push(b[indexB++]);
		} else if(sorted.indexOf(b[indexA]) === -1) {
			sorted.push(a[indexA++]);
		}
	}

	if (indexB < b.length) {
		for(let i=indexB; i<b.length; i++){
			if(sorted.indexOf(b[i]) === -1){
				sorted.push(b[i])
			}
		}
		// sorted = sorted.concat(b.slice(indexB));
	} else {
		for(let i=indexA; i<a.length; i++){
			if(sorted.indexOf(a[i]) === -1){
				sorted.push(a[i])
			}
		}
		// sorted = sorted.concat(a.slice(indexA));
	}

	return sorted;
};

export const sortFn = (a, b) => {
	return a - b;
};

export const modifySummary = (str) => {
	if(str.length > 500){
		return str.slice(0, 500) + '...'
	}
	return str;
};

// console.log(mergeSortedArray([1,2,3,5,9],[4,6,7,8]));


export const find_relevant_results = (table, searchArr) => {
	let tempArr = [];
	// console.log('relevant results', table, searchArr)
	let allKeys = Object.keys(table);
	let newSearchArr = removePreposition(searchArr);

	
	newSearchArr.map((item) => {
		// console.log('item', table[item]);
		if(table[item]){tempArr.push(table[item])}
		else{

		}
	});

	return find_common_elements(tempArr)


	
};


export const lowerCasing = (arr) => {
	// console.log('arr', arr, typeof arr)
	return(arr.map((item) => {
		return item.toLowerCase()
	}))
};


// console.log('common elements', find_common_elements([[1, 2, 3, 4, 5], [2, 3, 4, 5], [3, 5, 7], [5, 7, 9]]));
