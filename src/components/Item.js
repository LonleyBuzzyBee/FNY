import React from "react";
import * as a from "../actions";
import {useDispatch } from "react-redux";


function Item(props) {
  const dispatch = useDispatch();
  console.log(props.item.img);
  return (
    <React.Fragment>
      <div onClick={() => dispatch(a.selectedItem(props.item))}>
        <h3>{props.item.title} - {props.item.category}</h3>
        <img width="250px" src={props.item.img} alt="img" />
      </div>
    </React.Fragment>
  );
}


export default Item;