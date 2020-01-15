import React from "react";
import { connect } from "react-redux";
import "./Sneakers.scss";
import SneakersPage from "./SneakersPage";

const SneakersContainer = props => {
	const renderSneakers = () => {
		return props.sneakers.map(sneaker => {
			return <SneakersPage key={sneaker.id} sneaker={sneaker} />;
		});
	};
	return <div className="card-container">{renderSneakers()}</div>;
};
const mapStateToProps = state => ({
	sneakers: state.shop.sneakers
});

export default connect(mapStateToProps)(SneakersContainer);
