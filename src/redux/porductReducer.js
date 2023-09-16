import { PRODUCT_LIST, SET_PRODUCT_LIST, FETCH_PRODUCT_LIST} from "./constant"
export const ProductListData = (data = [], action) => {
    switch (action.type) {
        // case PRODUCT_LIST:
        //     console.warn("PRODUCT_LIST CONDITION", action)
        //     return [action.data]
        case SET_PRODUCT_LIST:
            return [...action.data]
          
        // case FETCH_PRODUCT_LIST:
        //     console.warn("PRODUCT_LIST CONDITION", action)
        //     return [...action.data]
          

        default:
            return data;
    }
}