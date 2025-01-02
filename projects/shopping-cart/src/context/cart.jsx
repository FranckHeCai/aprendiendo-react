import { useState, createContext } from "react";

export const CartContext = createContext()

const initiaState = []
const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            
            break;
    
        default:
            break;
    }
}
export function CartProvider ({ children }) {
    const [cart, setCart] = useState([])

    const addToCart = product => {
        const productInCartIndex = cart.findIndex( item => item.id === product.id)

        if(productInCartIndex >= 0){
          const newCart = structuredClone(cart)
            newCart[productInCartIndex].quantity += 1 
            return setCart(newCart)  
        }
        
        setCart( previous => [
            ...previous,{
                ...product,
                quantity : 1
            }
        ])
           
    }

    const restToCart = product => {
        const itemInCartIndex = cart.findIndex(item => item.id === product.id )
        const newCart = structuredClone(cart)
        newCart[itemInCartIndex].quantity -= 1
        setCart(newCart)
    }

    const clearCart = () => {
        setCart([])
    }

    const removeFromCart = product => {
        setCart( previousCart => previousCart.filter( item => item.id !== product.id))
    }

    return(
        <CartContext.Provider value = {{
            cart,
            addToCart,
            clearCart,
            removeFromCart,
            restToCart
        }}>
            {children}
        </CartContext.Provider>
    )
}