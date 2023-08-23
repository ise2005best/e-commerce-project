import React from "react";
import { Link } from "react-router-dom";

const RedirectSignUp = () =>{
    return(
        <div>
            <h1>
                Thank You
            </h1>
            <h4>
                Thank You for signing up with IseSen 
            </h4>
            <Link to={'/'}  className="back-button">
                Go Home
            </Link>
        </div>
    )
}

export default RedirectSignUp;