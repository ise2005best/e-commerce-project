import { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import {ReactComponent as Logo1} from '../../static/crown.svg';
import { userContext } from "../../context/user.context";
import { signUserOut } from "../../utils/firebase/firebase-for-signIn/firebase-sign-in.utils";
import './navigation.styles.scss';
const NavBar = () => {
    const {currentUser} = useContext(userContext);
    const handleSignOutUser = async () =>{
        await signUserOut();
    }
    return (
        <Fragment>
            <div className="nav-bar">
            
                    <Link className="logo-link" to={'/'}>
                       ISESEN
                    </Link>
             
                <div className="nav-bar-container">
                    <Link className="nav-link" to={'/shop'}>
                        SHOP
                    </Link>
                    {
                        currentUser ? (
                            <span className="nav-link" onClick={handleSignOutUser}> {''}
                                Sign Out {''}
                            </span>
                        ):(
                        <Link className="nav-link" to={'/sign-in'}>
                        SIGN IN
                    </Link>
                    )
                    }
                   
                </div>

            </div>
        </Fragment>

    )
}
export default NavBar;