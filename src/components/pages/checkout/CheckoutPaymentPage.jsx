import React, { useState } from "react";
import { useSelector } from "react-redux";
import { CardElement, injectStripe } from "react-stripe-elements";
import { Button } from "@material-ui/core";
import "./Checkout.scss";

const CheckoutPaymentPage = props => {
	const [complete, setComplete] = useState(false);
	const cart = useSelector(state => state.cart.userCart);
	const productIds = cart.map(cardObj => cardObj.id);
	console.log("props: ", props);
	const submit = async () => {
		let { token } = await props.stripe.createToken({ name: "Name" });
		debugger;
		let response = await fetch("http://localhost:3001/charges", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
				Authorization: `Bearer ${localStorage.token}`
			},
			body: JSON.stringify({
				token: token.id,
				productIds: productIds
			})
		});

		if (response.ok) {
			setComplete(!complete);
		}
	};

	if (complete) return <h1>Purchase Complete!</h1>;

	return (
		<div className="checkout">
			<p>Would you like to complete the purchase?</p>
			<CardElement />
			<Button
				type="submit"
				style={{
					margin: "20px auto",
					background: "black",
					width: "80%",
					color: "whitesmoke"
				}}
				variant="outlined"
				onClick={submit}
			>
				Purchase
			</Button>
		</div>
	);
};

export default injectStripe(CheckoutPaymentPage);
