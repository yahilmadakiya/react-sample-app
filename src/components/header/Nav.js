import React from "react";
import { Link } from "@reach/router";

class Nav extends React.Component {
	render() {
		return (
			<nav className="nav-link">
				<Link to="/">Home</Link>
				<Link to="/about">About</Link>
			</nav>
		);
	}
}

export default Nav;
