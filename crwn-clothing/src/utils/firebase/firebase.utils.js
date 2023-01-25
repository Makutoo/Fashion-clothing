// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
} from 'firebase/auth';

import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCTKfQDRV6Ktip72aKocWo3ttpoWzN6DJ0",
    authDomain: "crown-clothing-db-58863.firebaseapp.com",
    projectId: "crown-clothing-db-58863",
    storageBucket: "crown-clothing-db-58863.appspot.com",
    messagingSenderId: "835232514301",
    appId: "1:835232514301:web:034233de27ab6509dcbe94"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: 'select_account',
});

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    console.log(userAuth);
};

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore()

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid)
    
    const userSnapshot = await getDoc(userDocRef)
    
    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
            });
            console.log('New user added to firestore')
        } catch (error) {
            console.log('error creating the user', error.message);
        }
    }

}