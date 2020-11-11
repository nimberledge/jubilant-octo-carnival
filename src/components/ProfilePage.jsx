import React from 'react';
import { Link } from "react-router-dom";

class ProfilePage extends React.Component {
	render() {
		return (
			<div className='ProfilePage'>
				<p> <label> My Profile </label> </p>
				<div id='ProfileDetails'>
					<p> <img id='ProfilePic' src='./unreal.jpg' alt='./unreal.jpg' width='80' height='50' /> <label> Disha Pai </label> </p>
					<p> <label id='Bio'> Bio </label> </p>
					<p> I am the greatest player to ever play this game. I want to win at all costs. </p>
				</div>
				<p> <label id='MyFeedLabel'> My Feed </label> </p>
				<div id='FeedBox1'>
					<p> <label id='FeedLabel'> Donna Pinciotti </label> Gotta stay committed to the craft!! </p>
				</div>
				<div id='FeedBox2'>
					<p> <label id='FeedLabel'> Chivalrous Legume </label> Selling mad bling for crazy prices, hit me up on Designa-Sitra! </p>
				</div>
				<p> <Link id='ConnectPageLink' to='/connect'> Connect </Link> </p>
			</div>
		);
	}
}

export default ProfilePage;
