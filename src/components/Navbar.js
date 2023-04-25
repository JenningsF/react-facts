import React from "react";
import reactLogo from "../images/react-logo.png";

function Navbar(props) {
	return (
		<nav>
			<img
				className="nav--logo_icon"
				src={reactLogo}
				alt="ReactFacts Logo"
			/>
			<h3 className="nav--logo_text">ReactFacts</h3>
			<h4 className="nav--title">Created by <a href="https://github.com/jenningsf" className="nav--title_link" target="_blank" rel="noreferrer">Jennings</a></h4>
		</nav>
	);
}

export default Navbar;
