import firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyCfdfQI10gqvIAZl68siWvnlDpAoxDvc8E",
    authDomain: "dojo-f4044.firebaseapp.com",
    projectId: "dojo-f4044",
    storageBucket: "dojo-f4044.appspot.com",
    messagingSenderId: "984794570177",
    appId: "1:984794570177:web:649c014b968af6a9d4e340"
  };


  //init firebase 
  firebase.initializeApp(firebaseConfig);

  //init individual services

  const projectFirestore = firebase.firestore();
  const projectAuth = firebase.auth();
  const timestamp = firebase.firestore.Timestamp;
  const projectStorage = firebase.storage()

  export {projectFirestore, projectAuth, timestamp, projectStorage};
