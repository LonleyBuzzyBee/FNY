import React from "react";
import PropTypes from "prop-types";
import * as a from "../actions";
import {  useSelector,useDispatch } from "react-redux";


function Item(props) {
  const dispatch = useDispatch();
  // const { dispatch } = props;
  return (
    <React.Fragment>
      <div onClick={() => dispatch(a.selectedItem(props.item))}>
        <h3>{props.item.title} - {props.item.category}</h3>
        <img src={props.item.img} alt="img" />
      </div>
    </React.Fragment>
  );
}

// Item.propTypes = {
//   title: PropTypes.string,
//   category: PropTypes.string,
//   description: PropTypes.string,
//   img: PropTypes.string
  
// };

export default Item;