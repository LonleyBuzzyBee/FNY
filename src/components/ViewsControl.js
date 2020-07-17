import React from 'react';
import CreateItem from './CreateItem';
import ItemList from './itemList';
import Home from './Home';
import ItemDetail from './FlashItemDetail';
import EditItem from './EditItem';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as a from './../actions';
import { withFirestore } from 'react-redux-firebase';


class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  handleClickAddItem = () => {
    const { dispatch } = this.props;
    dispatch(a.toggleForm());
  }

  handleClick = () => {
    const { dispatch } = this.props;
    if (this.props.selectedItem != null) {
       dispatch(a.setSelectedItem(null));
    } 
    if (this.props.formVisibleOnPage) {
      dispatch(a.toggleForm());
    }
    if (this.props.homePageVisible){
      this.handleHomePageVisible();
    }
  }

  handleHomePageVisible = () => {
    const { dispatch } = this.props;
    dispatch(a.toggleHomePage());
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = "Return to Flash Item List";
    let buttonClick = this.handleClick;
   
    if (this.props.homePageVisible) {
      currentlyVisibleState =
        <Home />
        
    }else if (this.props.editing) { // editing: true, selectedItem: some ID
    currentlyVisibleState = <EditItem/>        
    }else if (this.props.selectedItem != null) { 
      currentlyVisibleState = <ItemDetail/>
    }else if (this.props.formVisibleOnPage) { 
      currentlyVisibleState = <CreateItem />;
    } else {
      currentlyVisibleState = <ItemList />;   
      buttonText = "Add Post";
      buttonClick = this.handleClickAddItem;
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={buttonClick}>{buttonText}</button>
        <button onClick={this.handleHomePageVisible}>Return to Home Page</button>
      </React.Fragment>
    );
  }
}

HomePage.propTypes = {
  selectedItem: PropTypes.string,
  formVisibleOnPage: PropTypes.bool,
  homePageVisible: PropTypes.bool,
  editing: PropTypes.bool
};

const mapStateToProps = state => {
  return {
    selectedItem: state.selectedItem,
    editing: state.editing,
    homePageVisible: state.homePageVisible,
    formVisibleOnPage: state.formVisibleOnPage
  }
}

HomePage = connect(mapStateToProps)(HomePage);

export default withFirestore(HomePage);