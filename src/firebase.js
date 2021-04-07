import firebase from "firebase/app";
import "firebase/auth";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDCFSuf28xexg5owdTuO8Ws1pxVUg9gLIs",
  authDomain: "seprojectdb.firebaseapp.com",
  projectId: "seprojectdb",
  storageBucket: "seprojectdb.appspot.com",
  messagingSenderId: "667112229281",
  appId: "1:667112229281:web:6329c635ffd244d430a3e0",
  measurementId: "G-7NETFE1EFW"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  console.log("firebase config error");
}

//firebase.initializeApp(firebaseConfig);
//firebase.analytics();
export const auth = firebase.auth();
export default firebase;
