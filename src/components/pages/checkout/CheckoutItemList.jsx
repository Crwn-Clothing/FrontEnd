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
			</div>
		</div>
	);
};

export default CheckoutItemList;
