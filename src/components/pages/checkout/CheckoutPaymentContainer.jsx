import React from "react";
import { Elements, StripeProvider } from "react-stripe-elements";
import CheckoutPaymentPage from "./CheckoutPaymentPage";

const CheckoutPaymentContainer = props => {
	return (
		<StripeProvider apiKey="pk_test_hsEQFcbVVFF5K5QNToyO7Nuz00dn0SVm7U">
			<div className="example">
				<h1>Checkout</h1>
				<Elements>
					<CheckoutPaymentPage history={props.history} />
				</Elements>
			</div>
		</StripeProvider>
	);
};

export default CheckoutPaymentContainer;

// 4242 4242 4242 4242
