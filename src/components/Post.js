import React from 'react';
import Header from './header/Header';
import { config } from '../config';

class Post extends React.Component {

	constructor ( props ) {
		super(props);

		this.state = {
			post: [],
			loading: true,
		};
	}

	componentDidMount() {
		fetch( `${config.API_KEY}posts/${this.props.id}?_format=json&access-token=${config.ACCESS_TOKEN}` )
		.then( response => response.json() )
		.then( jsonData => {
			if ( jsonData._meta.success ) {
				this.setState({
					post: jsonData.result,
					loading: false,
				});
			}
		} );
	}

	renderPost() {

		const post = this.state.post;
		console.log( post );

		if ( post ) {
			return(
				<div>
					<h3>{post.title}</h3>
					<p>{post.body}</p>
				</div>
			);
		}
	}

	render() {
		return (
			<React.Fragment>
				<Header />
				{ this.state.loading && <p>Loading...</p> }
				{ this.renderPost() }
			</React.Fragment>
		);
	}
}

export default Post;
