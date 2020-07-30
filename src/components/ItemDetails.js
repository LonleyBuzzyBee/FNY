import React from "react";
import PropTypes from "prop-types";
import { useFirestore, useFirestoreConnect, isLoaded } from 'react-redux-firebase';
import EditItem from './EditItem';
import * as a from "../actions";
import {  useSelector,useDispatch, useEffect } from "react-redux";

function ItemDetail(){
  const firestore = useFirestore(); 
  const dispatch = useDispatch();

  // const adminLoggedIn = useSelector(state => state.admin);

  const selectedItem = useSelector(state => state.selectedItem);
  const editing = useSelector(state => state.editing);
  console.log("HERE IT IS", selectedItem);

  
  function deletingItem(id) {
    firestore.delete({collection: 'items', doc: id});
    dispatch(a.selectedItem(null));
  }
  console.log(selectedItem);

  
  
  function editItem() {
    dispatch(a.editItem()); 
  }
  if (editing) {
    return (
      <EditItem selectedItem={selectedItem}/>
    )
  }
  else if (isLoaded(selectedItem)) {
    return (
    <div className="itemDetailsContainer">
      <div className="itemDetails">
        <img src={selectedItem.img} className="itemDetailsImage"alt="img"/>
          <hr className="hrItem"></hr>
        <h3><strong>{selectedItem.title}</strong></h3>
          <p><em>{selectedItem.category}</em></p>
          <hr className="hrItem"></hr>
        <p> {selectedItem.description} </p>
        {/* <button className="adminEdit" onClick={editItem}>edit this thing</button> */}
        <button className="adminDelete" onClick={() => deletingItem(selectedItem.id)}>DELETE</button>
        <button className="listButton" onClick={() => dispatch(a.selectedItem(null))}>SHOP ALL</button>
      </div>
    </div>
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


/* <button className={adminLoggedIn ? "adminEdit" : "hiddenAdminControls"} onClick={editItem}>edit this thing</button>
<button className={adminLoggedIn ? "adminDelete" : "hiddenAdminControls"} onClick={() => deletingItem(selectedItem.id)}>delete this thing</button> */