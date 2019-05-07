import React from 'react';
import Header from './components/header/Header';
import Posts from './components/Posts';
import Footer from './components/footer/Footer';

class Home extends React.Component {
	render() {
		return (
			<React.Fragment>
				<Header />
				<Posts />
				<Footer />
			</React.Fragment>
		);
	}
}

export default Home;
