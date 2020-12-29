import React, { useState}  from "react";
import Pagination from './Pagination';
import Posts from './Posts';
import { useSelector} from "react-redux";

const Recommended = ({recommended}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(4);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const numberOfPages = Math.ceil(recommended.length / postsPerPage);
  const currentPosts = recommended.slice(indexOfFirstPost, indexOfLastPost);
  const selectedItem = useSelector(state => state.selectedItem);
  const paginate = pageNumber => setCurrentPage(pageNumber);
  return (
    <section className="recomended">
      <div className="recomended-container">
         <span className="recomended-title"><h3>Since you liked <em>{selectedItem.title}</em>: </h3>
        <p>Pages: { numberOfPages}</p></span>
          <div className="recomended-posts">
            <Posts posts={currentPosts} />
          </div>
          <div className="recomended-pagination">
          <Pagination postsPerPage={postsPerPage} totalePosts={selectedItem !== null ? recommended.length : 0} currentPage={currentPage}paginate={paginate} />
          </div>
        </div>
      </section>
  )
}

export default Recommended;
