import React from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import "./style.css";

function App() {
	const [darkMode, setDarkMode] = React.useState(true);

	function ToggleDarkMode() {
		setDarkMode(prevMode => !prevMode)
	}

	return (
		<div className="App">
			<Navbar />
			<Main />
		</div>
	);
}

export default App;
