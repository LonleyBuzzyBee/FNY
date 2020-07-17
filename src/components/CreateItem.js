import React from 'react';
import PropTypes from 'prop-types';
import { useFirestore} from 'react-redux-firebase'
import ReusableForm from './ReusableForm';
import * as a from "../actions";
import { connect } from "react-redux";


function CreateItem(props) {
  const firestore = useFirestore();
  function addItemToFirestore(event){
    event.preventDefault();
    const { dispatch } = props; 
    dispatch(a.seeForm());
    return firestore.collection('items').add(
      {
        title: event.target.title.value,
        category: event.target.category.value,
        description: event.target.description.value
      }
    );
  }
  return(
    <React.Fragment>
      <ReusableForm
        formSubmission={addItemToFirestore}
      buttonText="Submit"/>
   </React.Fragment>
  );
}

CreateItem.propTypes = {
  formVisibleOnPage: PropTypes.bool
}

const mapStateToProps = state => {
  return {
    formVisibleOnPage : state.formVisibleOnPage
  } 
}

export default connect()(CreateItem);