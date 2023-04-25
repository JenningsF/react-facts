import React from "react";
import "../styles/toggle.css"

const Toggle = () => {
	return (
		<>
            <input
                className="toggle-switch"
                id={`toggle-switch`}
                type="checkbox"
            />
            <label
                className="toggle-switch-label"
                htmlFor={`toggle-switch`}
            >
                <span className="toggle-switch-button"></span>
            </label>
		</>
	);
};

export default Toggle;