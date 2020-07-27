import React from "react";
import PropTypes from "prop-types";
import { useFirestore, useFirestoreConnect, isLoaded } from 'react-redux-firebase';
import * as a from "../actions";
import {  useSelector,useDispatch } from "react-redux";

function ItemDetail(){
  const firestore = useFirestore(); 
  const dispatch = useDispatch();

  const editing = useSelector(state => state.editing);

  const selectedItem = useSelector(state => state.selectedItem);

  useFirestoreConnect([
    {
      collection: 'items',
      doc: selectedItem
    }
  ]);
  
  
  function deletingItem(id) {
    firestore.delete({collection: 'items', doc: id});
    dispatch(a.selectedItem(null));
  }

  const item = useSelector(state => state.firestore.ordered.items)[0];
  
  function editItem() {
    dispatch(a.editItem());//edit-reducer set editing  
  }
  
  if (isLoaded(item)) {
  return (
    <React.Fragment>
        <h3>{item.title} - {item.category}</h3>
        <p> {item.content} </p>
      <p>  </p>
      <img src={item.img} alt="img"/>
      <button onClick={editItem}>edit this thing</button>
      <button onClick={() => deletingItem(selectedItem)}>delete this thing</button>
    </React.Fragment>
  );
  } else {
    return (
      <React.Fragment>
        <h3>boop Loading...</h3>
      </React.Fragment>
    )
  }
}




export default ItemDetail;