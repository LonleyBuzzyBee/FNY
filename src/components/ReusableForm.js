import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
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
        <textarea
          type='text'
          name='description'
          placeholder='Enter description here'
        />
        <button type='submit'>Submit</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmission: PropTypes.func,
  buttonText: PropTypes.string
};
export default ReusableForm;