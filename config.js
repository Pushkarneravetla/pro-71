import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyAP5uqGSQE41jynGbeUHCvRsmfwiC54U8A",
    authDomain: "bicycle-ride-a3c92.firebaseapp.com",
    projectId: "bicycle-ride-a3c92",
    storageBucket: "bicycle-ride-a3c92.appspot.com",
    messagingSenderId: "905385689624",
    appId: "1:905385689624:web:b9607624ef0cc34592f96d"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

export default firebase.firestore();
