import React from "react";
import { connect } from "react-redux";
import "./Hats.scss";
import HatsPage from "./HatsPage";

const HatsContainer = props => {
	const renderHats = () => {
		return props.hats.map(hat => {
			return <HatsPage key={hat.id} hat={hat} />;
		});
	};
	return <div className="card-container">{renderHats()}</div>;
};
const mapStateToProps = state => ({
	hats: state.shop.hats
});

export default connect(mapStateToProps)(HatsContainer);
