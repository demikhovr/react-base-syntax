import React from 'react';
import './UserInput.css';

const userInput = (props) => {
	return (
		<input type="text"
					 onChange={props.changeName}
					 onFocus={props.focusField}
					 onBlur={props.blurField}
					 value={props.currentName}
					 className="UserInput" />
	);
};

export default userInput;