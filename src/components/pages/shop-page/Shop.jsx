// import React, { useState, useEffect } from "react";
// import { connect } from "react-redux";
// import { Route } from "react-router-dom";
// import productActions from "../../../actions/pages/shop";

// import HatsContainer from "./hats/HatsContainer";

// const Shop = props => {
// 	const [hats, setHats] = useState([]);
// 	const [jackets, setJackets] = useState([]);
// 	const [sneakers, setSneakers] = useState([]);
// 	const [womens, setWomens] = useState([]);
// 	const [mens, setMens] = useState([]);

// 	useEffect(() => {
// 		props.getProducts(props.products);
// 	});

// 	// const getItems = () => {
// 	// 	return props.products.filter(product => {
// 	// 		switch (product.title) {
// 	// 			case "hats":
// 	// 				return setHats([...hats, product]);
// 	// 			case "jackets":
// 	// 				return setJackets([...jackets, product]);
// 	// 			case "sneakers":
// 	// 				return setSneakers([...sneakers, product]);
// 	// 			case "womens":
// 	// 				return setWomens([...womens, product]);
// 	// 			case "mens":
// 	// 				return setMens([...mens, product]);
// 	// 			default:
// 	// 				return null;
// 	// 		}
// 	// 	});
// 	// };

// 	return <div></div>;
// };

// const mapStateToProps = state => ({
// 	products: state.shop.products
// });

// const mapDispatchToProps = dispatch => ({
// 	getProducts: products => dispatch(productActions.fetchProducts(products))
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Shop);
