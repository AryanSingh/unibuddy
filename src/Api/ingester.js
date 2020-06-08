
//this is a curried function. It takes functions to be applied on the argument(x) which will be recieved later. The functions are composed and applied right to left
export const ingester = (...fns) => x => {
	let functions = Array.prototype.slice.call(fns);
	return functions.reduceRight((v, fn) => fn(v), x)
};





