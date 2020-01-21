import React from "react";
import { Grid, makeStyles, Button } from "@material-ui/core";
import { useDispatch } from "react-redux";
import shopActions from "../../../../actions/pages/shop";
import cartActions from "../../../../actions/pages/cart";
import ProductContainer from "../product/ProductContainer";

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
		width: "300px"
	},
	image: {
		margin: "20px",
		paddingTop: "50px",

		width: "300px",
		height: "300px",
		backgroundSize: "cover"
	},
	name: {
		marginLeft: "20px",
		textAlign: "center",
		width: "300px"
	},
	price: {
		marginLeft: "20px",
		textAlign: "center",
		width: "300px"
	},

	paper: {
		padding: theme.spacing(2),
		textAlign: "center",
		color: theme.palette.text.secondary
	}
}));
const HatsPage = props => {
	console.log("props: ", props);
	const dispatch = useDispatch();
	const selectProduct = product => {
		dispatch(shopActions.getHatProduct(product));
		dispatch(cartActions.userCurrentOrder(product));
		dispatch(cartActions.addToCurrentUser(product));
	};
	const handleClick = hat => {
		console.log("hat", hat);
		// props.history.push("/hats/:id");
		// return <ProductContainer hat={hat} />;
	};

	const renderGrids = () => {
		return (
			<Grid spacing={3} item xs={2}>
				<img
					// onClick={() => handleClick(props.hat)}
					className={classes.image}
					src={props.hat.imageUrl}
					alt={props.hat.name}
				/>
				<h4 className={classes.name}>{props.hat.name}</h4>
				<p className={classes.price}>${props.hat.price_cents}</p>
				<Button
					onClick={() => selectProduct(props.hat)}
					variant="outlined"
					type="submit"
					style={{
						margin: "20px auto",
						background: "black",
						width: "300px",
						color: "whitesmoke",
						marginLeft: "20px"
					}}
				>
					Add To Cart
				</Button>
			</Grid>
		);
	};
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<Grid container spacing={3}>
				{renderGrids()}
			</Grid>
		</div>
	);
};

export default HatsPage;
