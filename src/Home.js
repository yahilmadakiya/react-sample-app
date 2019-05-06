import React from 'react';
import Header from './components/header/Header';
import Posts from './components/Posts';

class Home extends React.Component {
	render() {
		return (
			<React.Fragment>
				<Header />
				<Posts />
			</React.Fragment>
		);
	}
}

export default Home;
