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
  

export const createUserProfileDocument = async (userAuth, addtionalData) => {
    if (!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createAt = new Date();

        try {
            await userRef.set({ 
                displayName,
                email,
                createAt,
                ...addtionalData
            })
        } catch (error) {
            console.log('error creating user', error.message);
         }
    }
    return userRef;
    
}


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

