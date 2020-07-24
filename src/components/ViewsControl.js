import React, { useState, useEffect, useReducer } from 'react';
import CreateItem from './CreateItem';
import ItemList from './ItemList';
import ItemDetail from './ItemDetails';
import EditItem from './EditItem';
import { connect } from 'react-redux';
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

const initialState = { landingPageVisible: false, formVisibleOnPage: false, selectedItem: null, editing: false };

const landingPage = () => ({ type: "SEE_LANDING" });
const formShow = () => ({ type: "SEE_FORM" });
const item = () => ({ type: "SElECTED_ITEM" });
const edit = () => ({ type: "EDIT_ITEM" });

function ViewsControl() {
  const [state, dispatch] = useReducer(rootReducer, initialState);

  
  let currentlyVisibleState = null;
  let buttonText = "Return to Products List";
  let buttonClick = this.handleClick;
  
  if (this.props.landingPageVisible) {
    currentlyVisibleState =
    <LandingPage />
    
  }else if (this.props.editing) { /
    currentlyVisibleState = <EditItem/>        
  }else if (this.props.selectedItem != null) { 
    currentlyVisibleState = <ItemDetail/>
  }else if (this.props.formVisibleOnPage) { 
    currentlyVisibleState = <CreateItem />;
  } else {
    currentlyVisibleState = <ItemList />;
  }
  //     return (
    //       <React.Fragment>
    //         {currentlyVisibleState}
    //         <button onClick={buttonClick}>{buttonText}</button>
    //         <button onClick={this.landingPageVisible}>Return to Home Page</button>
    //       </React.Fragment>
    // );
  return (
    <di>
    </di>
    );
  }
  
  


  // addItem = () => {
  //   const { dispatch } = this.props;
  //   dispatch(a.seeForm());
  // }

  // handleClick = () => {
  //   const { dispatch } = this.props;
  //   if (this.props.selectedItem != null) {
  //      dispatch(a.selectedItem(null));
  //   } 
  //   if (this.props.formVisibleOnPage) {
  //     dispatch(a.seeForm());
  //   }
  //   if (this.props.landingPageVisible){
  //     this.landingPageVisible();
  //   }
  // }

  // landingPageVisible = () => {
  //   const { dispatch } = this.props;
  //   dispatch(a.seeLanding());
  // }



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

ViewsControl = connect(mapStateToProps)(ViewsControl);

export default withFirestore(ViewsControl);