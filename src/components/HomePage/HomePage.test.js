import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup, fireEvent, waitFor} from '@testing-library/react';
import HomePage from './HomePage';
import App from '../../App';

afterEach(cleanup);


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

it("search input exists and is empty at first and not focused", () => {
	const {getByTestId}  = render(
		<App/>
	);
	expect(getByTestId('searchInput')).toBeDefined();
	expect(getByTestId('searchInput').value).toBe('');
	expect(getByTestId('searchInput')).not.toBe(document.activeElement);
});

it('input should be focused on clicking on it', async () => {
	const {getByTestId}  = render(
		<App/>
	);
	const input = getByTestId('searchInput');
	input.focus();
	expect(input).toHaveFocus();

});


it('two characters in search Input should not trigger the dropdown', async () => {
	const {getByTestId} = render(<App/>);
	fireEvent.change(getByTestId('searchInput'), {target: {value: 'bo'}});
	expect(getByTestId('searchInput').value).toBe('bo');
	expect(getByTestId('listWrapper')).not.toBeUndefined();
});

it('three characters in search input should trigger dropdown if it is prsent in hashmap', async() => {
	const {getByTestId} = render(<App/>);
	fireEvent.change(getByTestId('searchInput'), {target: {value: 'boo'}});
	expect(getByTestId('searchInput').value).toBe('boo');
	await waitFor(() => {
		expect(getByTestId('listWrapper')).toBeInTheDocument();
		expect(getByTestId('listWrapper')).toBeEmptyDOMElement();
	}, {timeout: 5000})
});


//clicking on the search suggestion should add it to the book list and dropdown should become invisible
//clicking on search result which is already selected should not select it
//dropdown left and right x should match input
