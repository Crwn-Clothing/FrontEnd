import { combineReducers } from "redux";
import { loginReducer } from "./loginReducer";

export const rootReducers = combineReducers({
	userLogin: loginReducer
});
