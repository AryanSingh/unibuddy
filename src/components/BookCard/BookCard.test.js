import React from 'react';
import ReactDOM from 'react-dom';
import BookCard from './BookCard';


it("renders without crashing", () => {
	const div = document.createElement("div");
	ReactDOM.render(<BookCard/>, div);
});
