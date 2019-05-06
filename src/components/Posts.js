import React from 'react';
import { Link } from '@reach/router';
import { config } from '../config'

class Posts extends React.Component {
	constructor( props ) {
		super( props );

		this.state = {
			posts: [],
			loading: true,
		}
	}

	componentDidMount() {
		fetch( `${config.API_KEY}posts?_format=json&access-token=${config.ACCESS_TOKEN}` )
		.then( response => response.json() )
		.then( jsonData => {
			if ( jsonData._meta.success ) {
				this.setState({
					posts: jsonData.result,
					loading: false,
				});
			}
		} );
	}

	renderPostData() {

		const posts = this.state.posts;

		if ( posts.length ) {
			return posts.map( post => (
				<div key={post.id}>
					<Link to={`/post/${post.id}`}>{post.title}</Link>
				</div>
			) )
		}
	}

	render() {
		return (
			<div className="posts">
				{ this.state.loading && <p>Loading...</p> }
				{ this.renderPostData() }
			</div>
		);
	}
}

export default Posts;
