import { ADD_TO_CART, REMOVE_FROM_CART, EMPTY_CART } from "./constant"
export const AddToCart = (data) => {

    console.warn("action called", data)
    return {
        type: ADD_TO_CART,
        data
    }
}

export const RemoveFromCart = (data) => {

    console.warn("action called", data)
    return {
        type: REMOVE_FROM_CART,
        data
    }
}

export const EmptyCart = (data) => {

    console.warn("action called", data)
    return {
        type: EMPTY_CART,
        data
    }
}



