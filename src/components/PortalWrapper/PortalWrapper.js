import { useEffect } from "react";
import { createPortal } from "react-dom";
import PropTypes from 'prop-types';


const Portal = ({children}) => {
	const mount = document.getElementsByClassName("App")[0];

	const el = document.createElement("div");

	useEffect(() => {
		if(mount){mount.appendChild(el)};
		return () => {if(mount){mount.removeChild(el)}};
	}, [el, mount]);

	return createPortal(children, el)
};

export default Portal;


Portal.propTypes = {
	children: PropTypes.element
};