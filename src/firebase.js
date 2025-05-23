import dotenv from 'dotenv';
import * as firebase from 'firebase';
import 'firebase/storage';
import 'firebase/auth';
import 'firebase/firestore';
dotenv.config()

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID 
}

console.log({firebaseConfig})

const app = firebase.initializeApp(firebaseConfig);
firebase.firestore();

export {
  app, firebase as default
}