const initialState = {
	order: {},
	userOrders: []
};

const checkoutReducer = (state = initialState, action) => {
	switch (action.type) {
		case "POST_ORDER":
			return { ...state, order: action.payload };
		case "GET_USER_ORDERS":
			return {
				...state,
				userOrders: action.payload
			};
		default:
			return state;
	}
};

export default checkoutReducer;
