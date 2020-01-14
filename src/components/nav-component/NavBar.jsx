import React from "react";
import { NavLink } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import userActions from "../../actions/index";

import "./Navbar.scss";

const NavBar = props => {
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
							Crwn Clothing
						</NavLink>
					</h1>
				</li>
				<li>
					<Button variant="outlined">
						<NavLink exact to="/cart" activeClassName="selected">
							Cart
						</NavLink>
					</Button>
				</li>
				<li>
					<Button variant="outlined">
						<NavLink exact to="/wishlist" activeClassName="selected">
							Wishlist
						</NavLink>
					</Button>
				</li>
				<li>
					<Button onClick={null} variant="outlined">
						<NavLink exact to="/login" activeClassName="selected">
							{props.loginStatus ? "Logout" : "Login"}
						</NavLink>
					</Button>
				</li>
			</ul>
		</div>
	);
};

const mapStateToProps = state => ({
	loginStatus: state.userLogin.isLoggedIn
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
