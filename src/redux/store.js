import rootReducer from './rootReducer';
import { configureStore } from '@reduxjs/toolkit';

// import React from 'react'
// const dummyReducer = ()=> {
//     return 100;
//   }
const Store = configureStore({reducer: rootReducer}) 

export default Store