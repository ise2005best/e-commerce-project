import {initializeApp} from 'firebase/app';

import {getAuth, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword} from 'firebase/auth';
import {getFirestore, doc, getDoc, setDoc} from 'firebase/firestore';


// firebase configuration files that are gotten when you create a new app on firebase
const firebaseConfig = {
    apiKey: "AIzaSyArMWTNbPKpwqr_zmUv5R14kUrOIzc3m68",
    authDomain: "udemy-react-project-69f47.firebaseapp.com",
    projectId: "udemy-react-project-69f47",
    storageBucket: "udemy-react-project-69f47.appspot.com",
    messagingSenderId: "9645687765",
    appId: "1:9645687765:web:a4db597ca757dc55bc335c"
  };
// start your firebase application
const app = initializeApp(firebaseConfig);

// create a way of signing up with Google
const proivder = new GoogleAuthProvider();

// this prompts the user to select an account in firebase
proivder.setCustomParameters({
    prompt: 'select_account'
})

// starts our authentication process 
export const googleAuth = getAuth();
// this allows you to sign into your google account with a pop up
export const signInWithGooglePopup = () => 
signInWithPopup(googleAuth, proivder);

// this sets up our firestore db
export const db = getFirestore(app);

// sets up the cloud firebase and takes 3 parameters, db, name of the new firestore table and what is supposed to be passed to the database, in this case we are trying to pass the uid object which is used to distinguish users in firebase
export const createUserDocumentFromAuth = async (userAuthentication) =>{
    const userDocRef = doc(db, 'users', userAuthentication.uid);

    // getdoc used to retrieve the content of a document from the database
    const userSnapshot = await getDoc(userDocRef);
   

    if (!userSnapshot.exists()) {
        const {displayName, email } = userAuthentication;
        const createdAt = new Date();

        try{
            await setDoc(userDocRef,{ // this writes to the firestore database and saves the needed objects
                displayName,
                email,
                createdAt,
            });
        }
        catch(error){
            console.error('error creating the user', error.message);
        }
    }
}
