import {ingester} from "../ingester";
import {removePlural} from "../tokenizer/singularizeTokenizer";
import {removePreposition} from "../tokenizer/prepsRemoveTokenizer";


test('ingester should take an array of tokenizers compose and apply each one of them on the array of words', () => {
	expect(ingester(removePreposition, removePlural)(['birds', 'are', 'chirping', 'in'])).toStrictEqual(['bird', 'is', 'chirping'])
});