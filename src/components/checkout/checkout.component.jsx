import React, {useContext} from 'react';
import { CartContext } from '../../context/cart.context';
import './checkout.styles.scss';
const CheckoutPage = () =>{
    const {cartItems} = useContext(CartContext);
    
    return(
        <div>
            <h2 className='main-text'>
                Your shopping cart
            </h2>
            <div className='checkout-container'>
            {
                cartItems.map((cartItemsId)=>(
                    <div key={cartItemsId.id} >
                        <h2 className='products-title'>
                            {cartItemsId.title}
                        </h2>
                        <img src={cartItemsId.imageUrl} alt={`${cartItemsId.title}`}  className='products-image'/>
                        <h4 className='products-price'>
                            {cartItemsId.price}
                        </h4>
                        <span className='products-quantity'>
                            {cartItemsId.quantity}
                        </span>
                        </div>
                    
                ))
            }
            </div>
            
        </div>
    )
}

export default CheckoutPage;