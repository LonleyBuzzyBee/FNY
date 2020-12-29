import React from 'react'

const Pagination = ({ postsPerPage, totalePosts, paginate,currentPage }) => {
  const pageNumbers = [];
  for(let i = 1; i <= Math.ceil(totalePosts / postsPerPage); i++){
    pageNumbers.push(i);
  }
  return (
      <>
        {pageNumbers.map(number => (
          <div style={{ margin: ".5em" }} onClick={() => paginate(number)} className={number === currentPage ? "circle-highlight" : "circle"} key={number}>
          </div>
        ))}
      </>
  )
}

export default Pagination
