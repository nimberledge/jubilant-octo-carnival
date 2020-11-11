import React from 'react';
import { Link } from "react-router-dom";

class LoginPage extends React.Component {
	render() {
		return (
			<div className='LoginPage'>
				<form>
					<p><label> Username / Email: <input type="text" name="Username/Email" /> </label></p>
					<p><label> Password: <input type="password" name="Username/Email" /> </label></p>
					<p><input type="submit" value="Submit" /></p>
					<p><label> Don't have an account? Sign up </label></p>
					<p><Link id='ArtisanLink' to="/artisan">Artisan Sign Up</Link></p>
					<p><Link id='DesignerLink' to="/designer">Designer Sign Up</Link></p>
				</form>
			</div>
		);
	}
}

export default LoginPage;
