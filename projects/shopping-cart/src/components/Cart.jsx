import { useId } from "react";
import  computer  from '../img/computer.jpg'
import { ClearCartIcon, CartIcon } from "./Icons";
import "./Cart.css"
import { useCart } from "../hooks/useCart";

export function Cart () {
    const cartCheckBoxId = useId()
    const { clearCart, cart, addToCart, restToCart, removeFromCart } = useCart()
    return (
        <>
            <label className="cart-button" htmlFor={cartCheckBoxId}>
                <CartIcon />
            </label>

            <input id={cartCheckBoxId} type="checkbox" hidden />

            <aside className="cart">
                { cart.length===0 && 
                    <p className="no-items">no items in cart</p>
                }
                <ul>
                    {
                        cart.map(product => (
                            <li key={product.id}>
                                <img src={computer} alt="product.price" />
                                <div>
                                <strong>{product.title} - ${product.price}</strong>
                                </div>

                                <footer>
                                    <button onClick={() => {restToCart(product)}} className={`${product.quantity===1? "hidden" : ""}`}>-</button>
                                    <small>
                                        {product.quantity}
                                    </small>
                                    <button onClick={() => {addToCart(product)}}>+</button>
                                </footer>
                                <button className="clear-button" onClick={()=>{removeFromCart(product)}} >
                                    <ClearCartIcon />
                                    Remove from cart
                                </button>
                            </li>
                        ))
                    }
                    

                    
                </ul>
                {cart.length>1 && 
                    <button className="clear-button" onClick={clearCart} >
                        <ClearCartIcon />
                        Clear Cart
                    </button>
                }        
                
            </aside>
        </>

    )
}