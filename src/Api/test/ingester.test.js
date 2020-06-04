import {ingester} from "../ingester";
import {removePlural} from "../tokenizer/singularizeTokenizer";
import {removePreposition} from "../tokenizer/prepsRemoveTokenizer";


// export const ingester = (...fns) => x => {
// 	let functions = Array.prototype.slice.call(fns);
// 	return functions.reduceRight((v, fn) => fn(v), x)
// };
test('ingester should take an array of tokenizers compose and apply each one of them on the array of words', () => {
	expect(ingester([removePreposition, removePlural]), ['birds', 'are', 'chirping', 'in']).toStrictEqual(['bird', 'are', 'chirping'])
});