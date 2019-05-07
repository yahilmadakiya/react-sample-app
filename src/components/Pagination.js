import React from 'react';
import { Link } from '@reach/router';

class Pagination extends React.Component {


	render() {
		const { currentPage, pageCount, handlePaginationClick } = this.props;

		return (
			<div className="pagination">
				{ 1 === currentPage && (
					<Link onClick={handlePaginationClick} to={`/page/${currentPage+1}`}>Next</Link>
				)}

				{ 1 !== currentPage && currentPage !== pageCount && (
					<React.Fragment>
						<Link onClick={handlePaginationClick} to={`/page/${currentPage-1}`}>Prev</Link>
						<Link onClick={handlePaginationClick} to={`/page/${currentPage+1}`}>Next</Link>
					</React.Fragment>
				)}

				{ currentPage === pageCount && (
					<Link onClick={handlePaginationClick} to=''>Prev</Link>
				)}
			</div>
		);
	}
}

export default Pagination;
