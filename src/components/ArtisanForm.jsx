import React from 'react';
import { Link } from "react-router-dom";

class ArtisanForm extends React.Component {
	render() {
		return (
			<div className='ArtisanForm'>
			<form>
				<p> <label> Artisan name: <input type="text" name="ArtisanName" /> </label> </p>
				<p> <label> Password: <input type="password" name="ArtisanPassword" /> </label> </p>
				<p> <label> Location: <input type="text" name="Location" /> </label> </p>
				<p> <label> Craft: <input type="text" name="Craft" /> </label> </p>
				<p> <Link id='AProfileLink' to="/profile">Submit</Link> </p>
			</form>
			</div>
		);
	}
}

export default ArtisanForm;
