import { CartContext } from "../context/cart";
import { useContext } from "react";

export const useCart = () => {
    const context = useContext(CartContext)

    if( context === undefined){
        throw new Error ("useCart must be used inside a CartProvider")
    }

    return context
}