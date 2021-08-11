import React from 'react'

const Pagination = ({ postsPerPage, totalPosts, paginate}) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++){
        pageNumbers.push(i);
    }
    return (
        <nav>
             <ul className="pagination">
                 {pageNumbers.map(number => (
                    <span onClick={() => paginate(number)}>
                        {number}
                    </span>
                        ))}
                <span className="icon">››</span>
                <span className="last">Last »</span>
                </ul>
        </nav>
    )
}

export default Pagination
