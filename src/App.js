import React from "react";
import { Route } from "react-router-dom";
import { NavBar } from "./components/nav-component/NavBar";

import HomePage from "./components/pages/homepage/HomePage";
import { LoginContainer } from "./components/Login/LoginContainer";

import "./App.scss";

const App = () => {
	return (
		<div className="App">
			<NavBar />
			<Route exact path="/" component={HomePage} />
			<Route exact path="/login" component={LoginContainer} />
			{/* <Route path="/mens" component={} /> */}
		</div>
	);
};

export default App;
