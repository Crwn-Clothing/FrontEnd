const initialState = {
	order: {},
	stripeOrder: {}
};

const checkoutReducer = (state = initialState, action) => {
	switch (action.type) {
		case "STRIPE_ORDER":
			return {
				...state,
				stripeOrder: action.payload
			};
		case "POST_ORDER":
			return {
				...state,
				order: action.payload
			};
		default:
			return state;
	}
};

export default checkoutReducer;
