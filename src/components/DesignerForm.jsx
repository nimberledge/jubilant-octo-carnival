import React from 'react';
import { Link } from "react-router-dom";

class DesignerForm extends React.Component {
	render() {
		return (
			<div className='DesignerForm'>
				<form>
					<p> <label> Designer name: <input type="text" name="DesignerName" /> </label> </p>
					<p><label> Password: <input type="password" name="DesignerPassword" /> </label></p>
					<p><label> Location: <input type="text" name="Location" /> </label></p>
					<p><Link id='DProfileLink' to="/profile">Submit</Link></p>
				</form>
			</div>
		);
	}
}

export default DesignerForm;
