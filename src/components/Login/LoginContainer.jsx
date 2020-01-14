import React from "react";

import Login from "./Login";
import SignUp from "./SignUp";

import "./Login.scss";

export const LoginContainer = props => {
	return (
		<div className="login-page">
			<Login history={props.history} />
			<SignUp history={props.history} />
		</div>
	);
};
