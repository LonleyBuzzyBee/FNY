import React from 'react';
import ReusableForm from './ReusableForm';
import * as a from "../actions";
import { useDispatch, useSelector  } from "react-redux";
import { app } from '../firebase';

const db = app.firestore()

function CreateItem() {

  // const adminLoggedIn = useSelector(state => state.admin);
 
 
 

  const dispatch = useDispatch();
  dispatch(a.seeForm());

  const [fileUrl, setFileUrl] = React.useState(null)


  const handleImageAsFile = async (e) => {
    const file = e.target.files[0]
    const storageRef = app.storage().ref()
    const fileRef = storageRef.child(file.name)
    await fileRef.put(file)
    setFileUrl(await fileRef.getDownloadURL())
    }

  function addItemToFirestore(event){
    event.preventDefault();
    
    
    return db.collection('items').doc().set({
      title: event.target.title.value,
      category: event.target.category.value,
      description: event.target.description.value,
      img: fileUrl
    });
  }
  
  
  return(
    // <div className={adminLoggedIn ? "adminCreate" : "hiddenAdminControls"}>
    <div className="adminCreate">
      <ReusableForm
        formSubmission={addItemToFirestore}
        importImage={handleImageAsFile}
      buttonText="Submit"/>
   </div>
  );
}


export default CreateItem;