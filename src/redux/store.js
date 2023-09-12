import { createStore  } from 'redux';
import rootReducer from './rootReducer';

// import React from 'react'
// const dummyReducer = ()=> {
//     return 100;
//   }
const Store = createStore (rootReducer) 

export default Store