import React, { useState } from "react";
import { connect } from "react-redux";
import { setUserAction, getAuthToken } from "../../actions/index";
import Button from "@material-ui/core/Button";

const Login = props => {
	const [loginInput, setLoginInput] = useState({
		username: "",
		password: ""
	});

	const handleChange = e => {
		setLoginInput({ ...loginInput, [e.target.name]: e.target.value });
	};
	const handleSubmit = e => {
		e.preventDefault();
	};
	return (
		<div className="login">
			<h2>Login</h2>
			<form className="login-form" id="input-login" onSubmit={handleSubmit}>
				<input
					placeholder="Username"
					type="text"
					name="username"
					value={loginInput.username}
					onChange={handleChange}
					id="login-text"
				/>
				<input
					placeholder="Password"
					type="text"
					name="password"
					value={loginInput.password}
					onChange={handleChange}
					id="login-text"
				/>
			</form>
			<Button
				style={{
					margin: "20px auto",
					background: "black",
					width: "80%",
					color: "whitesmoke"
				}}
			>
				Login
			</Button>
		</div>
	);
};

// const mapStateToProps = state => {

// };

const mapDispatchToProps = dispatch => {};

export default connect(null, mapDispatchToProps)(Login);
