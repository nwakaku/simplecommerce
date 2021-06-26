import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';
import "firebase/storage";


const myApp = firebase.initializeApp({
    apiKey: "AIzaSyAlovUmXGkiJIF5aunOTECpTgPrs53LImY",
  authDomain: "material-hub.firebaseapp.com",
  projectId: "material-hub",
  storageBucket: "material-hub.appspot.com",
  messagingSenderId: "599415253706",
  appId: "1:599415253706:web:a34dd98cc2dddae117e233"
});

 const db = myApp.firestore();

 const auth = myApp.auth();

 const storage = myApp.storage();

export {db, auth, storage}