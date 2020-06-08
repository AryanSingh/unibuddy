import {removePreposition} from "./tokenizer/prepsRemoveTokenizer";

// this function takes an array of sorted items and a value to be inserted into the items array. It gives out the position where the index at which value should be inserted

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


//function takes search for "value" in "items" array, if it founds it returns the index otherwise -1

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

// the function takes an array of array of indexes. It finds out the common indexes between the array of indexes and returns the common elements
//e.g it would take ([[1, 2, 3, 4], [2, 3, 4], [3, 4]]) and return ([3, 4])

export const find_common_elements = (array) => {
	// let array = Array.prototype.slice.call(arr);
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
	return commonElements;

};

// the getAllsubstrings method finds all the substrings of string greater than length 3. We use the all the substrings as keys to store the indexes of summary in which the word was present.

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

// the function takes tow sorted array and merges them and returns a new sorted array

export const mergeSortedArray = (a, b) => {
	let sorted = [], indexA = 0, indexB = 0;

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
	} else {
		for(let i=indexA; i<a.length; i++){
			if(sorted.indexOf(a[i]) === -1){
				sorted.push(a[i])
			}
		}
	}

	return sorted;
};

export const sortFn = (a, b) => {
	return a - b;
};

// the modify Summary function

export const modifySummary = (str) => {
	if(str.length > 500){
		return str.slice(0, 500) + '...'
	}
	return str;
};

// console.log(mergeSortedArray([1,2,3,5,9],[4,6,7,8]));

// the function takes the word has table and the search string being typed in the search bar. The function gets array of words present in the search bar. It looks up the words in the hash map, finds the array of summaries' indexes where it is present, finds out the common elements between them and returns it.


export const find_relevant_results = (table, searchArr) => {
	let tempArr = [];
	let newSearchArr = removePreposition(searchArr);

	
	newSearchArr.map((item) => {
		if(table[item]){tempArr.push(table[item])}
		else{

		}
	});

	return find_common_elements(tempArr)

};

// the function takes an array of strings and converts each one of them lowercase


export const lowerCasing = (arr) => {
	// console.log('arr', arr, typeof arr)
	return(arr.map((item) => {
		return item.toLowerCase()
	}))
};


