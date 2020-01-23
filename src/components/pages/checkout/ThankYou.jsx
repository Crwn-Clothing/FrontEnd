import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
export const ThankYou = props => {
	const dispatch = useDispatch();
	const user = useSelector(state => state.userLogin.currentUser);
	return (
		<div>
			<h1> Thank You for your Purchase {user.first_name}!</h1>
			<h1>
				<Link exact to="/">
					Continue Shopping
				</Link>
			</h1>
		</div>
	);
};
