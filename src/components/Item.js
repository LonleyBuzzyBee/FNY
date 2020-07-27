import React from "react";
import PropTypes from "prop-types";
import * as a from "../actions";


function Item(props) {
  const { dispatch } = props;
  return (
    <React.Fragment>
      <div onClick={() => dispatch(a.selectedItem(props.id))}>
        <h3>{props.title} - {props.category}</h3>
        <img src={props.img} alt="img" />
      </div>
    </React.Fragment>
  );
}

Item.propTypes = {
  title: PropTypes.string,
  category: PropTypes.string,
  description: PropTypes.string,
  img: PropTypes.string
  
};

export default Item;