const createOrderLink = "http://localhost:3001/orders";

const postOrder = order => ({
	type: "POST_ORDER",
	payload: order
});

const userOrders = order => ({
	type: "GET_USER_ORDERS",
	payload: order
});

const createNewOrder = (order, user) => dispatch => {
	let config;
	order.forEach(element => {
		config = {
			method: "POST",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
				Authorization: `Bearer ${localStorage.token}`
			},
			body: JSON.stringify({
				product: order.id,
				user: user.id
			})
		};

		fetch(createOrderLink, config)
			.then(res => res.json())
			.then(order => {
				dispatch(postOrder(order));
				dispatch(getUserOrders(order));
			});
	});
};

export default {
	createNewOrder
};
