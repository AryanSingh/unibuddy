import React from 'react';
import ReactDOM from 'react-dom';
import BookCard from './BookCard';
import PropTypes from 'prop-types';



it("renders without crashing", () => {
	const div = document.createElement("div");
	ReactDOM.render(
		<BookCard index={1} book={{id: 1, title: 'test', summary: 'test', author: 'test'}} deleteBook={() => {}}/>, div);
});


// BookCard.propTypes = {
// 	index: PropTypes.number,
// 	book: PropTypes.shape({
// 		id: PropTypes.number,
// 		title: PropTypes.string,
// 		summary: PropTypes.string,
// 		author: PropTypes.string
// 	}),
// 	deleteBook: PropTypes.func
// };