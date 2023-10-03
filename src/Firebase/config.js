import firebase from "firebase"
import "firebase/auth"
import "firebase/firebase"
import "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyBNhoe3-mldONkI-586hI5Kq0o6mFa7Uuw",
  authDomain: "olx-clone-52e2a.firebaseapp.com",
  projectId: "olx-clone-52e2a",
  storageBucket: "olx-clone-52e2a.appspot.com",
  messagingSenderId: "371267287546",
  appId: "1:371267287546:web:8a53cf089d028a4f2e8c43",
  measurementId: "G-8V6H2LNXK0"
};

export default firebase.initializeApp(firebaseConfig);