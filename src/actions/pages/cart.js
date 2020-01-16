const ordersPostURL = "http://localhost:3001/orders";
// const userCartURL = userId => `http://localhost:3001/users/${userId}`;

const postOrder = orderObj => ({
	type: "CART_ORDERS",
	payload: orderObj
});

const postOrderFetch = (productId, userId) => dispatch => {
	const config = {
		method: "POST",
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
			Authorization: `Bearer ${localStorage.token}`
		},
		body: JSON.stringify({
			product: productId,
			user: userId
		})
	};

	fetch("http://localhost:3001/orders", config)
		.then(res => res.json())
		.then(order => dispatch(postOrder(order)));
};

const currentOrder = product => ({
	type: "CURRENT_ORDERS",
	payload: product
});

const userCurrentOrder = product => dispatch => {
	dispatch(currentOrder(product));
};

const userCart = userObj => ({
	type: "ADD_TO_CART",
	payload: userObj
});

const addToCurrentUser = userObj => dispatch => {
	dispatch(userCart(userObj));
};

// const addUserCartToUserCart = product => ({
// 	type: "USER_ORDERS",
// 	action: product
// });

// const userOrders = product => dispatch => {
// 	dispatch(addUserCartToUserCart(product));
// };
export default {
	postOrderFetch,
	userCurrentOrder,
	addToCurrentUser
	// userOrders
};
