import React from "react";
import Nav from "./Nav";
import { Link } from '@reach/router';

import './header.css';

class Header extends React.Component {
	render() {
		return (
			<header>
				<div className='header-container'>
					<Link to='/' className="site-logo"><h1>Logo</h1></Link>
					<Nav />
				</div>
			</header>
		);
	}
}

export default Header;
