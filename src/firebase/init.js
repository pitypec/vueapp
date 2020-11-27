import firebase from "firebase";
import firestore from "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyALK4k7AaExcO-K_FamSousBA9I5vhF85Y",
  authDomain: "vueapp-90cf0.firebaseapp.com",
  databaseURL: "https://vueapp-90cf0.firebaseio.com",
  projectId: "vueapp-90cf0",
  storageBucket: "vueapp-90cf0.appspot.com",
  messagingSenderId: "1005865777665",
  appId: "1:1005865777665:web:5154f3f2a2746edbb09e00",
  measurementId: "G-C4GSBHWL6V"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebaseApp.firestore();
