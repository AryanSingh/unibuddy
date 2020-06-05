import React from 'react';
import ReactDOM from 'react-dom';
import PortalWrapper from './PortalWrapper';


it("renders without crashing", () => {
	const div = document.createElement("div");
	ReactDOM.render(<PortalWrapper><div>aryan</div></PortalWrapper>, div);
});
