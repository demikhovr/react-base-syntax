import React, { Component } from 'react';
import './App.css';

import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
	state = {
		users: [
			{
				name: 'Rodion',
				job: 'Web Developer'
			},
			{
				name: 'Andrey',
				job: 'Web Developer'
			}
		]
	};

	usernameChangeHandler = (evt) => {
		this.setState({
			users: [
				{
					name: 'Rodion',
					job: evt.target.value,
					className: 'focused'
				},
				{
					name: 'Andrey',
					job: 'Web Developer'
				}
			]
		});
	};

	fieldFocusHandler = (evt) => {
		this.setState({
			users: [
				{
					name: 'Rodion',
					job: evt.target.value,
					className: 'focused'
				},
				{
					name: 'Andrey',
					job: 'Web Developer'
				}
			]
		});
	};

	fieldBlurHandler = (evt) => {
		this.setState({
			users: [
				{
					name: 'Rodion',
					job: evt.target.value,
					className: ''
				},
				{
					name: 'Andrey',
					job: 'Web Developer'
				}
			]
		});
	};

  render() {
		return (
			<div className="App">
				<UserInput changeName={this.usernameChangeHandler}
									 focusField={this.fieldFocusHandler}
									 blurField={this.fieldBlurHandler}
									 currentName={this.state.users[0].job}/>
				{this.state.users.map((user, i) =>
					<UserOutput key={i}
											user={user.name}
											job={user.job}
											className={user.className ? `UserOutput ${user.className}` : 'UserOutput'}/>)}
			</div>
		);
  }
}

export default App;
