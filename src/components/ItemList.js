import React from "react";
import Item from "./Item";
import { useSelector } from 'react-redux';
import { useFirestoreConnect, isLoaded} from 'react-redux-firebase';
import ItemDetail from "./ItemDetails";
import { app } from '../firebase';

// const db = app.firestore()

function ItemList() {
   useFirestoreConnect([
    {
      collection: 'items'
    }
  ]);


  const items = useSelector(state => state.firestore.ordered.items);

  console.log(items);

  const selectedItem = useSelector(state => state.selectedItem);



console.log(selectedItem);
  if (selectedItem) {
    return (
      
      <ItemDetail/>
    )
  }
  else if (isLoaded(items)) {
    console.log(items);
    return (
      <div className="listItemsContainer">
        <div className="listItems">
          {items.map((item) => {
            return <div className="listItem">
            <Item
              item={item}
              title={item.title}
              category={item.category}
              content={item.description}
              img={item.img}
              id={item.id}
                key={item.id} />
            </div>
          })}
      </div>
    </div>
    );
  } else {
    return (
      <React.Fragment>
        <h3>Loading...</h3>
      </React.Fragment>
    )
  }
}



export default ItemList;