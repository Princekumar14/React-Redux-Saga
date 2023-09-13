import { PRODUCT_LIST, } from "./constant"
export const ProductListData = (data = [], action) => {
    switch (action.type) {
        case PRODUCT_LIST:
            console.warn("PRODUCT_LIST CONDITION", action)
            return [action.data]
          

        default:
            return data;
    }
}