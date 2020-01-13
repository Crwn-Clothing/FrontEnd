import React from "react";
import { NavLink } from "react-router-dom";
import Button from "@material-ui/core/Button";

import "./Navbar.scss";
export const NavBar = () => {
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
					<Button>
						<NavLink exact to="/cart" activeClassName="selected">
							Cart
						</NavLink>
					</Button>
				</li>
				<li>
					<Button>
						<NavLink exact to="/wishlist" activeClassName="selected">
							Wishlist
						</NavLink>
					</Button>
				</li>
				<li>
					<Button>
						<NavLink exact to="/login" activeClassName="selected">
							Login
						</NavLink>
					</Button>
				</li>
			</ul>
		</div>
	);
};
