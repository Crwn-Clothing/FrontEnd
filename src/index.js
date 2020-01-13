import React from "react";
import ReactDOM from "react-dom";
import { BrowerRouter as Router, BrowserRouter } from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

import App from "./App";

import "./index.css";

// store
const reduxDevTool =
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
ReactDOM.render(
	// <Provider>
	<BrowserRouter>
		<App />
	</BrowserRouter>,
	// </Provider>
	document.getElementById("root")
);
