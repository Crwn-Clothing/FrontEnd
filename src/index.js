import React from "react";
import ReactDOM from "react-dom";
import { BrowerRouter as Router, BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import { logger } from "redux-logger";

import App from "./App";
import { rootReducers } from "./reducers";

import "./index.css";

// store
const reduxDevTool =
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(
	rootReducers,
	compose(applyMiddleware(logger), reduxDevTool)
);

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>,
	document.getElementById("root")
);
