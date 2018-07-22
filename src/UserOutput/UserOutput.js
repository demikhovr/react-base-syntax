import React from 'react';
import './UserOutput.css';

const userOutput = (props) => {
	return (
		<div className="UserOutput">
			<p>{props.user}</p>
			<p className={props.className}>{props.job}</p>
		</div>
	);
};

export default userOutput;