import React from "react";
import CartPage from "./Cart";
import { useSelector, useDispatch } from "react-redux";
import cartActions from "../../../actions/pages/cart";
import { Button } from "@material-ui/core";
import "./Cart.scss";

const CartContainer = props => {
	const userCart = useSelector(state => state.cart.userCart);
	const isLoggedIn = useSelector(state => state.userLogin.isLoggedIn);

	const renderCartItem = () => {
		return userCart.map(cartItem => {
			return <CartPage key={cartItem.id} cartItem={cartItem} />;
		});
	};

	const redirect = () => {
		props.history.push("/checkout");
	};
	return (
		<div className="card-container">
			{renderCartItem()}
			{isLoggedIn ? (
				<Button
					onClick={redirect}
					variant="outlined"
					type="submit"
					style={{
						margin: "20px auto",
						background: "black",
						width: "80%",
						color: "whitesmoke"
					}}
				>
					Proceed To Checkout
				</Button>
			) : null}
		</div>
	);
};

export default CartContainer;
