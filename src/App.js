import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";

import AccountPage from "./components/pages/account-page/AccountPage";
import HatsContainer from "./components/pages/shop-page/hats/HatsContainer";
import JacketsContainer from "./components/pages/shop-page/jackets/JacketsContainer";
import SneakersConainer from "./components/pages/shop-page/sneakers/SneakersConainer";
import WomensContainer from "./components/pages/shop-page/womens/WomensContainer";
import MensContainer from "./components/pages/shop-page/mens/MensContainer";
import NavBarLoginIn from "./components/nav-component/NavBarLoginIn";
import CartContainer from "./components/pages/cart/CartContainer";
import CheckoutContainer from "./components/pages/checkout/CheckoutContainer";
import ProductContainer from "./components/pages/shop-page/product/ProductContainer";
import WishListContainer from "./components/pages/wishlist/WishListContainer";
import HomePage from "./components/pages/homepage/HomePage";
import { LoginContainer } from "./components/Login/LoginContainer";
import { Footer } from "./components/footer/footer";
import NavBar from "./components/nav-component/NavBar";

import userActions from "./actions/index";
import shopActions from "./actions/pages/shop";
import productActions from "./actions/pages/shop";

import "./App.scss";
import { ThankYou } from "./components/pages/checkout/ThankYou";

const App = props => {
	const dispatch = useDispatch();
	useEffect(() => {
		if (localStorage.token) {
			dispatch(shopActions.fetchProducts(props.products));
			dispatch(userActions.persistUser(props.currentUser));
			dispatch(userActions.persistLoginStatus(props.isLoggedIn));
		}
	}, [props.getProducts, dispatch]);
	console.log(props.isLoggedIn);
	return (
		<div className="App">
			{props.isLoggedIn ? (
				<NavBarLoginIn history={props.history} />
			) : (
				<NavBar history={props.history} />
			)}
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route exact path="/login" component={LoginContainer} />
				<Route exact path="/account" component={AccountPage} />
				<Route exact path="/hats" component={HatsContainer} />
				<Route exact path="/jackets" component={JacketsContainer} />
				<Route exact path="/sneakers" component={SneakersConainer} />
				<Route exact path="/womens" component={WomensContainer} />
				<Route exact path="/mens" component={MensContainer} />
				<Route exact path="/cart" component={CartContainer} />
				<Route exact path="/checkout" component={CheckoutContainer} />
				<Route exact path="/hats/:id" component={ProductContainer} />
				<Route exact path="/wishlist" component={WishListContainer} />
				<Route exact path="/thankyou" component={ThankYou} />
			</Switch>
			<Footer />
		</div>
	);
};

const mapStateToProps = state => ({
	products: state.shop.products,
	currentUser: state.userLogin.currentUser,
	hat: state.shop.hat,
	isLoggedIn: state.userLogin.isLoggedIn
});

const mapDispatchToProps = dispatch => ({
	getProducts: products => dispatch(productActions.fetchProducts(products))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
