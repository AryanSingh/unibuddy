import {createHash} from "../wordHashCreator";


test('hash creator function should create correct hash and store the correct ids', () => {
	// expect
	expect(createHash({}, {id: 0, summary: 'arya is a good boys.'}, 'ary')).toStrictEqual(
		{
			'ary': [0],
			'arya': [0],
			'rya': [0],
			'good': [0],
			'goo': [0],
			'boy': [0],
			'is': [0],
			'ood': [0]
		}
	);
	expect(createHash(
		{
			'ary': [0],
			'arya': [0],
			'rya': [0],
			'good': [0],
			'goo': [0],
			'boy': [0],
			'is': [0],
			'ood': [0]
		},
		{
			id: 1, summary: 'arya good man.',
		}, 'ary'
	)).toStrictEqual(
		{
			'ary': [0, 1],
			'arya': [0, 1],
			'rya': [0, 1],
			'good': [0, 1],
			'goo': [0, 1],
			'boy': [0],
			'is': [0],
			'ood': [0, 1],
			'man': [1]
		}
	)

});