import {modified_binary_Search, binary_Search, find_common_elements, getAllSubstrings, mergeSortedArray, modifySummary, lowerCasing} from "../helpers";


test('modified binary search should return correct index to insert item if item is not present otherwise it returns nothing', () => {
	expect(modified_binary_Search([1, 2, 3, 7, 8, 10, 12], 4)).toBe(3);
	expect(modified_binary_Search([1, 2, 3, 7, 8, 10, 12], 7)).toBeUndefined();
});


test('binary search should return - 1 if an item is not present otherwise index of the item', () => {
	expect(binary_Search([1, 2, 3, 4, 8, 9, 10], 4)).toBe(3);
	expect(binary_Search([1, 2, 3, 4, 8, 9, 10], 5)).toBe(-1);
});


test('provided an array of arrays function should return the an array with the common elements', () => {
	expect(find_common_elements([[1, 2, 3, 4], [3, 4], [4]])).toStrictEqual([4])
});

test('provided a string of length more than three, return all the contigous substrings of length more than three', () => {
	expect(getAllSubstrings('appl')).toStrictEqual(['app', 'appl', 'ppl'])
});


test('merge two sorted array into new sorted array', () => {
	expect(mergeSortedArray([1, 2, 4, 6, 8], [3, 5, 7, 9])).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9])
});

export const sortFn = (a, b) => {
	return a - b;
};

test('strings with length more than 500 should be terminated with ... at end', () => {
	expect(modifySummary('jflsjflsa;jfasl;fjaslfjaslfjsalfjasljfsfjaslfjsfljslfjsl;fjasfjaslfjaslfjasl;jfsaljfasljfasljfasl;jfsalfsl;fjsafjsafjslfjsaljfsfjsajfaslfjs;lfjsdljfas;ljfsadljf;saldjflasjfls;jflsajfsa;lfjsljfasljfa;sljfasldjflasdjflsajfasjfalsd;jfla;sjfalsdjf;lasjfl;sadjfalsfj;sljfasl;jfasl;jfsadlfjasljfsaldjflsa;djfasdljfa;sdljf;asjfas;fjsa;fjasjfas;fasfjsa;lfjsad;fjasd;fjasd;lfjasd;fjasd;lfjsad;jfsad;lfjas;djfa;sdlfjsad;lfjlsadjf;asdjf;saldjfas;dljf;sadjfas;dljfl;asdfjasldjfa;sldfjas;dlf;lsjfsaljfasfjsljfkkkkkk')).toBe('jflsjflsa;jfasl;fjaslfjaslfjsalfjasljfsfjaslfjsfljslfjsl;fjasfjaslfjaslfjasl;jfsaljfasljfasljfasl;jfsalfsl;fjsafjsafjslfjsaljfsfjsajfaslfjs;lfjsdljfas;ljfsadljf;saldjflasjfls;jflsajfsa;lfjsljfasljfa;sljfasldjflasdjflsajfasjfalsd;jfla;sjfalsdjf;lasjfl;sadjfalsfj;sljfasl;jfasl;jfsadlfjasljfsaldjflsa;djfasdljfa;sdljf;asjfas;fjsa;fjasjfas;fasfjsa;lfjsad;fjasd;fjasd;lfjasd;fjasd;lfjsad;jfsad;lfjas;djfa;sdlfjsad;lfjlsadjf;asdjf;saldjfas;dljf;sadjfas;dljfl;asdfjasldjfa;sldfjas;dlf;lsjfsaljfasfjsljfkkkk...')
	expect(modifySummary('strlfjsaljfsaljf')).toBe('strlfjsaljfsaljf')
});

// console.log(mergeSortedArray([1,2,3,5,9],[4,6,7,8]));

test('lower case the string', () => {
	expect(lowerCasing(['apple Is a Good fruit'])).toStrictEqual(['apple is a good fruit']);
});






// console.log('common elements', find_common_elements([[1, 2, 3, 4, 5], [2, 3, 4, 5], [3, 5, 7], [5, 7, 9]]));
