import React from "react";
import PropTypes from "prop-types";
import { useFirestore, useFirestoreConnect, isLoaded } from 'react-redux-firebase';
import EditItem from './EditItem';
import * as a from "../actions";
import {  useSelector,useDispatch, useEffect } from "react-redux";

function ItemDetail(){
  const firestore = useFirestore(); 
  const dispatch = useDispatch();


  const selectedItem = useSelector(state => state.selectedItem);
  const editing = useSelector(state => state.editing);
  console.log("HERE IT IS", selectedItem);

  // useFirestoreConnect([
  //   {
  //     collection: 'items',
  //     doc: selectedItem
  //   }
  // ]);
  
  
  function deletingItem(id) {
    firestore.delete({collection: 'items', doc: id});
    dispatch(a.selectedItem(null));
  }
  console.log(selectedItem);

  // const item = useSelector(state => state.firestore.ordered.items)[];
  
  function editItem() {
    dispatch(a.editItem());//edit-reducer set editing  
  }
  if (editing) {
    return (
      <EditItem selectedItem={selectedItem}/>
      
    )
  }
  else if (isLoaded(selectedItem)) {
  return (
    <React.Fragment>
        <h3>{selectedItem.title} - {selectedItem.category}</h3>
        <p> {selectedItem.description} </p>
   
      <img src={selectedItem.img} alt="img"/>
      <button onClick={editItem}>edit this thing</button>
      <button onClick={() => deletingItem(selectedItem.id)}>delete this thing</button>
      <button onClick={() => dispatch(a.selectedItem(null))}>go to list</button>
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