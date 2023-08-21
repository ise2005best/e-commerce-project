import { Fragment } from "react";
import { Link } from "react-router-dom";
import {ReactComponent as Logo1} from '../../static/crown.svg';
import './navigation.styles.scss';
const NavBar = () => {
    return (
        <Fragment>
            <div className="nav-bar">
            
                    <Link className="logo-link" to={'/'}>
                       <Logo1 className='logo'/>
                    </Link>
             
                <div className="nav-bar-container">
                    <Link className="nav-link" to={'/shop'}>
                        SHOP
                    </Link>
                    <Link className="nav-link" to={'/sign-in'}>
                        SIGN IN
                    </Link>
                    <Link className="nav-link" to={'/sign-up'}>
                        SIGN UP
                    </Link>
                </div>

            </div>
        </Fragment>

    )
}
export default NavBar;