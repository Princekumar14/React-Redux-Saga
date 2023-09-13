import { ADD_TO_CART,REMOVE_FROM_CART, EMPTY_CART } from "./constant"
export const CartData = (data = [], action) => {
    switch (action.type) {
        case ADD_TO_CART:
            console.warn("ADD_TO_CART CONDITION", action)
            return [action.data, ...data]
           
        case REMOVE_FROM_CART:
            console.warn("REMOVE_FROM_CART CONDITION", action)
            data.length= data.length ? data.length-1 : []
            return [...data]
        case EMPTY_CART:
            console.warn("REMPTY_CART CONDITION", action)
            data=[]
            return [...data]

        default:
            return data
    }
}