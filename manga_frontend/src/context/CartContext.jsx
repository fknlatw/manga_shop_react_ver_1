import React, {createContext, useState} from 'react';

export const CartContext = createContext();



const CartProvider = ({children}) => {
    const [cartIsOpen, setCartIsOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);

    

    const clearCart = () => {
        setCartItems([]);
    }

    const countPlus = (item) => {
        
        const newCart = cartItems.map((cartItem)=>{
            if(cartItem.item.id === item.item.id){
                return {...cartItem, count: cartItem.count + 1}
            } else {
                return cartItem
            }
            
        });

        setCartItems(newCart);
    }

    const deleteItem = (item) => {
        return cartItems.filter((cartItem)=>cartItem.item.id !== item.item.id)
    }

    const countMinus = (item) => {
        if(item.count === 1){
            setCartItems(deleteItem(item));
        } else {
            const newCart = cartItems.map((cartItem)=>{
                if(cartItem.item.id === item.item.id){
                    return {...cartItem, count: cartItem.count - 1}
                } else {
                    return cartItem
                }
            });

            setCartItems(newCart);
        }
    }

    const handleClick = () => {
        setCartIsOpen(!cartIsOpen);
    }   

    const addToCart = (item) => {
        const alreadyIn = cartItems.find((cartItem)=>{ 
            return cartItem.item.id === item.id
        });

        if(alreadyIn){
            setCartItems(
                cartItems.map(cartItem => {
                    if(cartItem.item.id === item.id){
                        return {...cartItem, count: cartItem.count + 1}
                    } else {
                        return cartItem;
                    }
                })
            );
        } else {
            setCartItems([...cartItems, {item, count: 1}]);
        }
        
        
        
    }

    return <CartContext.Provider value={{
        cartIsOpen, 
        setCartIsOpen, 
        handleClick,
        cartItems,
        setCartItems,
        addToCart,
        clearCart,
        countPlus,
        countMinus
    }}>
        {children}
    </CartContext.Provider>
}

export default CartProvider;