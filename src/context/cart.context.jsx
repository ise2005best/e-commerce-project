import { createContext, useState } from "react";
const addCartItem = (cartItems, productsToAdd) =>{

    // check for a match
    const existingCartItems = cartItems.find( (cartItem) => cartItem.id === productsToAdd.id );
    // If a match exists
    if(existingCartItems){
        return cartItems.map((cartItem)=> 
        cartItem.id === productsToAdd.id
        // return a new cartItem
        ? {...cartItem, quantity: cartItem.quantity + 1}
        : cartItem,
        )
    }
    return [...cartItems, {...productsToAdd, quantity: 1}]
}
export const CartContext = createContext({
    isCartOpen : false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemsToCart: () =>{}
})

export const CartProvider = ({children}) =>{
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const addItemsToCart = (productsToAdd) =>{
        setCartItems(addCartItem(cartItems, productsToAdd))
    }
    const value = {isCartOpen, setIsCartOpen, addItemsToCart, cartItems}
    return(
       <CartContext.Provider value={value}>
                {children}
       </CartContext.Provider>
    )
}