import React from 'react'
import * as a from '../../../actions';
import { useDispatch } from 'react-redux';

const Posts = ({ posts }) => {
  const dispatch = useDispatch();
  return (
    <>
      {posts.map(post => (
        <div  onClick={() => dispatch(a.selectedItem(post))}className="recomended-posts-details"  key={post.id}>
          <img  src={post.img} alt="img" />
          <hr></hr>
          <div className="recomended-posts-details-info">
            <h6>{post.title}</h6>
            <p>Price: ${post.price}</p>
          </div>
        </div>
      ))}
    </>
  )
}

export default Posts; 
