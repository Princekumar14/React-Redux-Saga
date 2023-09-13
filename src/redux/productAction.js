import { PRODUCT_LIST, } from "./constant"
export const ProductList = async () => {
    let data = await fetch("https://jsonplaceholder.typicode.com/todos/1")
    data = await data.json()
    console.warn("PRODUCT_LIST action called",data)
    return {
        type: PRODUCT_LIST,
        data
    }
}