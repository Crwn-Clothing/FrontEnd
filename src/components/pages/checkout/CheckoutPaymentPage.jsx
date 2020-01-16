import React, { useState } from "react";
import { CardElement, injectStripe } from "react-stripe-elements";
import { Button } from "@material-ui/core";

const CheckoutPaymentPage = props => {
	const [complete, setComplete] = useState(false);

	const submit = async () => {
		let { token } = await props.stripe.createToken({ name: "Name" });
		let response = await fetch("http://localhost:3001/charges", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
				Authorization: `Bearer ${localStorage.token}`
			},
			body: JSON.stringify({
				token: token.id,
				orderId: props.orderId
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
			<Button onClick={null}>Purchase</Button>
		</div>
	);
};

export default injectStripe(CheckoutPaymentPage);
