import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';
import './cart-dropdown.styles.scss';
import CartItem from '../cart-items/cart-items.components';
const CartDropdown = () => {
    const { cartItems } = useContext(CartContext)
    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {
                    cartItems.map(cartItem =>
                    (<CartItem key={cartItem.id} CartItem={cartItem} />
                    ))
                }
            </div>
            <button style={{ textAlign: 'center' }} type='submit'>
                Go to checkout
            </button>
        </div>
    )
}

export default CartDropdown;