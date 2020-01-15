const initialState = {
  products = [],
  userOrders = []
};

export default shopReducer =  (state = initialState, action) => {
	switch (action.type) {
		case "GET_PRODUCTS":
			return { ...state, products:action.type };

		default:
			return state;
	}
};
