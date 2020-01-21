const createOrderLink = "http://localhost:3001/carts";
const getOrders = "http://localhost:3001/orders";
const stripeURL = "http://localhost:3001/charges";

const createNewOrder = order => ({
	type: "POST_ORDER",
	payload: order
});

const postNewOrder = (userId, products, total, token) => dispatch => {
	let config = {
		method: "POST",
		headers: {
			Authorization: `Bearer ${localStorage.token}`,
			Accept: "application/json",
			"Content-Type": "application/json"
		},
		body: JSON.stringify({
			cart: { user_id: userId, price: total },
			products: products,
			token: token.id
		})
	};
	fetch(createOrderLink, config)
		.then(res => res.json())
		.then(order => {
			dispatch(createNewOrder(order));
		});
};

const getStripeOrder = stripeOrderObj => ({
	type: "STRIPE_ORDER",
	payload: stripeOrderObj
});

const fetchStripeOrder = () => dispatch => {
	const config = {
		method: "GET",
		headers: {
			Authorization: `Bearer ${localStorage.token}`
		}
	};
	fetch(getOrders, config)
		.then(res => res.json())
		.then(orders => {
			dispatch(getStripeOrder(orders[orders.length - 1]));
		});
};

const stripePostCall = (order, token) => dispatch => {
	const config = {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Accept: "application/json",
			Authorization: `Bearer ${localStorage.token}`
		},
		body: JSON.stringify({
			token: token.id,
			orderId: order.id
		})
	};

	fetch(stripeURL, config)
		.then(res => res.json)
		.then(data => {
			debugger;
		});
};

// dispatch runs post request

// let response = await fetch("http://localhost:3001/charges", {

// let data = response.json();
// console.log(data);

// if (response.ok) {
// 	setComplete(!complete);
// }

export default {
	postNewOrder,
	fetchStripeOrder,
	stripePostCall
};
