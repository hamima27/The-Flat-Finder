import firebase from "firebase";
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
firebase.initializeApp(firebaseConfig);
firebase.analytics();
export default firebase;
