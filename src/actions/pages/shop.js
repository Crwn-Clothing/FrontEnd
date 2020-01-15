const getProductsURL = "http://localhost:3001/products";

const getProducts = products => ({
	type: "GET_PRODUCTS",
	payload: products
});

const hatsAction = hats => ({
	type: "GET_HATS",
	payload: hats
});
const jacketsAction = jackets => ({
	type: "GET_JACKETS",
	payload: jackets
});
const sneakersAction = sneakers => ({
	type: "GET_SNEAKERS",
	payload: sneakers
});
const womensAction = womens => ({
	type: "GET_WOMENS",
	payload: womens
});
const mensAction = mens => ({
	type: "GET_MENS",
	payload: mens
});

const fetchProducts = products => dispatch => {
	const config = {
		method: "GET",
		headers: {
			Authorization: `Bearer ${localStorage.token}`
		}
	};
	fetch(getProductsURL, config)
		.then(res => res.json())
		.then(product => {
			dispatch(getProducts(product));
			dispatch(getHats(product));
			dispatch(getJackets(product));
			dispatch(getSneakers(product));
			dispatch(getWomens(product));
			dispatch(getMens(product));
		});
};

const getHats = products => dispatch => {
	let hats = products.filter(product => product.title === "hats");
	dispatch(hatsAction(hats));
};
const getJackets = products => dispatch => {
	let jackets = products.filter(product => product.title === "jackets");
	dispatch(jacketsAction(jackets));
};
const getSneakers = products => dispatch => {
	let sneakers = products.filter(product => product.title === "sneakers");
	dispatch(sneakersAction(sneakers));
};
const getWomens = products => dispatch => {
	let womens = products.filter(product => product.title === "womens");
	dispatch(womensAction(womens));
};
const getMens = products => dispatch => {
	let mens = products.filter(product => product.title === "mens");
	dispatch(mensAction(mens));
};

export default {
	fetchProducts,
	getHats,
	getJackets,
	getSneakers,
	getWomens,
	getMens
};
