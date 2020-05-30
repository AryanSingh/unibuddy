
export const lowerCasing = (arr) => {
	// console.log('arr', arr, typeof arr)
	return(arr.map((item) => {
		return item.toLowerCase()
	}))
};