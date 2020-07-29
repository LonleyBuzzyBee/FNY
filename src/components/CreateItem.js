import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { useFirestore} from 'react-redux-firebase'
import ReusableForm from './ReusableForm';
import * as a from "../actions";
import { connect } from "react-redux";
import { storage } from "../firebase"


function CreateItem(props) {

  const allInputs = {imgUrl: ''}
  const [imageAsFile, setImageAsFile] = useState('')
  const [imageAsUrl, setImageAsUrl] = useState(allInputs)
  
  console.log(imageAsFile)
  const handleImageAsFile = (e) => {
      const image = e.target.files[0]
      setImageAsFile(imageFile => (image))
    }
    
    
  const firestore = useFirestore();
  function addItemToFirestore(event){
    event.preventDefault();
    
    
  const { dispatch } = props; 
  dispatch(a.seeForm());

  if(imageAsFile === '' ) {
      console.error(`not an image, the image file is a ${typeof(imageAsFile)}`)
  }
      
  const uploadTask = storage.ref(`/images/${imageAsFile.name}`).put(imageAsFile)

  uploadTask.on('state_changed', 
    (snapShot) => {
      //takes a snap shot of the process as it is happening
      console.log(snapShot)
    }, (err) => {
      //catches the errors
      console.log(err)
    }, () => {
      // gets the functions from storage refences the image storage in firebase by the children
      // gets the download url then sets the image from firebase as the value for the imgUrl key:
      storage.ref('images').child(imageAsFile.name).getDownloadURL()
       .then(fireBaseUrl => {
         setImageAsUrl(prevObject => ({...prevObject, imgUrl: fireBaseUrl}))
       })
    })

    
    // const ref = firebase.storage().ref();

    // uploadTask.snapshot.ref.getDownloadURL().then(downloadURL => {
    //   console.log("new code" + " " + downloadURL);
    //   firestore.collection('items').update({ title: title, category: category, description: description, img: downloadURL })
    // });
      
    return firestore.collection('items').add(
      {
        title: event.target.title.value,
        category: event.target.category.value,
        description: event.target.description.value,
        img: event.target.img.value
      });
    }
  
  return(
    <React.Fragment>
      <ReusableForm
        formSubmission={addItemToFirestore}
        importImage={handleImageAsFile}
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

export default connect(mapStateToProps)(CreateItem);