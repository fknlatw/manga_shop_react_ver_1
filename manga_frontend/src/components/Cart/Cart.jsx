import React, {useState, useContext} from 'react';
import { CartContext } from '../../context/CartContext';
import './styles.css';
import {FaXmark, FaPlus, FaMinus} from 'react-icons/fa6';

const Cart = () => {
    const {cartIsOpen, setCartIsOpen, cartItems, clearCart, countPlus, countMinus} = useContext(CartContext);
    console.log(cartItems)
    return(
        <div className={`cart ${cartIsOpen? "" : "hidden"}`} >
            <div className="cartContainer">
                
                <div className="cartButtons">
                    <button 
                        className="closeButton" 
                        onClick={()=>setCartIsOpen(false)}
                    >
                        <FaXmark />
                    </button>

                    <span className="total">
                        {
                            cartItems.length > 0
                            ? `Всего в корзине: ${cartItems.length}`
                            :`Корзина пуста`
                        }
                    </span>

                    <button 
                        onClick={clearCart}
                        className="clearCartButton"
                    >
                        Очистить
                    </button>
                </div>

                <div className="cartItems">
                    {
                        cartItems.map((cartItem)=> {
                            return <div className="cartItem" key={cartItem.item.id}>
                               
                                
                                <div className="cartInfo">
                                    <div className="cartImg">
                                        <img src={cartItem.item.img} alt="" />
                                    </div>
                                    <div className="authorSeriesName">
                                        <span className="seriesName">{
                                        cartItem.item.volume > 0
                                        ? `${cartItem.item.series}, том ${cartItem.item.volume}`
                                        :`${cartItem.item.name}`
                                        }</span>

                                        <span>
                                        {cartItem.item.author}
                                        </span>
                                    </div>
                                    
                                </div>

                                <div className="cartCount">
                                    <button 
                                        onClick={()=>countPlus(cartItem)}
                                        className='countPlus'
                                    >
                                        <FaPlus/>
                                    </button>

                                    <button className='count'>{cartItem.count}</button>

                                    <button 
                                        className='countMinus'
                                        onClick={()=>countMinus(cartItem)}
                                    >
                                        <FaMinus/>
                                    </button>
                                </div>
                            </div>
                        })
                    }
                </div>

                
            </div>
        </div>
    );
}

export default Cart;