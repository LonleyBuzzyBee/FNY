import React from "react";
import * as a from "../../actions";
import { useDispatch } from "react-redux";
import StarRatings from 'react-star-ratings';

const Item = ( {item} ) => {
  const dispatch = useDispatch();
  return (
    <React.Fragment>
      <div className="list-item" onClick={() => dispatch(a.selectedItem(item))}>
        <img className="list-item-picture"  src={item.img} alt="img" />
        <hr className="hrItem"></hr>
        <div className="list-item-middle">
          <div className="list-item-bottom">
            <StarRatings
              rating={item.rating}
              starDimension="15px"
              starSpacing="15px"
              numberOfStars={5} />
            <button className="add2cart">ADD TO CART</button>
          </div>
          <h6>{item.title}</h6>
          <p>Price: ${item.price}</p>
        </div>
      </div>
    </React.Fragment>
  );
}
export default Item;