import { combineReducers } from "redux";
import { loginReducer } from "./loginReducer";
import { shopReducer } from "./shopReducer";
import cart from "../actions/pages/cart";
import { cartReducer } from "./cartReducer";
import checkoutReducer from "./checkoutReducer";

export const rootReducers = combineReducers({
	userLogin: loginReducer,
	shop: shopReducer,
	cart: cartReducer,
	checkout: checkoutReducer
});
