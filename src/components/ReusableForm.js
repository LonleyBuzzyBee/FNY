import React, {useState} from "react";
import PropTypes from "prop-types";
import {storage} from "../firebase"

function ReusableForm(props) {

  const allInputs = {imgUrl: ''}
  const [imageAsFile, setImageAsFile] = useState('')
  const [imageAsUrl, setImageAsUrl] = useState(allImputs)
  
  console.log(imageAsFile)
 const handleImageAsFile = (e) => {
      const image = e.target.files[0]
      setImageAsFile(imageFile => (image))
  }

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
        <input
          type='file'
          name='img'
          placeholder='image path'
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