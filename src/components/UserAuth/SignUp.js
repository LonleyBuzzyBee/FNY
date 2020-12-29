import React from "react";
import firebase from "firebase/app";
import Header from '../ReusableComponents/Header';
import FNYLOGO from '../assets/imgs/logoFNY.png'


const SignUp = () => {

  const doSignUp = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    firebase.auth().createUserWithEmailAndPassword(email, password).then(function(){
      console.log("successfully signed up!");
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
          <form onSubmit={doSignUp}>
            <label>Join the FNY family</label>
            <input
              type='text'
              name='email'
              placeholder='email' />
            <input
              type='password'
              name='password'
              placeholder='Password' />
            <a href="/"><button className="submitButton" type='submit'>SIGN UP</button></a>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignUp;