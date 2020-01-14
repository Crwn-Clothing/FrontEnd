export const setUserAction = userObj => {
	return {
		type: "USER_LOG_IN",
		payload: userObj
	};
};

export const getAuthToken = token => {
	return {
		type: "USER_POST_FETCH",
		payload: token
	};
};

export const setLoginStatus = loginStatus => {
	return {
		type: "USER_LOGIN_STATUS",
		payload: !loginStatus
	};
};

export const setUserLogOut = () => {
	return {
		type: "USER_LOGOUT",
		payload: null
	};
};
