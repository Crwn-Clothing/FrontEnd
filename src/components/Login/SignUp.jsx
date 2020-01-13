import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "@material-ui/core/Button";

export const SignUp = () => {
	const [signUpInput, setSignUpInput] = useState({
		first_name: "",
		last_name: "",
		email: "",
		password: ""
	});

	const handleChange = e => {
		setSignUpInput({ ...signUpInput, [e.target.name]: e.target.value });
	};

	const handleSubmit = e => {
		e.preventDefault();
	};
	return (
		<div className="login">
			<h2>LOGIN</h2>
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
			</form>
			<Button
				style={{
					margin: "20px auto",
					background: "black",
					width: "80%",
					color: "whitesmoke"
				}}
			>
				Create Account
			</Button>
		</div>
	);
};
