import React from "react";
import { NavLink } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { connect, useDispatch, useSelector } from "react-redux";
import userActions from "../../actions/index";
import cartActions from "../../actions/pages/cart";

import "./Navbar.scss";

const NavBarLogIn = (props) => {
	console.log(props);
	const dispatch = useDispatch();
	const userCart = useSelector((state) => state.cart.userCart);
	const wishListCart = useSelector((state) => state.wishList.wishListCart);

	const handleLogOut = () => {
		props.loginStatus(props.userLoginStatus);
		dispatch(userActions.logOutUser());
		dispatch(cartActions.resetUserCart());
	};
	return (
		<div>
			<ul className="nav-bar">
				<li>
					<NavLink exact to="/">
						Home
					</NavLink>
				</li>
				<li>
					<NavLink exact to="/mens">
						Mens
					</NavLink>
				</li>
				<li>
					<NavLink exact to="/womens">
						Womens
					</NavLink>
				</li>
				<li>
					<h1>
						<NavLink exact to="/">
							👑 Clothing
						</NavLink>
					</h1>
				</li>
				<li>
					<Button variant="outlined">
						<NavLink exact to="/account" activeClassName="selected">
							Account
						</NavLink>
					</Button>
				</li>
				<li>
					<Button variant="outlined">
						<NavLink exact to="/cart" activeClassName="selected">
							Cart({userCart.length})
						</NavLink>
					</Button>
				</li>
				<li>
					<Button variant="outlined">
						<NavLink exact to="/wishlist" activeClassName="selected">
							Wishlist({wishListCart.length})
						</NavLink>
					</Button>
				</li>

				<li>
					<Button onClick={handleLogOut} variant="outlined">
						<NavLink exact to="/login" activeClassName="selected">
							Logout
						</NavLink>
					</Button>
				</li>
			</ul>
		</div>
	);
};

const mapStateToProps = (state) => ({
	userLoginStatus: state.userLogin.isLoggedIn,
});

const mapDispatchToProps = (dispatch) => ({
	logOutUser: () => dispatch(userActions.logOutUser()),
	loginStatus: (loginStatus) =>
		dispatch(userActions.setLoginStatus(loginStatus)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBarLogIn);
