import React from "react";
import { useDispatch } from "react-redux";
import firebase from "firebase/app";
import Header from '../ReusableComponents/Header';
import * as a from "../../actions";
import FNYLOGO from '../assets/imgs/logoFNY.png'

const SignOut = () => {
  const dispatch = useDispatch();
  const doSignOut = () => {
    firebase.auth().signOut().then(function () {
      dispatch(a.updateCurrentUser(null));
      console.log("Successfully signed out!");
    }).catch(function(error) {
      console.log(error.message);
    });
  }
  return (
    <>
      <Header />
      <div className="sign-ins-container">
        <div className="sign-ins-container-inner">
          <img src={FNYLOGO}/>
          <label>We'll miss you!</label>
          <a href="/"><button className="submitButton" onClick={doSignOut}>SIGN OUT</button></a>
        </div>
      </div>
    </>
  );
}

export default SignOut;