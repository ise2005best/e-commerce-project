import { Fragment, useContext} from "react";
import { Link } from "react-router-dom";
import { userContext } from "../../context/user.context";
import { CartContext } from "../../context/cart.context";
import { signUserOut } from "../../utils/firebase/firebase-for-signIn/firebase-sign-in.utils";
import CartIcon from "../cart/cart.components";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import './navigation.styles.scss';
const NavBar = () => {
    const { currentUser } = useContext(userContext);
    const {isCartOpen} = useContext(CartContext)
    const handleSignOutUser = async () => {
        await signUserOut();
    }


    return (
        <Fragment>
            <div className="nav-bar">

                <Link className="logo-link" to={'/'}>
                    ISESEN
                </Link>

                <div className="nav-bar-container">
                    <Link className="nav-link" to={'/'}>
                        HOME
                    </Link>

                    <Link to="/shop" className="nav-link" >
                        Shop
                    </Link>
                    
                    {
                        currentUser ? (
                            <span className="nav-link" onClick={handleSignOutUser}> {''}
                                SIGN OUT {''}
                            </span>
                        ) : (
                            <Link className="nav-link" to={'/sign-in'} style={{ marginRight: '40px' }}>
                                SIGN IN
                            </Link>
                        )
                    }
                    <CartIcon/>
                </div>
                {isCartOpen && <CartDropdown/>}
            </div>
        

        </Fragment>

    )
}
export default NavBar;