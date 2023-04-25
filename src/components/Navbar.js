import React from "react";
<<<<<<< HEAD
import reactLogo from "../images/react-logo.png";
=======
import logo from "../images/logo.png"
>>>>>>> 2e31b944723a6b137682b3dbbb5b5c25f16a0a72

function Navbar(props) {
	return (
		<nav>
<<<<<<< HEAD
			<img
				className="nav--logo_icon"
				src={reactLogo}
				alt="ReactFacts Logo"
			/>
			<h3 className="nav--logo_text">ReactFacts</h3>
			<h4 className="nav--title">Created by <a href="https://github.com/jenningsf" className="nav--title_link" target="_blank" rel="noreferrer">Jennings</a></h4>
=======
			<img src={logo} alt="React Logo" className="nav--icon" />
			<h3 className="nav--logo_text">Reacts Facts</h3>
			<h4 className="nav--title">React Course - Project 1</h4>
>>>>>>> 2e31b944723a6b137682b3dbbb5b5c25f16a0a72
		</nav>
	);
}

export default Navbar;
