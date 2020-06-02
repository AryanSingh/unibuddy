import {prepsList} from "../../../constants";
import {removePreposition} from "../prepsRemoveTokenizer";

// export const removePreposition = (arr) => {
// 	// console.log('arr', arr, typeof arr)
// 	return(arr.filter((item) => {
// 		if(prepsList.indexOf(item) === -1){
// 			return item
// 		}
// 	}))
// };

test('result array should not have prepositions defined in the constants sheet', () => {
	expect(removePreposition(['aryan', 'is', 'to', 'from', 'and', 'up', 'down'])).not.toContain('to');
	expect(removePreposition(['aryan', 'is', 'to', 'from', 'and', 'up', 'down'])).not.toContain('from');
	expect(removePreposition(['aryan', 'is', 'to', 'from', 'and', 'up', 'down'])).not.toContain('up');
	expect(removePreposition(['aryan', 'is', 'to', 'from', 'and', 'up', 'down'])).not.toContain('down');
});