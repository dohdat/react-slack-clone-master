  import firebase from 'firebase/app';
  import "firebase/auth";
  import "firebase/database";
  import "firebase/storage"; //media files
  
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyC_qDmRHyC4rdMG8TTNepmw2UBWsumJ62Q",
    authDomain: "react-slack-clone-66c9b.firebaseapp.com",
    databaseURL: "https://react-slack-clone-66c9b.firebaseio.com",
    projectId: "react-slack-clone-66c9b",
    storageBucket: "react-slack-clone-66c9b.appspot.com",
    messagingSenderId: "17440005127",
    appId: "1:17440005127:web:fe9fff1c8f7c779a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;