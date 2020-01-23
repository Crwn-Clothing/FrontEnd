import React from "react";
import { Row, Col } from "reactstrap";

const CheckoutItemList = props => {
	// debugger;
	return (
		<div>
			<div>
				<Row>
					Name:
					<Col>{props.item.name}</Col>
				</Row>
				<Row>
					Product:
					<Col>{props.item.imageUrl}</Col>
				</Row>
				<Row>
					Price:
					<Col>{props.item.price_cents}</Col>
				</Row>
				{/* <Card
					style={{
						display: "flex",
						flexDiretion: "row"
					}}
				>
					<CardBody>
						<CardTitle>{props.item.name}</CardTitle>
						<CardSubtitle>{props.item.price_cents}</CardSubtitle>
					</CardBody>
					<img width="25%" src={props.item.imageUrl} alt={props.item.name} />
				</Card> */}
			</div>
		</div>
	);
};

export default CheckoutItemList;
