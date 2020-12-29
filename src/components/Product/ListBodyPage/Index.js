import React from "react";
import { useSelector } from 'react-redux';
import { useFirestoreConnect, isLoaded} from 'react-redux-firebase';
import ItemDetail from "../ItemDetails";
import Header from '../../ReusableComponents/Header';
import TopSection from '../../ReusableComponents/TopSection';
import Items from '../Items';

const BodyItemList = () =>{
  const items = useSelector(state => state.firestore.ordered.items);
  const selectedItem = useSelector(state => state.selectedItem);
  useFirestoreConnect([
    {
      collection: 'items'
    }
  ]);
  
  if (selectedItem) {
    return (
      <ItemDetail />
      )
    }
    else if (isLoaded(items)) {
      let filteredItems = items.filter(item => item.category === "Body");
      return (
      <div>
        <Header/>
        <TopSection/>
        <div className="listItemsMainContainer">
          <section className="title">
              <h1>S H O P   B O D Y :</h1>
              <hr className="hrBorder"></hr>  
          </section>
          <Items items={filteredItems}/>
        </div>
      </div>
    );
  } else {
      return (
      <div>
        <Header/>
        <TopSection/>
        <div className="listItemsMainContainer">
          <section className="title">
              <h1>S H O P  B O D Y :</h1>
              <hr className="hrBorder"></hr>  
          </section>
          <div className="listItemsContainer">
            <div className="listItems">
            <h3>Loading...</h3>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default BodyItemList;