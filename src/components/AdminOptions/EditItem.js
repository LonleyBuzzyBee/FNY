import ReusableForm from '../ReusableComponents/ReusableForm';
import { useFirestore } from 'react-redux-firebase';
import React, { useState } from 'react';
import * as a from "../../actions";
import { useDispatch } from "react-redux";
import { app } from '../../firebase';
import Header from '../ReusableComponents/Header';


const EditItem = ({ selectedItem  }) => {
  
  const [fileUrl, setFileUrl] = useState(null);
  const firestore = useFirestore();
  const dispatch = useDispatch();
  const handleImageAsFile = async (e) => {
    const file = e.target.files[0]
    const storageRef = app.storage().ref()
    const fileRef = storageRef.child(file.name)
    await fileRef.put(file)
    setFileUrl(await fileRef.getDownloadURL())
  }
  const editItemFormSubmission = (event) => {
    event.preventDefault();
    dispatch(a.editItem());
    const propertiesToUpdate = {
      title: event.target.title.value,
      rating: event.target.rating.value,
      price: event.target.price.value,
      category: event.target.category.value,
      description: event.target.description.value,
      img: fileUrl
    }
    dispatch(a.selectedItem(propertiesToUpdate));
    return firestore.update({ collection: 'items', doc: selectedItem.id }, propertiesToUpdate)
  }
  return (
    <React.Fragment>
      <Header />
      <ReusableForm
        formSubmission={editItemFormSubmission}
        importImage={handleImageAsFile}
        buttonText="Submit"/>
    </React.Fragment>
  )
}
export default EditItem; 