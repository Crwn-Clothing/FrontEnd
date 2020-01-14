import React, { useState } from "react";
import { connect } from "react-redux";
import userActions from "../../actions/index";
import Button from "@material-ui/core/Button";

const Login = props => {
	console.log(props);
	const [loginInput, setLoginInput] = useState({
		username: "",
		password: ""
	});

	const handleChange = e => {
		setLoginInput({ ...loginInput, [e.target.name]: e.target.value });
	};
	const handleSubmit = e => {
		console.log("history: ", props);
		e.preventDefault();
		props.loginUserToDB(loginInput);
		props.setLoginStatus(props.loginStatus);
		props.history.push("/");
		setLoginInput({
			username: "",
			password: ""
		});
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
					type="password"
					name="password"
					value={loginInput.password}
					onChange={handleChange}
					id="login-text"
				/>
				<Button
					variant="outlined"
					type="submit"
					style={{
						margin: "20px auto",
						background: "black",
						width: "80%",
						color: "whitesmoke"
					}}
				>
					Login
				</Button>
			</form>
		</div>
	);
};

const mapStateToProps = state => ({
	loginStatus: state.userLogin.isLoggedIn
});

const mapDispatchToProps = dispatch => ({
	loginUserToDB: loginInput => dispatch(userActions.loginUserToDB(loginInput)),
	setLoginStatus: loginStatus =>
		dispatch(userActions.setLoginStatus(loginStatus))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
