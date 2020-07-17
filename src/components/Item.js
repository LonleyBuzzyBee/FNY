import React from "react";
import PropTypes from "prop-types";
import * as a from "../actions";
import { connect } from "react-redux";


function Item(props) {
  const { dispatch } = props;
  return (
    <React.Fragment>
      <div onClick={() => dispatch(a.selectedItem(props.id))}>
        <h3>{props.title} - {props.category}</h3>
      </div>
    </React.Fragment>
  );
}

Item.propTypes = {
  title: PropTypes.string,
  category: PropTypes.string,
  description: PropTypes.string
  
};

const mapStateToProps = state => {
  return {

  }
};

export default connect()(Item);