export const modified_binary_Search = function(items, value){
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

export const find_common_elements = (...arr) => {
	let array = Array.prototype.slice.call(arr);
	let commonElements = [];

	let firstArr = array[0];

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



// console.log('common elements', find_common_elements([1, 2, 3, 4, 5], [2, 3, 4, 5], [3, 5, 7], [5, 7, 9]));
