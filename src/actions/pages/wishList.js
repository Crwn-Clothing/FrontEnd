const updateWishListCart = productObj => ({
	type: "ADD_TO_WISHLIST",
	payload: productObj
});

const addItemToWishList = productObj => dispatch => {
	dispatch(updateWishListCart(productObj));
};

const wishListRemoval = newWishListArr => ({
	type: "REMOVE_FROM_WISHLIST",
	payload: newWishListArr
});

const removeItemFromWishList = newWishListArr => dispatch => {
	dispatch(wishListRemoval(newWishListArr));
};

export default {
	addItemToWishList,
	removeItemFromWishList
};
