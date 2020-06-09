import { useEffect } from "react";
import { createPortal } from "react-dom";
import PropTypes from 'prop-types';



// Portal is a HOC component used for wrapping any other component like dropdwon or modal which need to be placed on top of all other views. Portal directly crates a div at the root level of app and places the children in it.


const Portal = ({children}) => {
	const mount = document.getElementsByClassName("App")[0];

	const el = document.createElement("div");
	el["data-testid"] = "portal";

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