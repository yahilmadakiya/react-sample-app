import React from "react";
import Nav from "./Nav"

import './header.css';

class Header extends React.Component {
	render() {
		return (
			<header>
				<h1 className="site-logo">Logo</h1>
				<Nav />
			</header>
		);
	}
}

export default Header;
