import { takeEvery, put } from 'redux-saga/effects'
import { PRODUCT_LIST, SET_PRODUCT_LIST, SEARCH_PRODUCT } from './constant'

function* getProducts() {
    let data = yield fetch("http://localhost:8000/products")
    data = yield data.json()
    // console.warn("PRODUCT_LIST action called",data)
    yield put({ type: SET_PRODUCT_LIST, data })
}

function* searchProducts(data1) {
    let result = yield fetch(`http://localhost:8000/products?q=${data1.query}`);
    result = yield result.json();
    console.warn("action is called", result)
    yield put({type: SET_PRODUCT_LIST, data:result})
}
function* ProductSaga() {
    yield takeEvery(PRODUCT_LIST, getProducts)
    yield takeEvery(SEARCH_PRODUCT, searchProducts)
}

export default ProductSaga