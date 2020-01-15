import React, { useState } from "react";
import { connect } from "react-redux";
import userActions from "../../../actions/index";
import Button from "@material-ui/core/Button";
import "./Account.scss";

const AccountPage = props => {
	const [userEdit, setUserEdit] = useState({
		email: "",
		username: "",
		password: ""
	});

	const handleChange = e => {
		setUserEdit({
			...setUserEdit,
			[e.target.name]: e.target.value
		});
	};

	const handleSubmit = e => {
		e.preventDefault();
		props.updatedUserInfo(userEdit);
		setUserEdit({
			email: "",
			username: "",
			password: ""
		});
	};
	return (
		<div className="login">
			<h2>UPDATE ACCOUNT</h2>
			<form className="login-form" onSubmit={handleSubmit}>
				<input
					placeholder="Email"
					type="email"
					name="email"
					value={userEdit.email}
					onChange={handleChange}
					id="login-text"
				/>
				<input
					placeholder="Username"
					type="text"
					name="username"
					value={userEdit.username}
					onChange={handleChange}
					id="login-text"
				/>
				<input
					placeholder="Password"
					type="password"
					name="password"
					value={userEdit.password}
					onChange={handleChange}
					id="login-text"
				/>
				<Button
					variant="outlined"
					type="submit"
					style={{
						margin: "20px auto",
						background: "black",
						width: "40%",
						color: "whitesmoke"
					}}
				>
					Create Account
				</Button>
			</form>
		</div>
	);
};

const mapDispatchToProps = dispatch => ({
	updatedUserInfo: userObj => dispatch(userActions.updatedUserInfo(userObj))
});

export default connect(null, mapDispatchToProps)(AccountPage);
