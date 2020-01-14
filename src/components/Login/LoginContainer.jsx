import React from "react";

import Login from "./Login";
import SignUp from "./SignUp";

import "./Login.scss";

export const LoginContainer = () => {
	return (
		<div className="login-page">
			<Login />
			<SignUp />
		</div>
	);
};
