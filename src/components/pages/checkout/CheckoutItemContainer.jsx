import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Row, Col } from "reactstrap";
import { Button } from "reactstrap";
import CheckoutItemList from "./CheckoutItemList";

const CheckoutItemContainer = (props) => {
	const dispatch = useDispatch();
	const cart = useSelector((state) => state.cart.userCart);

	let priceArr = cart.map((product) => product.price_cents);
	let totalPrice = priceArr.reduce((acc, cur) => acc + cur, 0);

	const renderProductNames = () => {
		return cart.map((item) => {
			return (
				<Col key={item}>
					<p>{item.name}</p>
				</Col>
			);
		});
	};
	const renderProductImages = () => {
		return cart.map((item) => {
			return (
				<Col key={item.id}>
					<img height="35px" src={item.imageUrl} alt={item.name} />
				</Col>
			);
		});
	};
	const renderProductPrices = () => {
		return cart.map((item) => {
			return (
				<Col key={item.id}>
					<p>${item.price_cents}</p>
				</Col>
			);
		});
	};

	const renderDeleteButton = () => {
		return cart.map((item) => {
			return (
				<Col key={item.id}>
					<button>Remove</button>
				</Col>
			);
		});
	};

	return (
		<div
			style={{
				width: "500px",
				height: "100%",
				border: "10px solid black",
				marginBottom: "200px",
				marginTop: "128px",
			}}
		>
			<Container>
				<div
					style={{
						display: "flex",
						justifyContent: "space-evenly",
						marginBottom: "20px",
					}}
				>
					<Row style={{ marginBottom: "20px" }}>
						<div style={{ margin: "auto 0" }}>Name: {renderProductNames()}</div>
					</Row>
					<Row style={{ marginBottom: "20px" }}>
						<div style={{ margin: "auto 0" }}>
							Product: {renderProductImages()}
						</div>
					</Row>
					<Row style={{ marginBottom: "20px" }}>
						Price:
						<div style={{ margin: "auto 0" }}>{renderProductPrices()}</div>
					</Row>
				</div>

				<br />
				<br />
				<br></br>
				<Row>
					SubTotal
					<Col>
						<br></br>
						<div>${totalPrice}</div>
						<br></br>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default CheckoutItemContainer;
