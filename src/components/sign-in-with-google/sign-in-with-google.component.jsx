import { signInWithGooglePopup, createUserDocumentFromAuth} from "../../utils/firebase/firebase.utils";
const SignIn = () => {

    const LogGoogleUser = async () => {
        // this extracts the user object from the function
        const { user } = await signInWithGooglePopup();
        // this creates a new user 
        const userDocRef = await createUserDocumentFromAuth(user);
    }

    return (
        <div>
            <button onClick={LogGoogleUser}>
                Sign in with Google Popup
            </button>
           
        </div>
    )
}
export default SignIn;