import React from "react";
import { useSelector } from "react-redux";

import WishListPage from "./WishListPage";

import "./WishList.scss";

const WishListContainer = props => {
	const wishListCart = useSelector(state => state.wishList.wishListCart);
	const renderWishList = () => {
		return wishListCart.map(item => (
			<WishListPage key={item.id} wishList={item} />
		));
	};
	return <div className="card-container">{renderWishList()}</div>;
};

export default WishListContainer;
