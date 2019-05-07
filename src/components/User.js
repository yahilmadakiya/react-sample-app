import React from 'react';
import Header from './header/Header';
import Footer from './footer/Footer';
import { config } from '../config';

class User extends React.Component {
	constructor( props ) {
		super( props );

		this.state = {
			user: [],
			loading: true,
		}
	}

	componentDidMount() {
		fetch( `${config.API_KEY}users/${this.props.id}?_format=json&access-token=${config.ACCESS_TOKEN}` )
		.then( response => response.json() )
		.then( userData => {
			if ( userData._meta.success ) {
				this.setState( {
					user: userData.result,
					loading: false,
				} )
			}
		} )
	}

	renderUser() {

		const user = this.state.user;
		console.log(user);

		return(
			<div>
				<div>
					<b>Name: </b> {user.first_name} { user.last_name }
				</div>
				<div>
					<b>Gender: </b> { user.gender }
				</div>
				<div>
					<b>Dob: </b> { user.dob }
				</div>
				<div>
					<b>Email: </b> { user.email }
				</div>
				<div>
					<b>Phone: </b> { user.phone }
				</div>
				<div>
					<b>Website: </b> { user.website }
				</div>
			</div>
		);
	}

	render() {
		return (
			<React.Fragment>
				<Header />
				<div className="container">
					{ this.renderUser() }
				</div>
				<Footer />
			</React.Fragment>
		);
	}
}

export default User;
