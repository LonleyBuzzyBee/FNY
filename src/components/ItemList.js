import React from "react";
import PropTypes from "prop-types";
import Item from "./Item";
import { useSelector } from 'react-redux';
import { useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase';

function ItemList(props) {
  useFirestoreConnect([
    {
      collection: 'items'
    }
  ]);

  const items = useSelector(state => state.firestore.ordered.items);
  console.log(items);
  
  if (isLoaded(items)) {
    console.log(items);
    return (
      <React.Fragment>
        {items.map((item) => {
          return <Item
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

ItemList.propTypes = {
}

export default ItemList;