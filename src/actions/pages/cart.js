const cartsPostURL = "http://localhost:3001/carts";
// const userCartURL = userId => `http://localhost:3001/users/${userId}`;

const postOrder = (cartObj) => ({
	type: "CART_ORDER",
	payload: cartObj,
});
const clearCart = () => ({
	type: "CLEAR_CART",
	payload: [],
});

const createOrder = (userId, products, total) => (dispatch) => {
	const config = {
		method: "POST",
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
			Authorization: `Bearer ${localStorage.token}`,
		},
		body: JSON.stringify({
			cart: { user_id: userId, price: total },
			products: products,
		}),
	};

	fetch(cartsPostURL, config)
		.then((res) => res.json())
		.then((cartObj) => {
			dispatch(postOrder(cartObj));
		});
};

const currentOrder = (product) => ({
	type: "CURRENT_ORDER",
	payload: product,
});

const userCurrentOrder = (product) => (dispatch) => {
	dispatch(currentOrder(product));
};

const userCart = (userObj) => ({
	type: "ADD_TO_CART",
	payload: userObj,
});

const addToCurrentUser = (userObj) => (dispatch) => {
	dispatch(userCart(userObj));
};

const resetUserCart = () => (dispatch) => {
	dispatch(clearCart());
};

const removeProduct = (product) => ({
	type: "REMOVE_PRODUCT",
	payload: product,
});

const removeProductFromCart = (product) => (dispatch) => {
	dispatch(removeProduct(product));
};

const clearingCart = () => (dispatch) => {
	dispatch(clearCart());
};
export default {
	createOrder,
	userCurrentOrder,
	addToCurrentUser,
	resetUserCart,
	removeProductFromCart,
	clearingCart,
};
