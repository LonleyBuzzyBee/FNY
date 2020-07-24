import React from "react";
import PropTypes from "prop-types";
import { useFirestore, useFirestoreConnect, isLoaded } from 'react-redux-firebase';
import * as a from "../actions";
import { connect, useSelector } from "react-redux";

function ItemDetail(props){
  const firestore = useFirestore(); 
  const { dispatch } = props;
  useFirestoreConnect([
    {
      collection: 'items',
      doc: props.selectedItem
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
      <button onClick={() => deletingItem(props.selectedItem)}>delete this thing</button>
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

ItemDetail.propTypes = {
  selectedItem: PropTypes.string,
  editing:PropTypes.bool
};

const mapStateToProps = state => {
  return {
    selectedItem: state.selectedItem,
    editing: state.editing
  }
};


export default connect(mapStateToProps)(ItemDetail);