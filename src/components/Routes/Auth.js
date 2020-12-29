import React, { useEffect, useState } from 'react';
import firebase from 'firebase/app';
import { useSelector, useDispatch  } from 'react-redux';
import * as a from "../../actions";

export const AuthContext = React.createContext();
const AuthProvider = ({ children }) => {
  const dispatch = useDispatch();
  const [currentUser, setCurrentUser] = useState(null);
  const isAdmin = useSelector(state => state.admin);
  useEffect(() => {
    dispatch(a.updateCurrentUser(firebase.auth().currentUser));
    firebase.auth().onAuthStateChanged(setCurrentUser)
    if (currentUser !== null) {
        if (currentUser.email === "admin@email.com") {
          
          dispatch(a.isAdmin());
        }
      }
    }, [currentUser]);
    console.log(isAdmin);
    console.log(currentUser);
  return (
    <AuthContext.Provider
      value={{
        currentUser
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;