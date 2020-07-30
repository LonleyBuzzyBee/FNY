import React from "react";
import PropTypes from "prop-types";
// import { useDispatch } from "react-redux";
// import * as a from "../actions";



function ReusableForm(props) {
//  const dispatch = useDispatch();
  return (
    <div className="form">
      <h3>CREATE NEW ITEM</h3>
       <hr className="hrItem"></hr>
      <form onSubmit={props.formSubmission}>
        <input
          type='text'
          name='title'
          placeholder='Product Name'
        />
        <input
          type='text'
          name='category'
          placeholder='Category'
        />
        <input className="fileButton"
          type='file'
          onChange={props.importImage}
          name='img'
          placeholder='image path'
        />
        <textarea
          type='text'
          name='description'
          placeholder='Enter description here'
        />
        <div className="formButtons">
          <button className="submitButton" type='submit'>Submit</button>
          <button className="formListButton"><a href='/list'>Back to list</a></button>
        </div>
      </form>
    </div>
  );
}

ReusableForm.propTypes = {
  formSubmission: PropTypes.func,
  importImage: PropTypes.func,
  buttonText: PropTypes.string
};
export default ReusableForm;