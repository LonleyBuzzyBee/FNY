import React from "react";

const ReusableForm = ({formSubmission, importImage,buttonText }) => {

  return (
    <div className="form">
      <h3>CREATE NEW ITEM</h3>
       <hr className="hrItem"></hr>
      <form onSubmit={formSubmission}>
        <input
          type='text'
          name='title'
          placeholder='Product Name'
        />
        <input
          type='number'
          name='rating'
          placeholder='Star Rating'
        />
        <input
          type='number'
          name='price'
          placeholder='Price'
        />
        <input
          type='text'
          name='category'
          placeholder='Category'
        />
        <input className="fileButton"
          type='file'
          onChange={importImage}
          name='img'
          placeholder='image path'
        />
        <textarea
          type='text'
          name='description'
          placeholder='Enter description here'
        />
        <div className="formButtons">
          <button className="submitButton" type='submit'>{buttonText}</button>
          <button className="formListButton"><a href='/list'>Back to list</a></button>
        </div>
      </form>
    </div>
  );
}
export default ReusableForm;