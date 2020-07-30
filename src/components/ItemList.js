import React from "react";
import Item from "./Item";
import FNYLOGO from './assets/imgs/logoNoC.png'
import { useSelector } from 'react-redux';
import { useFirestoreConnect, isLoaded} from 'react-redux-firebase';
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
    <div>
      <section className="itemListTopSection">
        <div className="animateImg1 animateImg">
        </div>
          
        <div className="logoOutsideContainer">
          <div className="logoInsideContainer">
              <img className="logoList" src={FNYLOGO} alt="fny logo"></img>
              <h2>35% OFF SALE</h2>
              <h5>USE COUPON CODE: </h5>
              <h5>F-N-Y</h5>
          </div>
        </div>
          
        <div className="animateImg2 animateImg">  
          </div>
      </section>
      <section className="title">
          <h1>S H O P  A L L :</h1>
          <hr className="hrBorder"></hr>  
      </section>
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
                <button className="add2cart">ADD TO CART</button>
              </div>
            })}
          </div>
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