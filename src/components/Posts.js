import React from 'react';
import { Link } from '@reach/router';
import { config } from '../config'

class Posts extends React.Component {
	constructor( props ) {
		super( props );

		this.state = {
			posts: [],
			metaData: [],
			loading: true,
		}
	}

	getFetchKey= (pageNo) => {
		console.warn( 'page', pageNo );
		return `${config.API_KEY}posts?_format=json&access-token=${config.ACCESS_TOKEN}&page=${pageNo}`;
	};

	fetchResults = (pageNo) => {
		fetch( this.getFetchKey(pageNo) )
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
	};

	componentDidMount() {
		this.fetchResults();
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

	handlePaginationClick = ( pageNo, event ) => {
		console.warn( 'gotPage', pageNo );
		event.preventDefault();
		this.fetchResults(pageNo);
	};

	render() {

	const isLoading = this.state.loading;
		const metaData = this.state.metaData;
		const currentPage = metaData.currentPage;
		const pageCount = metaData.pageCount;

		return (
			<div className="container">
				{ isLoading && <p>Loading...</p> }

				{ ! isLoading &&
					<div className="posts-listing">
						<h1>Post Listing</h1>
						{ this.renderPostData() }
						<div className="pagination">
							{ 1 === currentPage && (
								<span onClick={(event)=> this.handlePaginationClick(currentPage+1, event)}>Next</span>
							)}

							{ 1 !== currentPage && currentPage !== pageCount && (
								<React.Fragment>
									<span onClick={(event)=> this.handlePaginationClick(currentPage-1, event)}>Prev</span>
									<span onClick={(event)=> this.handlePaginationClick(currentPage+1, event)}>Next</span>
								</React.Fragment>
							)}

							{ currentPage === pageCount && (
								<span onClick={()=> this.handlePaginationClick(1)}>Prev</span>
							)}
						</div>
					</div>
				}
			</div>
		);
	}
}

export default Posts;
