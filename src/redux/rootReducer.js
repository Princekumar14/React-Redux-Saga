import { combineReducers } from "redux";
import { CartData } from "./reducer";
import { ProductListData } from "./porductReducer";

export default combineReducers({ CartData, ProductListData })