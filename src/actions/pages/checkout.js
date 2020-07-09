const createOrderLink = "http://localhost:3001/carts";

const createNewOrder = (order) => ({
	type: "POST_ORDER",
	payload: order,
});

const postNewOrder = (userId, products, total, token) => (dispatch) => {
	let config = {
		method: "POST",
		headers: {
			Authorization: `Bearer ${localStorage.token}`,
			Accept: "application/json",
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			cart: { user_id: userId, price: total },
			products: products,
			token: token.id,
		}),
	};
	fetch(createOrderLink, config)
		.then((res) => res.json())
		.then((order) => {
			dispatch(createNewOrder(order));
		});
};

export default {
	postNewOrder,
};
