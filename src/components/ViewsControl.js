import React from 'react';
import CreateItem from './CreateItem';
import ItemList from './ItemList';
import ItemDetail from './ItemDetails';
import EditItem from './EditItem';
import { connect, useSelector, useDispatch} from 'react-redux';
import PropTypes from 'prop-types';
import * as a from './../actions';
import { withFirestore } from 'react-redux-firebase';
import LandingPage from './LandingPage';
import rootReducer from '../reducers/index';


// class ViewsControl extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//     }
//   }
//     landingPageVisible: state.landingPageVisible,
//     formVisibleOnPage: state.formVisibleOnPage,
//     selectedItem: state.selectedItem,
//     editing: state.editing

// const initialState = { landingPageVisible: false, formVisibleOnPage: false, selectedItem: null, editing: false };

// const landingPage = () => ({ type: "SEE_LANDING" });
// const formShow = () => ({ type: "SEE_FORM" });
// const item = () => ({ type: "SElECTED_ITEM" });
// const edit = () => ({ type: "EDIT_ITEM" });
// const [state, dispatch] = useReducer(rootReducer, initialState);

function ViewsControl() {
  const landingPageVisible = useSelector(state => state.landingPageVisible);

  const formVisibleOnPage = useSelector(state => state.formVisibleOnPage);

  const editing = useSelector(state => state.editing);

  const selectedItem = useSelector(state => state.selectedItem);

  
  
  const dispatch = useDispatch();
  let currentlyVisibleState = null;
  let buttonText = "Return to Products List";
  let buttonClick = null;
  
  if (landingPageVisible) {
    currentlyVisibleState =
    <LandingPage />;
    buttonClick = dispatch(a.seeForm());
    
  }else if (editing) { 
    currentlyVisibleState = <EditItem />;
    buttonClick = dispatch(a.editItem());
    
  }else if (selectedItem != null) { 
    currentlyVisibleState = <ItemDetail />;
    buttonClick =  dispatch(a.selectedItem(null));
    
  }else if (formVisibleOnPage) { 
    currentlyVisibleState = <CreateItem />;
    buttonClick = dispatch(a.seeForm());
    
  } else {
    currentlyVisibleState = <ItemList />;
    buttonClick = dispatch(a.seeLanding());
    
  }
  //     return (
    //       <React.Fragment>
    //         {currentlyVisibleState}
    //         <button onClick={buttonClick}>{buttonText}</button>
    //         <button onClick={this.landingPageVisible}>Return to Home Page</button>
    //       </React.Fragment>
    // );
    return (
      <div>
      {currentlyVisibleState}
      <button onClick={buttonClick}>{buttonText}</button>
      <button onClick={() => dispatch(a.seeLanding())}>return to landing</button>
    </div>
    );
  }
  
  
  
  // const dispatch = useDispatch();
  // addItem = () => {
  //    const dispatch = useDispatch();
  //   dispatch(a.seeForm());
  // }


  // landingPageIsVisible = () => {
  //  const dispatch = useDispatch();
  //   dispatch(a.seeLanding());
  // }
  
  
  
  
  // handleClick = () => {
  //    const dispatch = useDispatch();
     
  //    if (selectedItem != null) {
  //      dispatch(a.selectedItem(null));
  //     } 
  //     if (formVisibleOnPage) {
  //       dispatch(a.seeForm());
  //     }
  //     if (landingPageVisible){
  //       landingPageIsVisible();
  //     }
  //   }
  
  // render() {
    //   let currentlyVisibleState = null;
    //   let buttonText = "Return to Products List";
  //   let buttonClick = this.handleClick;
   
  //   if (this.props.landingPageVisible) {
  //     currentlyVisibleState =
  //       <LandingPage />
        
  //   }else if (this.props.editing) { // editing: true, selectedItem: some ID
  //   currentlyVisibleState = <EditItem/>        
  //   }else if (this.props.selectedItem != null) { 
  //     currentlyVisibleState = <ItemDetail/>
  //   }else if (this.props.formVisibleOnPage) { 
  //     currentlyVisibleState = <CreateItem />;
  //   } else {
  //     currentlyVisibleState = <ItemList />;   
  //     buttonText = "Add Item";
  //     buttonClick = this.addItem;
  //   }
  //   return (
  //     <React.Fragment>
  //       {currentlyVisibleState}
  //       <button onClick={buttonClick}>{buttonText}</button>
  //       <button onClick={this.landingPageVisible}>Return to Home Page</button>
  //     </React.Fragment>
  //   );
  // }


// ViewsControl.propTypes = {
//   landingPageVisible: PropTypes.bool,
//   formVisibleOnPage: PropTypes.bool,
//   selectedItem: PropTypes.string,
//   editing: PropTypes.bool
// };

// const mapStateToProps = state => {
//   return {
//     landingPageVisible: state.landingPageVisible,
//     formVisibleOnPage: state.formVisibleOnPage,
//     selectedItem: state.selectedItem,
//     editing: state.editing
//   }
// }

// ViewsControl = connect()(ViewsControl);

export default withFirestore(ViewsControl);