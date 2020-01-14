import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

import App from "./App";
import { rootReducers } from "./reducers";

import "./index.css";

// store
const reduxDevTool =
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(
	rootReducers,
	compose(applyMiddleware(thunk, logger), reduxDevTool)
);

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<App />
		</Router>
	</Provider>,
	document.getElementById("root")
);
