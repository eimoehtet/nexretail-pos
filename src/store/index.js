import { combineReducers ,compose,applyMiddleware} from "redux";
import ReduxThunk from 'redux-thunk'
import {createStore} from 'redux'
import SearchItemReducer from "./reducers/SearchItemReducer";
import LoginReducer from "./reducers/LoginReducer";
import CustomerReducer from "./reducers/CustomerReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const reducers =combineReducers ({
    auth:LoginReducer,
    searchItems:SearchItemReducer,
    customers:CustomerReducer
})
const store=createStore(reducers,composeEnhancers(applyMiddleware(ReduxThunk)));
export default store;