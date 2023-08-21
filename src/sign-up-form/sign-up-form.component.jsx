import React, { useState } from "react";
import './sign-up-component.scss';

const initalFields = {
    displayName: '',
    email : '',
    password: '',
    confirmPassword: '',
}
const SignUpForm = () => {
const [fields, setFields] = useState(initalFields);
const {displayName, email, password, confirmPassword} = fields;

const handleChange = (event) =>{
   const {name, value} = event.target;
   setFields({...fields, [name]: value })
}
    return (
        <div>
            <h1>
                New Account?
            </h1>
            <form onSubmit={() => {}}>
                
                <input type="text" required  placeholder="Name"  className="text" onChange={handleChange} name="displayName" value={displayName}/>
                <input  type="email" required  placeholder="Email" onChange={handleChange} name="email" value={email}/>
                <input type="password" required  placeholder="Password" onChange={handleChange} name="password" value={password} />
                <input type="password" required placeholder="Confirm Password" onChange={handleChange} name="confirmPassword" value={confirmPassword}/>
                <button type="submit">
                    Sign Up
                    </button> 
            </form>

        </div>
    )
}

export default SignUpForm;