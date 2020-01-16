const initialState = {
	products: [],
	hats: [],
	hat: {},
	jackets: [],
	sneakers: [],
	womens: [],
	mens: []
};

export const shopReducer = (state = initialState, action) => {
	switch (action.type) {
		case "GET_PRODUCTS":
			return { ...state, products: action.payload };
		case "GET_HATS":
			return { ...state, hats: action.payload };
		case "GET_JACKETS":
			return { ...state, jackets: action.payload };
		case "GET_SNEAKERS":
			return { ...state, sneakers: action.payload };
		case "GET_WOMENS":
			return { ...state, womens: action.payload };
		case "GET_MENS":
			return { ...state, mens: action.payload };
		case "GET_HAT":
			return {
				...state,
				hat: action.payload
			};
		default:
			return state;
	}
};
