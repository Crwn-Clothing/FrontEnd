import React from "react";
import { Route } from "react-router-dom";
import { NavBar } from "./components/nav-component/NavBar";

import HomePage from "./components/pages/homepage/HomePage";

import "./App.scss";

const App = () => {
	return (
		<div className="App">
			<NavBar />
			<Route path="/" component={HomePage} />
			{/* <Route path="/mens" component={} /> */}
		</div>
	);
};

export default App;
