import {removePlural} from "../singularizeTokenizer";


test('result array should not have plurals', () => {
	expect(removePlural(['boss', 'bosses', 'book', 'books'])).not.toContain('bosses');
	expect(removePlural(['boss', 'bosses', 'book', 'books'])).not.toContain('books');
	expect(removePlural(['boss', 'bosses', 'book', 'books'])).toContain('boss');
	expect(removePlural(['boss', 'bosses', 'book', 'books'])).toContain('book');
});