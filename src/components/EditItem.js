import ReusableForm from './ReusableForm';
import PropTypes from 'prop-types';
import { useFirestore } from 'react-redux-firebase';
import React from 'react';




function EditItem(props){
  const firestore = useFirestore();
  const { dispatch } = props;
  
  function editItemFormSubmission(event) {
    event.preventDefault();
    //props.editItem();

    const propertiesToUpdate = {
      title: event.target.title.value,
      category: event.target.category.value,
      content: event.target.description.value
    }
    return firestore.update({collection: 'items', doc: props.selectedItem }, propertiesToUpdate)
  }

  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={editItemFormSubmission}
        buttonText="flash card list"/>
    </React.Fragment>
  )
}

EditItem.propTypes = {

};

export default EditItem; 