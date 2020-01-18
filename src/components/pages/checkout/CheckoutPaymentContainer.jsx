import React from "react";
import { Elements, StripeProvider } from "react-stripe-elements";
import CheckoutPaymentPage from "./CheckoutPaymentPage";

const CheckoutPaymentContainer = props => {
	return (
		<div>
			<StripeProvider apiKey="pk_test_hsEQFcbVVFF5K5QNToyO7Nuz00dn0SVm7U">
				<div className="example">
					<h1>React Stripe Elements Example</h1>
					<Elements>
						<CheckoutPaymentPage />
					</Elements>
				</div>
			</StripeProvider>
		</div>
	);
};

export default CheckoutPaymentContainer;

// 4242 4242 4242 4242
