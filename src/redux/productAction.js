import { PRODUCT_LIST,SEARCH_PRODUCT,FETCH_PRODUCT_LIST } from "./constant"
export const ProductList =  () => {
    return {
        type: PRODUCT_LIST,
        // data:"apple"
    }
}
export const fetchedProductList =  (pageNo) => {
    return {
        type: FETCH_PRODUCT_LIST,
        pageNo:pageNo
        // data
    }
}

export const ProductSearch = (query) => {
  
    return {
        type: SEARCH_PRODUCT,
        query
    }
}
// export const SetProductList =  (data) => {
//     console.warn("Set Action")
//     return {
//         type: SET_PRODUCT_LIST,
//         data
//     }
// }