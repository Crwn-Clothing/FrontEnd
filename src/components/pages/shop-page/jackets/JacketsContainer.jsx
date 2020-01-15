import React from "react";
import { connect } from "react-redux";
import "./Jackets.scss";
import JacketsPage from "./JacketsPage";

const JacketsContainer = props => {
	const renderJackets = () => {
		return props.jackets.map(jacket => {
			return <JacketsPage key={jacket.id} jacket={jacket} />;
		});
	};
	return <div className="card-container">{renderJackets()}</div>;
};
const mapStateToProps = state => ({
	jackets: state.shop.jackets
});

export default connect(mapStateToProps)(JacketsContainer);
