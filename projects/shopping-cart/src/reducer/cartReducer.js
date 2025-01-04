export const initialState = JSON.parse(window.localStorage.getItem("cart")) || []
export const cartReducer = (state, action) => {
    const { type : actionType, payload : payloadType } = action

    const updateLocalStorage = cart =>{
       window.localStorage.setItem("cart", JSON.stringify(cart))
    }

    switch (actionType) {
        case "ADD_TO_CART": {
            const { id } = payloadType
            const productInCartIndex = state.findIndex( item => item.id === id)
            if(productInCartIndex >= 0){
                const newCart = structuredClone(state)
                  newCart[productInCartIndex].quantity += 1 
                  updateLocalStorage(newCart)
                  return newCart  
              }

            const newState = [
                ...state,
                {
                    ...payloadType,
                    quantity : 1
                }
            
            ]

            updateLocalStorage(newState)
            return newState
        }

        case "CLEAR_CART": {
            updateLocalStorage([])
            return []
        }

        case "REMOVE_FROM_CART": {
            const { id } = payloadType
            const newCart = state.filter( item => item.id !== id)
            updateLocalStorage(newCart)
            return newCart
        }

        case "REST_FROM_CART": {
            const { id } = payloadType
            const productInCartIndex = state.findIndex( item => item.id === id)
            const newCart = structuredClone(state)
            newCart[productInCartIndex].quantity -= 1 
            updateLocalStorage(newCart)
            return newCart  
        }
    }

    return state
}