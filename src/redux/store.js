import rootReducer from './rootReducer';
import { configureStore } from '@reduxjs/toolkit';
import ProductSaga from './productSaga';
import createSagaMiddleware from 'redux-saga';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';
const SagaMiddleware =createSagaMiddleware();
// const Store = configureStore(
//     {
//         reducer: rootReducer,
//         middleware: ()=> [SagaMiddleware]
//     }
//     ) 
//     SagaMiddleware.run(ProductSaga);

// export default Store

let persistConfig = {
    key:'root',
    storage
};
let PersistReducer = persistReducer(persistConfig, rootReducer)
const Store = configureStore(
    {
        reducer: PersistReducer,
        middleware: ()=> [SagaMiddleware]
    }
    ) 
    SagaMiddleware.run(ProductSaga);

export default Store