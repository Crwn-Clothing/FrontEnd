import { combineReducers } from "redux";
import { loginReducer } from "./loginReducer";
import shopReducer from "./shopReducer";

export const rootReducers = combineReducers({
	userLogin: loginReducer,
	shop: shopReducer
});
