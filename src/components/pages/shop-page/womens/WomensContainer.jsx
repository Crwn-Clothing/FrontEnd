import React from "react";
import { connect } from "react-redux";
import "./Womens.scss";
import WomensPage from "./WomensPage";

const WomensContainer = props => {
	const renderWomens = () => {
		return props.womens.map(women => {
			return <WomensPage key={women.id} women={women} />;
		});
	};
	return <div className="card-container">{renderWomens()}</div>;
};
const mapStateToProps = state => ({
	womens: state.shop.womens
});

export default connect(mapStateToProps)(WomensContainer);
