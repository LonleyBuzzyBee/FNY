import ReusableForm from './ReusableForm';
import PropTypes from 'prop-types';
import { useFirestore } from 'react-redux-firebase';
import React from 'react';
import * as a from "../actions";
import { connect } from "react-redux";



function EditItem(props){
  const firestore = useFirestore();
  const { dispatch } = props;
  
  function editItemFormSubmission(event) {
    event.preventDefault();
    dispatch(a.editItem());

    const propertiesToUpdate = {
      title: event.target.title.value,
      category: event.target.category.value,
      content: event.target.description.value,
      img: event.target.img.value
    }
    return firestore.update({collection: 'items', doc: props.selectedItem }, propertiesToUpdate)
  }

  return (
    <React.Fragment>
      <ReusableForm
        formSubmission={editItemFormSubmission}
        buttonText="flash card list"/>
    </React.Fragment>
  )
}

EditItem.propTypes = {
  selectedItem: PropTypes.string,
  editing: PropTypes.bool
};

const mapStateToProps = state => {
  return {
    selectedItem: state.selectedItem,
    editing: state.editing
  }
};

export default connect(mapStateToProps)(EditItem); 