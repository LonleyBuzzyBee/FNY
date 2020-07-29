import ReusableForm from './ReusableForm';
import PropTypes from 'prop-types';
import { useFirestore } from 'react-redux-firebase';
import React from 'react';
import * as a from "../actions";
import { connect, useDispatch } from "react-redux";



function EditItem(props){
  const firestore = useFirestore();
  const dispatch = useDispatch();
  
  function editItemFormSubmission(event) {
    event.preventDefault();
    dispatch(a.editItem());
    
    const propertiesToUpdate = {
      category: event.target.category.value,
      description: event.target.description.value,
      id: props.selectedItem.id,
      img: event.target.img.value,
      title: event.target.title.value
    }
    dispatch(a.selectedItem(propertiesToUpdate));
    return firestore.update({ collection: 'items', doc: props.selectedItem.id }, propertiesToUpdate)
    
  }

  return (
    <React.Fragment>
      <ReusableForm
        formSubmission={editItemFormSubmission}
        buttonText="flash card list"/>
    </React.Fragment>
  )
}

// EditItem.propTypes = {
//   selectedItem: PropTypes.obj,
//   editing: PropTypes.bool
// };

const mapStateToProps = state => {
  return {
    selectedItem: state.selectedItem,
    editing: state.editing
  }
};

export default connect(mapStateToProps)(EditItem); 