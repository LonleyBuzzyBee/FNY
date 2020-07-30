import React from "react";
import { useDispatch } from "react-redux";
import firebase from "firebase/app";
import * as a from "../actions";


function Signin() { 
  const dispatch = useDispatch();

  function doSignUp(event) {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    firebase.auth().createUserWithEmailAndPassword(email, password).then(function(){
      console.log("successfully signed up!");
    }).catch(function(error) {
      console.log(error.message);
    });
  }

  function doSignIn(event) {
  event.preventDefault();
  const email = event.target.signinEmail.value;
  const password = event.target.signinPassword.value;
  firebase.auth().signInWithEmailAndPassword(email, password).then(function() {
    console.log("Successfully signed in!");
  }).catch(function(error) {
    console.log(error.message);
  });
    
    if (email === "admin@email.com" && password === "thisIsAdmin") {
      dispatch(a.isAdmin());
    }
  }
  
  function doSignOut() {
  firebase.auth().signOut().then(function() {
    console.log("Successfully signed out!");
  }).catch(function(error) {
    console.log(error.message);
  });
}

  return (
   <div className="userParent">
    <div className="signIns">
      <h1>Sign up</h1>
      <form onSubmit={doSignUp}>
        <input
          type='text'
          name='email'
          placeholder='email' />
        <input
          type='password'
          name='password'
          placeholder='Password' />
        <button className="submitButton"  type='submit'>Sign up</button>
      </form>
      </div>

      <div className="signIns">
        <h1>Sign In</h1>
      <form onSubmit={doSignIn}>
        <input
          type='text'
          name='signinEmail'
          placeholder='email' />
        <input
          type='password'
          name='signinPassword'
          placeholder='Password' />
        <button className="submitButton"  type='submit'>Sign in</button>
        </form>
      </div>

      <div className="signIns">
        <h1>Sign Out</h1>
        <button className="submitButton" onClick={doSignOut}>Sign out</button>
      </div>

  </div>
  );
}

export default Signin