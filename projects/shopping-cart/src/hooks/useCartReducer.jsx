import { useReducer } from "react";
import { cartReducer, initialState } from "../reducer/cartReducer";

export function useCartReducer () {
    const [state, dispatch] = useReducer(cartReducer, initialState)

   const addToCart = product => dispatch({
        type: "ADD_TO_CART",
        payload : product
   })

   const clearCart = () => dispatch({
    type: "CLEAR_CART",
    })

    const removeFromCart = product => dispatch({
        type: "REMOVE_FROM_CART",
        payload : product
   })
   
   const restToCart = product => dispatch({
    type: "REST_FROM_CART",
    payload : product
    })

    return {state, addToCart, clearCart, removeFromCart, restToCart}
}