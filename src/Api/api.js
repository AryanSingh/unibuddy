

export default ingester = () => {
	let args = Array.prototype.slice.call(arguments);
	return args.reduceRight((arg, fn) => fn(arg))
}