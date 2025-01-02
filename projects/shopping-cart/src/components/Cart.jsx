import { useId } from "react";
import  computer  from '../img/computer.jpg'
import { ClearCartIcon, RemoveFromCartIcon, CartIcon } from "./Icons";
import "./Cart.css"
import { useCart } from "../hooks/useCart";

export function Cart () {
    const cartCheckBoxId = useId()
    const { clearCart, cart, addToCart, restToCart } = useCart()
    return (
        <>
            <label className="cart-button" htmlFor={cartCheckBoxId}>
                <CartIcon />
            </label>

            <input id={cartCheckBoxId} type="checkbox" hidden />

            <aside className="cart">
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
                            </li>
                        ))
                    }
                    

                    
                </ul>
                {cart.length>0 && 
                    <button className="clear-button" onClick={clearCart} >
                        <ClearCartIcon />
                    </button>
                }        
                
            </aside>
        </>

    )
}