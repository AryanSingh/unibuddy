import React from 'react';
import ReactDOM from 'react-dom';
import Portal from './PortalWrapper';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'

it("renders without crashing", () => {
	const div = document.createElement("div");
	ReactDOM.render(<Portal><div>aryan</div></Portal>, div);
});

//portal should be created in root elment, it should visually lie on top, clicking outside the portal should close it
it("renders portal correctly", () => {
	const {getByTestId} = render(
		<Portal>
			<div>aryan</div>
		</Portal>
	);
	expect(getByTestId('portal')).toHaveTextContent('aryan');
});
