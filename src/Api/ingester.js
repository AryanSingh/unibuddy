

export const ingester = (...fns) => x => {
	let functions = Array.prototype.slice.call(fns);
	return functions.reduceRight((v, fn) => fn(v), x)
};





