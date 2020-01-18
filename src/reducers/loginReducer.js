const initialState = {
	currentUser: {},
	isLoggedIn: false
};

export const loginReducer = (state = initialState, action) => {
	switch (action.type) {
		case "SET_USER":
			return { ...state, currentUser: action.payload };
		case "USER_LOGIN_STATUS":
			return { ...state, isLoggedIn: action.payload };
		case "CLEAR_USER":
			return { ...state, currentUser: action.payload };
		case "PERSIST_LOGIN_STATUS":
			return { ...state, isLoggedIn: action.payload };
		default:
			return state;
	}
};
