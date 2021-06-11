import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config =  {
    apiKey: "AIzaSyD6xrixcC-6Zzzz7VRI-_zFkmYBSnUZ0mk",
    authDomain: "crwn-db-5b2a6.firebaseapp.com",
    projectId: "crwn-db-5b2a6",
    storageBucket: "crwn-db-5b2a6.appspot.com",
    messagingSenderId: "421046802745",
    appId: "1:421046802745:web:ebaea19a8e436990a4f0e8",
    measurementId: "G-WMV9V70MJG"
};
  
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

