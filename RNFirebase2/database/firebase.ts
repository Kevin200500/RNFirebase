import firebase from 'firebase/app';
import { getFirestore, collection, getDocs,setDoc,doc } from 'firebase/firestore/lite';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCUVj847luFquy9pMQtahyLL0V4zj3rmdc",
    authDomain: "rnfirebase-1657a.firebaseapp.com",
    projectId: "rnfirebase-1657a",
    storageBucket: "rnfirebase-1657a.appspot.com",
    messagingSenderId: "1066291997493",
    appId: "1:1066291997493:web:4d05d771fdcede1cacfa7c"
  };

  const app  = firebase.initializeApp(firebaseConfig);

  const db = getFirestore(app);
  export default {
      firebase,
      db,
      getFirestore,
      collection,
      getDocs,
      setDoc,
      doc
  }