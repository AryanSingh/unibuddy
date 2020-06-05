import React from 'react';
import ReactDOM from 'react-dom';
import HomePage from './HomePage';


it("renders without crashing", () => {
	const div = document.createElement("div");
	ReactDOM.render(
		<HomePage
			clearSearch={() => {}}
			hashTable={{}}
			searchResults={[]}
			setCurrentSearch={() => {}}
		/>,
		div);
});



// HomePage.propTypes = {
// 	clearSearch: PropTypes.func,
// 	hashTable: PropTypes.object,
// 	searchResults: PropTypes.arrayOf(PropTypes.shape({
// 		id: PropTypes.number,
// 		title: PropTypes.string,
// 		summary: PropTypes.string,
// 		author: PropTypes.string
// 	})),
// 	setCurrentSearch: PropTypes.func
// };