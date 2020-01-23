import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Row, Col } from "reactstrap";
import { Button } from "reactstrap";
import CheckoutItemList from "./CheckoutItemList";

const CheckoutItemContainer = props => {
	const dispatch = useDispatch();
	const cart = useSelector(state => state.cart.userCart);

	let priceArr = cart.map(product => product.price_cents);
	let totalPrice = priceArr.reduce((acc, cur) => acc + cur, 0);
	const renderCheckoutItems = () => {
		return cart.map(item => {
			return (
				<div
					style={{
						display: "flex",
						justifyContent: "space-evenly",
						marginBottom: "20px"
					}}
					key={item.id}
				>
					<Row>
						Name: <Col>{item.name}</Col>
					</Row>

					<Row>
						Product:{" "}
						<Col>
							<img height="50px" src={item.imageUrl} alt={item.name} />
						</Col>
					</Row>

					<Row>
						Price: <Col>${item.price_cents}</Col>
					</Row>

					<Col>
						Remove:
						<Col>
							<button>Delete</button>
						</Col>
					</Col>
				</div>
			);
		});
	};

	return (
		<div
			style={{
				width: "500px",
				height: "100%",
				border: "10px solid black"
			}}
		>
			<Container>
				{renderCheckoutItems()}
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
					{/* <Link to="/thankyou"><Button onClick={this.payForItems} color="primary" size="lg">Place Order</Button></Link> */}
				</Row>
			</Container>
		</div>
	);
};

export default CheckoutItemContainer;
