import { ADD_TO_CART } from "./constant"
export const CartData = (data = [], action) => {

    if (action.type === "ADD_TO_CART") {
        console.warn("reducer called", action)
        return action.data
    }
    else {

        return "no action matched"
    }
}