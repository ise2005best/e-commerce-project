import React, { useState,  } from "react";
import PasswordChecklist from "react-password-checklist";
import { Icon } from 'react-icons-kit';
import { eyeOff } from 'react-icons-kit/feather/eyeOff';
import { eye } from 'react-icons-kit/feather/eye'
import './sign-up-component.scss';
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth, } from "../../../utils/firebase/firebase.utils";
import { redirect } from "react-router-dom";
import LogIn from "../../login-form/login-form.component";

const initialFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
}

const SignUpForm = () => {
    const [fields, setFields] = useState(initialFields);
    const [showPassword, setShowPassword] = useState(false);
    const [passwordValid, setPasswordValid] = useState(false);
    const { displayName, email, password, confirmPassword } = fields;
   

    const resetForm = () => {
        setFields(initialFields);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!passwordValid) {
            return window.alert("Password does not meet the requirements");
        }

        try {
            const { user } = await createAuthUserWithEmailAndPassword(email, password);
            await createUserDocumentFromAuth(user, { displayName });
            resetForm();
            redirect("/thankYouForSigningUpWithUs");
        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                console.error("Error creating user", error);
                window.alert('Cannot create user, email already in use');
            } else {
                console.error("Error getting this user", error);
                window.alert("An unexpected error occurred");
            }
        }
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFields({ ...fields, [name]: value });
    }

    const togglePassword = () => {
        setShowPassword(!showPassword);
    }

    return (
        <div>
            <h2>New Account?</h2>
            <span> Sign Up with your email and password </span>
            <form onSubmit={handleSubmit}>
                <LogIn type="text"
                    required
                    placeholder="Name"
                    className="sign-in-text"
                    onChange={handleChange}
                    name="displayName"
                    value={displayName} />
                <LogIn type="email"
                    required
                    placeholder="Email" 
                    className='sign-in-text'
                    onChange={handleChange}
                    name="email"
                    value={email} />
                <LogIn type={showPassword ? 'text' : 'password'}
                    required
                    className='sign-in-text'
                    placeholder="Password"
                    onChange={handleChange}
                    name="password"
                    value={password} />
                <Icon
                    icon={showPassword ? eyeOff : eye}
                    onClick={togglePassword} />
                <LogIn type='password'
                    required
                    placeholder="Confirm Password"
                    onChange={handleChange}
                    className='sign-in-text'
                    name="confirmPassword"
                    value={confirmPassword} />

                <PasswordChecklist
                    className="password-check-list"
                    rules={['minLength', 'specialChar', 'capital', 'number', 'match']}
                    minLength={8}
                    value={password}
                    valueAgain={confirmPassword}
                    messages={{
                        minLength: 'Password has more than 8 characters.',
                        specialChar: 'Password has special characters.',
                        number: 'Password has a number.',
                        capital: 'Password has a capital letter.',
                        match: 'Passwords match.',
                    }}
                    onChange={(isValid) => { setPasswordValid(isValid) }}
                />
                <button type="submit">Submit</button>
              
            </form>
        </div>
    )
}

export default SignUpForm;
