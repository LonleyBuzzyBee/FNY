import React from "react";
import * as a from "../actions";
import {useDispatch } from "react-redux";


function Item(props) {
  const dispatch = useDispatch();
  console.log(props.item.img);
  return (
    <React.Fragment>
      <div onClick={() => dispatch(a.selectedItem(props.item))}>
        <img width="300px" src={props.item.img} alt="img" />
        <hr className="hrItem"></hr>
        <h4>{props.item.title}</h4>
      </div>
    </React.Fragment>
  );
}
// fill {object-fit: fill;}
// .contain {object-fit: contain;}
// .cover {object-fit: cover;}
// .scale-down {object-fit: scale-down;}
// .none {object-fit: none;}



export default Item;