import React from 'react';
import { Link } from "react-router-dom";

class ConnectPage extends React.Component {
	render() {
		return (
			<div className='ConnectPage'>
				<p> <label> Connect Page </label> </p>
				<p> <img src='./unreal.jpg' width='65' height='40' /> <label> Luke Fabian </label> </p>
				<p> <img src='./unreal.jpg' width='65' height='40' /> <label> Chris Shier </label> </p>
				<p> <img src='./unreal.jpg' width='65' height='40' /> <label> Laura Kinney </label> </p>
				<p> <img src='./unreal.jpg' width='65' height='40' /> <label> Jessica Biel </label> </p>
				<p> <img src='./unreal.jpg' width='65' height='40' /> <label> Irina Shayk </label> </p>
				<Link id='CProfileLink' to="/profile"> Return to profile </Link>

			</div>
		);
	}
}

export default ConnectPage;
