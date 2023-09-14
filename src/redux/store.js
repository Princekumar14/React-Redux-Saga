import rootReducer from './rootReducer';
import { configureStore } from '@reduxjs/toolkit';
import ProductSaga from './productSaga';
import createSagaMiddleware from 'redux-saga';


const SagaMiddleware =createSagaMiddleware();
const Store = configureStore(
    {
        reducer: rootReducer,
        middleware: ()=> [SagaMiddleware]
    }
    ) 
    SagaMiddleware.run(ProductSaga);

export default Store