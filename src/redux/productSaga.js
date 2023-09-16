import { takeEvery, put } from 'redux-saga/effects'
import { PRODUCT_LIST, SET_PRODUCT_LIST, SEARCH_PRODUCT, FETCH_PRODUCT_LIST } from './constant'

function* getProducts() {
    // let data = yield fetch("http://localhost:8000/products")
    let data = yield fetch("http://localhost:8000/products?_page=1&_limit=2")
    data = yield data.json()
    // console.warn("PRODUCT_LIST action called",data)
    yield put({ type: SET_PRODUCT_LIST, data })
}
export function* fetchProducts(action) {
    // let data = yield fetch("http://localhost:8000/products")
    let data = yield fetch(`http://localhost:8000/products?_page=${action.pageNo}&_limit=2`)
    console.log(data)
    data = yield data.json()
    // console.warn("PRODUCT_LIST action called",data)
    yield put({ type: SET_PRODUCT_LIST, data })
}

function* searchProducts(data1) {
    let result = yield fetch(`http://localhost:8000/products?q=${data1.query}`);
    result = yield result.json();
    // console.warn("action is called", result)
    yield put({type: SET_PRODUCT_LIST, data:result})
}
function* ProductSaga() {
    yield takeEvery(PRODUCT_LIST, getProducts)
    yield takeEvery(PRODUCT_LIST, fetchProducts)
    yield takeEvery(SEARCH_PRODUCT, searchProducts)
}

export default ProductSaga