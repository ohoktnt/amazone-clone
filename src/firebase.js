// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCrmOtrBmi6-3GRgfZijCEuAK6jYJalogE",
  authDomain: "clone-87b0d.firebaseapp.com",
  projectId: "clone-87b0d",
  storageBucket: "clone-87b0d.appspot.com",
  messagingSenderId: "939908426444",
  appId: "1:939908426444:web:70c90740b23ca085a1b069",
  measurementId: "G-NELM99WPQ6",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

// real time databse
const db = firebaseApp.firestore();

// user auth
const auth = firebase.auth();

export { db, auth };
