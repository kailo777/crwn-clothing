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

export const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        const unsubscribe = auth.onAuthStateChanged(userAuth => {
            unsubscribe();
            resolve(userAuth);
        }, reject)
    })
};


export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);
    console.log(collectionRef);

    const batch = firestore.batch();
    objectsToAdd.forEach(obj => {
            const newDocRef = collectionRef.doc();
            batch.set(newDocRef, obj)
        }
    );

    return await batch.commit();
};

export const convertCollectionsSnapshotToMap = (collections) => {
    const transformedCollection = collections.docs.map(doc => {
        const {title, items} = doc.data();

        return {
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items
        };
    });
    return transformedCollection.reduce(keyByTitleReducer, {});
};

function keyByTitleReducer(acc, object) {
    return {...acc, [object.title.toLowerCase()]: object};
}


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
