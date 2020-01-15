import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import NavBar from "./components/nav-component/NavBar";
import { connect } from "react-redux";
import HomePage from "./components/pages/homepage/HomePage";
import { LoginContainer } from "./components/Login/LoginContainer";
import { Footer } from "./components/footer/footer";

import "./App.scss";
import Login from "./components/Login/Login";
import SignUp from "./components/Login/SignUp";
import AccountPage from "./components/pages/account-page/AccountPage";
import Shop from "./components/pages/shop-page/Shop";
import productActions from "./actions/pages/shop";
import HatsContainer from "./components/pages/shop-page/hats/HatsContainer";
import JacketsContainer from "./components/pages/shop-page/jackets/JacketsContainer";
import SneakersConainer from "./components/pages/shop-page/sneakers/SneakersConainer";
import WomensContainer from "./components/pages/shop-page/womens/WomensContainer";
import MensContainer from "./components/pages/shop-page/mens/MensContainer";

const App = props => {
	useEffect(() => {
		props.getProducts(props.products);
	}, [props.getProducts]);
	return (
		<div className="App">
			<NavBar />
			<Route exact path="/" component={HomePage} />
			<Route exact path="/login" component={LoginContainer} />
			<Route exact path="/account" component={AccountPage} />
			<Route exact path="/hats" component={HatsContainer} />
			<Route exact path="/jackets" component={JacketsContainer} />
			<Route exact path="/sneakers" component={SneakersConainer} />
			<Route exact path="/womens" component={WomensContainer} />
			<Route exact path="/mens" component={MensContainer} />

			<Footer />
		</div>
	);
};

const mapStateToProps = state => ({
	products: state.shop.products
});

const mapDispatchToProps = dispatch => ({
	getProducts: products => dispatch(productActions.fetchProducts(products))
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
