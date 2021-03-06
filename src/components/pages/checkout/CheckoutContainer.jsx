import React from "react";
import CheckoutItemContainer from "./CheckoutItemContainer";
import CheckoutPaymentContainer from "./CheckoutPaymentContainer";

const CheckoutContainer = props => {
	return (
		<div className="checkout-container">
			<CheckoutItemContainer />
			<CheckoutPaymentContainer history={props.history} />
		</div>
	);
};

export default CheckoutContainer;
