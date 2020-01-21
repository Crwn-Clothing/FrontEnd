import React from "react";

const ProductContainer = props => {
	console.log("props: ", props);
	props.match.params.id = props.hat.id;
	return <div></div>;
};

export default ProductContainer;
