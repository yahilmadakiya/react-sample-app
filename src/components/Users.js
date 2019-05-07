import React from 'react';
import Header from './header/Header';
import { config } from '../config';
import { Link } from '@reach/router';
import Footer from './footer/Footer';

class Users extends React.Component {

	constructor( props ) {
		super(props);

		this.state = {
			users: [],
			loading: true,
		}
	}

	componentDidMount() {
		fetch( `${config.API_KEY}users?_format=json&access-token=${config.ACCESS_TOKEN}` )
		.then( response => response.json() )
		.then( userData => {
			if ( userData._meta.success ) {
				this.setState( {
					users: userData.result,
					loading: false,
				} )
			}
		} )
	}

	renderUsers() {

		const users = this.state.users;

		if ( users.length ) {
			return users.map( user => (
				<div key={user.id} className="users-list__item user">
					<Link to={`/users/${user.id}`}>
						<img src={user._links.avatar.href} className="user__avatar" alt="User Avatar" />
						<h2 className="user__name">{user.first_name} {user.last_name}</h2>
					</Link>
				</div>
			) );
		}

	}

	render() {
		return (
			<React.Fragment>
				<Header />
				<div className="container">
					{ this.state.loading && <p>Loading...</p> }
					<div className='users-list'>
						{ this.renderUsers() }
					</div>
				</div>
				<Footer />
			</React.Fragment>
		);
	}
}

export default Users;
