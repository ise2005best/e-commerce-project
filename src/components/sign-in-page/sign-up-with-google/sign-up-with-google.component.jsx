import React, { useEffect } from "react";
import { signInWithGoogleRedirect, createUserDocumentFromAuth, googleAuth } from "../../../utils/firebase/firebase.utils";

const SignIn = () => {

    const LogGoogleUser = async () => {
        try {
            // this extracts the user object from the function
            const { user } = await signInWithGoogleRedirect();
            // this creates a new user 
            const userDocRef = await createUserDocumentFromAuth(user);
        } catch (error) {
            console.error("Error signing in with Google", error);
        }
    }

    const getGoogleRedirectResult = async () => {
        try {
            const response = await getGoogleRedirectResult(googleAuth);
            // this was added because my console shows null twice which was because the component re-renders after it reloads
            if (response !== null) {
                const userDocRef = await createUserDocumentFromAuth(response.user);
            }
        } catch (error) {
            console.error("Error fetching data", error);
        }
    }

    useEffect(() => {
        getGoogleRedirectResult();
    }, [])

    return (
        <div>
            <button onClick={LogGoogleUser}>
                Google
            </button>
        </div>
    )
}

export default SignIn;
