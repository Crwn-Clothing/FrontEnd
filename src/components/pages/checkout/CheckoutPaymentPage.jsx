import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { CardElement, injectStripe } from "react-stripe-elements";
import { Button } from "@material-ui/core";
import cartActions from "../../../actions/pages/cart";
import checkoutActions from "../../../actions/pages/checkout";
import "./Checkout.scss";
import { Redirect } from "react-router-dom";

const styleStripe = () => {
	return {
		style: {
			base: {
				display: "flex",
				flexDirection: "column",
				margin: "auto 0",
				"::placeholder": {
					color: "#aab7c4"
				}
			}
		}
	};
};

const CheckoutPaymentPage = props => {
	const [complete, setComplete] = useState(false);

	// dispatches
	const dispatch = useDispatch();

	// selectors
	const user = useSelector(state => state.userLogin.currentUser);
	const userCart = useSelector(state => state.cart.userCart);
	const cartOrders = useSelector(state => state.cart.cartOrders);
	const order = useSelector(state => state.checkout.order);
	const stripeOrder = useSelector(state => state.checkout.stripeOrder);
	let priceArr = userCart.map(product => product.price_cents);
	let totalPrice = priceArr.reduce((acc, cur) => acc + cur, 0);

	const handleSubmit = () => {
		props.stripe.createToken({ name: `${user.name}` }).then(({ token }) => {
			dispatch(
				checkoutActions.postNewOrder(user.id, userCart, totalPrice, token)
			);
		});

		props.history.push("/thankyou");
	};

	if (complete) return <h1>Purchase Complete!</h1>;

	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column"
			}}
			className="checkout"
		>
			<p>Would you like to complete the purchase?</p>
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					marginTop: "50px",
					marginBottom: "50px",
					border: "5px solid black",
					padding: "50px",
					margin: "auto 0"
				}}
			>
				<CardElement className="card-element" {...styleStripe()} />
			</div>
			<Button
				type="submit"
				style={{
					margin: "20px auto",
					background: "black",
					width: "80%",
					color: "whitesmoke"
				}}
				variant="outlined"
				onClick={handleSubmit}
			>
				Purchase
			</Button>
		</div>
	);
};

export default injectStripe(CheckoutPaymentPage);
