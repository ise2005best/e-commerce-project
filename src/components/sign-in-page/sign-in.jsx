import React from "react";
import SignInForm from "./sign-in-form/sign-in-form-component";
import SignInWithGoogle from "./sign-up-with-google/sign-up-with-google.component";
import '../sign-in-page/sign-in-form/sign-in-form-component.styles.scss';
const SignInPage = () => {
    return (
        <div style={{backgroundColor:"#1D2743", padding: "100px"}}>
            <div className="sign-in">
                <SignInForm />
                <SignInWithGoogle />
            </div>
        </div>

    )
}
export default SignInPage;