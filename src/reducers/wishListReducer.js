const initialState = {
	wishListCart: []
};

export default (state = initialState, action) => {
	switch (action.type) {
		case "ADD_TO_WISHLIST":
			return {
				...state,
				wishListCart: [...state.wishListCart, action.payload]
			};

		case "REMOVE_FROM_WISHLIST":
			return {
				...state,
				wishListCart: action.payload
			};

		default:
			return state;
	}
};
