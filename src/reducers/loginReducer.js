const initialState = {
	currentUser: {},
	token: null,
	isLoggedIn: false
};

export const loginReducer = (state = initialState, action) => {
	switch (action.type) {
		case "USER_LOG_IN":
			return {
				...state,
				currentUser: action.payload
			};

		case "USER_POST_FETCH":
			return {
				...state,
				token: action.payload
			};

		case "USER_LOGIN_STATUS":
			return {
				...state,
				isLoggedIn: action.payload
			};

		case "USER_LOGOUT":
			return {
				...state,
				token: action.payload
			};
		default:
			return state;
	}
};
