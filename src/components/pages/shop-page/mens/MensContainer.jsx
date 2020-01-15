import React from "react";
import { connect } from "react-redux";
import "./Mens.scss";
import MensPage from "./MensPage";

const MensContainer = props => {
	const renderMens = () => {
		return props.mens.map(men => {
			return <MensPage key={men.id} men={men} />;
		});
	};
	return <div className="card-container">{renderMens()}</div>;
};
const mapStateToProps = state => ({
	mens: state.shop.mens
});

export default connect(mapStateToProps)(MensContainer);
