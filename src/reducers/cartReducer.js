const initialState = {
	currentOrder: [],
	cartOrders: {},
	userCart: []
};

export const cartReducer = (state = initialState, action) => {
	switch (action.type) {
		case "CART_ORDER":
			return {
				...state,
				cartOrders: action.payload
			};
		case "CURRENT_ORDER":
			return {
				...state,
				currentOrder: action.payload
			};
		case "ADD_TO_CART":
			return {
				...state,
				userCart: [...state.userCart, action.payload]
			};

		case "REMOVE_PRODUCT":
			return {
				...state,
				userCart: action.payload
			};

		case "CLEAR_CART":
			return {
				...state,
				userCart: action.payload
			};

		default:
			return state;
	}
};
