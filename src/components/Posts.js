import React from 'react';
import { Link } from '@reach/router';
import { config } from '../config'
import Pagination from './Pagination';

class Posts extends React.Component {
	constructor( props ) {
		super( props );

		this.state = {
			posts: [],
			metaData: [],
			loading: true,
		}
	}

	getFetchKey() {
		return `${config.API_KEY}posts?_format=json&access-token=${config.ACCESS_TOKEN}&page=${this.props.pageNumber}`;
	}

	componentDidMount() {
		fetch( this.getFetchKey() )
		.then( response => response.json() )
		.then( jsonData => {
			if ( jsonData._meta.success ) {
				this.setState({
					posts: jsonData.result,
					metaData: jsonData._meta,
					loading: false,
				});
			}
		} );
	}

	renderPostData() {

		const posts = this.state.posts;

		if ( posts.length ) {
			return posts.map( post => (
				<div key={post.id} className="posts-listing__item">
					{post.id}. <Link to={`/post/${post.id}`}>{post.title}</Link>
				</div>
			) )
		}
	}

	renderPagination() {
		const metaData = this.state.metaData;

		return (
			<Pagination
			currentPage={metaData.currentPage}
			pageCount={metaData.pageCount}
			/>
		);
	}

	render() {

	const isLoading = this.state.loading;

		return (
			<div className="container">
				{ isLoading && <p>Loading...</p> }

				{ ! isLoading &&
					<div className="posts-listing">
						<h1>Post Listing</h1>
						{ this.renderPostData() }
						{ this.renderPagination() }
					</div>
				}
			</div>
		);
	}
}

export default Posts;
