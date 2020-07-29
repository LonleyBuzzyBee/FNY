import React from "react";
import Item from "./Item";
import { useSelector } from 'react-redux';
import { useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase';

import ItemDetail from "./ItemDetails";

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
      <React.Fragment>
        {items.map((item) => {
          return <Item
            item={item}
            title={item.title}
            category={item.category}
            content={item.description}
            id={item.id}
            key={item.id} />
        })}
      </React.Fragment>
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