import React from 'react';
import Header from './header/Header';
import Footer from './footer/Footer';
import Posts from './Posts';

class Page extends React.Component {

	render() {

		return(
			<React.Fragment>
				<Header />
				<Posts pageNumber={ this.props.pageNumber || 1 }/>
				<Footer />
			</React.Fragment>
		);
	}
}

export default Page;
