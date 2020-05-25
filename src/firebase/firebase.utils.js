import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyB7HC2A1P1MJsQxTAFegzk0aU_ah6UTh10",
    authDomain: "crwn-db-1b1d3.firebaseapp.com",
    databaseURL: "https://crwn-db-1b1d3.firebaseio.com",
    projectId: "crwn-db-1b1d3",
    storageBucket: "crwn-db-1b1d3.appspot.com",
    messagingSenderId: "109617519146",
    appId: "1:109617519146:web:1d3d1c39f5ed7f6a0f0153",
    measurementId: "G-5SSL9BTK2N"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();
    if (!snapShot.exists) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
