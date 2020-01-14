import React, { useState } from "react";
import { connect } from "react-redux";

import userActions from "../../actions/index";
import Button from "@material-ui/core/Button";

const SignUp = props => {
	const [signUpInput, setSignUpInput] = useState({
		first_name: "",
		last_name: "",
		email: "",
		username: "",
		password: ""
	});

	const handleChange = e => {
		setSignUpInput({ ...signUpInput, [e.target.name]: e.target.value });
	};

	const handleSubmit = e => {
		e.preventDefault();
		console.log("signUpInput: ", signUpInput);
		props.newUserToDB(signUpInput);
		props.setLoginStatus(props.loginStatus);
		// props.history.push("/");
	};
	return (
		<div className="login">
			<h2>CREATE AN ACCOUNT</h2>
			<form className="login-form" onSubmit={handleSubmit}>
				<input
					placeholder="First Name"
					type="text"
					name="first_name"
					value={signUpInput.first_name}
					onChange={handleChange}
					id="login-text"
				/>
				<input
					placeholder="Last Name"
					type="text"
					name="last_name"
					value={signUpInput.last_name}
					onChange={handleChange}
					id="login-text"
				/>
				<input
					placeholder="Email"
					type="email"
					name="email"
					value={signUpInput.email}
					onChange={handleChange}
					id="login-text"
				/>
				<input
					placeholder="Username"
					type="text"
					name="username"
					value={signUpInput.username}
					onChange={handleChange}
					id="login-text"
				/>
				<input
					placeholder="Password"
					type="password"
					name="password"
					value={signUpInput.password}
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
					Create Account
				</Button>
			</form>
		</div>
	);
};

const mapStateToProps = state => ({
	loginStatus: state.userLogin.isLoggedIn
});
const mapDispatchToProps = dispatch => ({
	newUserToDB: userObj => dispatch(userActions.newUserToDB(userObj)),
	setLoginStatus: loginStatus =>
		dispatch(userActions.setLoginStatus(loginStatus))
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
