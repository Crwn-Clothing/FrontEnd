import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { CardElement, injectStripe } from "react-stripe-elements";
import { Button } from "@material-ui/core";
import cartActions from "../../../actions/pages/cart";
import checkoutActions from "../../../actions/pages/checkout";
import "./Checkout.scss";

const styleStripe = () => {
	return {
		style: {
			base: {
				display: "flex",
				flexDirection: "column",
				margin: "auto 0",
				"::placeholder": {
					color: "#aab7c4",
				},
			},
		},
	};
};

const CheckoutPaymentPage = (props) => {
	// dispatches
	const dispatch = useDispatch();

	// selectors
	const user = useSelector((state) => state.userLogin.currentUser);
	const userCart = useSelector((state) => state.cart.userCart);
	let priceArr = userCart.map((product) => product.price_cents);
	let totalPrice = priceArr.reduce((acc, cur) => acc + cur, 0);

	const handleSubmit = async () => {
		let { token } = await props.stripe.createToken({ name: `${user.name}` });
		let response = await dispatch(
			checkoutActions.postNewOrder(user.id, userCart, totalPrice, token)
		);
		let end = await dispatch(cartActions.clearingCart());
		props.history.push("/thankyou");
	};

	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
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
					marginLeft: "20px",
				}}
			>
				<CardElement className="card-element" {...styleStripe()} />
			</div>
			<Button
				type="submit"
				style={{
					margin: "20px auto",
					background: "black",
					width: "60%",
					color: "whitesmoke",
					marginLeft: "150px",
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
