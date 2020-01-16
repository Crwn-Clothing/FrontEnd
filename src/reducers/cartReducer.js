const initialState = {
	userOrders: [],
	userCart: [],
	currentOrder: {}
};

export const cartReducer = (state = initialState, action) => {
	switch (action.type) {
		case "CART_ORDERS":
			return {
				...state,
				cartOrders: action.payload
			};
		case "CURRENT_ORDERS":
			return {
				...state,
				currentOrder: action.payload
			};
		case "ADD_TO_CART":
			return {
				...state,
				userCart: [...state.userCart, action.payload]
			};

		// case "USER_ORDERS":
		// 	return {
		// 		...state,
		// 		userOrders: [...state.userOrders, state.currentOrder]
		// 	};
		default:
			return state;
	}
};
