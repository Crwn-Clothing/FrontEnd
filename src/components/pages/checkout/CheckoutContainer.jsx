import React from "react";
import CheckoutItemContainer from "./CheckoutItemContainer";
import CheckoutPaymentContainer from "./CheckoutPaymentContainer";

const CheckoutContainer = props => {
	// debugger;
	// useEffect(() => {
	// 	effect;
	// 	return () => {
	// 		cleanup;
	// 	};
	// }, [input]);
	return (
		<div className="checkout-container">
			<CheckoutItemContainer />
			<CheckoutPaymentContainer />
		</div>
	);
};

export default CheckoutContainer;
