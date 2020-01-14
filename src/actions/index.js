const baseURL = "http://localhost:3001/users";
const specificUserURL = userId => `http://localhost:3001/users/${userId}`;
const loginURL = "http://localhost:3001/login";
const persistUserURL = "http://localhost:3001/login/auth";

const setUserAction = userObj => ({
	type: "SET_USER",
	payload: userObj
});

const clearUserAction = () => ({
	type: "CLEAR_USER",
	payload: {}
});
const setLoginStatus = loginStatus => {
	return {
		type: "USER_LOGIN_STATUS",
		payload: !loginStatus
	};
};

const setUserLogOut = () => {
	return {
		type: "USER_LOGOUT",
		payload: null
	};
};

const newUserToDB = userObj => dispatch => {
	const config = {
		method: "POST",
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json"
		},
		body: JSON.stringify(userObj)
	};
	fetch(baseURL, config)
		.then(res => res.json())
		.then(data => {
			console.log("data: ", data);
			dispatch(setUserAction(data.user));
			localStorage.setItem("token", data.token);
		});
};

const deleteUserFromDB = userId => dispatch => {
	const config = {
		method: "DELETE"
	};
	fetch(specificUserURL, config).then(res => {
		dispatch(clearUserAction());
		localStorage.clear();
	});
};

const loginUserToDB = userObj => dispatch => {
	const config = {
		method: "POST",
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json"
		},
		body: JSON.stringify({
			username: userObj.username,
			password: userObj.password
		})
	};
	fetch(loginURL, config)
		.then(res => res.json())
		.then(data => {
			dispatch(setUserAction(data.user));
			localStorage.setItem("token", data.token);
		});
};

const persistUser = userObj => dispatch => {
	const config = {
		method: "GET",
		headers: {
			Authorization: `bearer ${localStorage.token}`
		}
	};
	fetch(persistUserURL, config)
		.then(res => res.json())
		.then(user => {
			dispatch(setUserAction(user));
		});
};

const logOutUser = () => dispatch => {
	dispatch(clearUserAction());
	localStorage.clear();
};

export default {
	setLoginStatus,
	newUserToDB,
	deleteUserFromDB,
	loginUserToDB,
	persistUser,
	logOutUser
};
