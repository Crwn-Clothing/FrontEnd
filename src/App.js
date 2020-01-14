import React from "react";
import { Route } from "react-router-dom";
import NavBar from "./components/nav-component/NavBar";

import HomePage from "./components/pages/homepage/HomePage";
import { LoginContainer } from "./components/Login/LoginContainer";
import { Footer } from "./components/footer/footer";

import "./App.scss";
import Login from "./components/Login/Login";
import SignUp from "./components/Login/SignUp";

const App = () => {
	return (
		<div className="App">
			<NavBar />
			<Route exact path="/" component={HomePage} />

			<Route
				exact
				path="/login"
				render={props => <LoginContainer {...props} />}
			/>

			{/* <Route
				exact
				path="/mens"
				render={props => <LoginContainer {...props} />}
			/>
			<Route
				exact
				path="/womens"
				render={props => <LoginContainer {...props} />}
			/>
			<Route
				exact
				path="/cart"
				render={props => <LoginContainer {...props} />}
			/>
			<Route
				exact
				path="/wishlist"
				render={props => <LoginContainer {...props} />}
			/>
			<Route
				exact
				path="/hats"
				render={props => <LoginContainer {...props} />}
			/>
			<Route
				exact
				path="/sneakers"
				render={props => <LoginContainer {...props} />}
			/>
			<Route
				exact
				path="/jackets"
				render={props => <LoginContainer {...props} />}
			/> */}
			<Footer />
		</div>
	);
};

export default App;
