import React from 'react';
import ReactDOM from 'react-dom';
import BookCard from './BookCard';
import PropTypes from 'prop-types';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
// NOTE: jest-dom adds handy assertions to Jest and is recommended, but not required

import {render, fireEvent, screen} from '@testing-library/react'



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

//clicking on delete of bookcard should delete it