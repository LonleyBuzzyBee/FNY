import React from 'react';
import ReusableForm from '../ReusableComponents/ReusableForm';
import * as a from "../../actions";
import { useDispatch } from "react-redux";
import { app } from '../../firebase';
import Header from '../ReusableComponents/Header';

const db = app.firestore()
const CreateItem = () => {
 
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
  const addItemToFirestore = (event) => {
    event.preventDefault();
    return db.collection('items').doc().set({
      title: event.target.title.value,
      rating: event.target.rating.value,
      price: event.target.price.value,
      category: event.target.category.value,
      description: event.target.description.value,
      img: fileUrl
    });
  }
  return(
    <>
       <Header />
      <div className="adminCreate">
        <ReusableForm
        formSubmission={addItemToFirestore}
        importImage={handleImageAsFile}
        buttonText="Submit"/>
      </div>
    </>
  );
}
export default CreateItem;