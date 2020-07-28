import React from 'react';
import CreateItem from './CreateItem';
import ItemList from './ItemList';
import ItemDetail from './ItemDetails';
import EditItem from './EditItem';
import { useSelector, useDispatch} from 'react-redux';
import * as a from './../actions';
import { withFirestore } from 'react-redux-firebase';
import LandingPage from './LandingPage';



function ViewsControl() {
  const landingPageVisible = useSelector(state => state.landingPageVisible);

  const formVisibleOnPage = useSelector(state => state.formVisibleOnPage);

  const editing = useSelector(state => state.editing);

  const selectedItem = useSelector(state => state.selectedItem);

  
  
  const dispatch = useDispatch();
  let currentlyVisibleState = null;
  let buttonText = "Go to item list";
  let buttonClick = null;
  
  if (landingPageVisible) {
    currentlyVisibleState =
    <LandingPage />;
    buttonClick = () => {
      dispatch(a.hideLanding());
    }
    
  }else if (editing) { 
    currentlyVisibleState = <EditItem />;
    buttonClick = () => dispatch(a.editItem());
  
  } else if (selectedItem != null) { 
    
    currentlyVisibleState = <ItemDetail />;
    buttonClick = () => dispatch(a.selectedItem(null));
   

  }else if (formVisibleOnPage) { 
    currentlyVisibleState = <CreateItem />;
    buttonClick = () => dispatch(a.seeForm());
    
  } else {
    currentlyVisibleState = <ItemList />;
    buttonClick = () => dispatch(a.seeLanding())
  }
    return (
    <div>
      {currentlyVisibleState}
      <button onClick={buttonClick}>{buttonText}</button>
      <button onClick={() => dispatch(a.seeLanding())}>return to landing</button>
    </div>
    );
  }


export default withFirestore(ViewsControl);