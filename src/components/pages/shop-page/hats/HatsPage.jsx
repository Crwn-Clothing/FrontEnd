import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import { useDispatch } from "react-redux";
import shopActions from "../../../../actions/pages/shop";
import cartActions from "../../../../actions/pages/cart";

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
	const dispatch = useDispatch();
	const selectProduct = product => {
		dispatch(shopActions.getHatProduct(product));
		dispatch(cartActions.userCurrentOrder(product));
		dispatch(cartActions.addToCurrentUser(product));
		// dispatch(cartActions.userOrders());
	};
	const renderGrids = () => {
		return (
			<Grid onClick={() => selectProduct(props.hat)} spacing={3} item xs={2}>
				<img
					className={classes.image}
					src={props.hat.imageUrl}
					alt={props.hat.name}
				/>
				<h4 className={classes.name}>{props.hat.name}</h4>
				<p className={classes.price}>${props.hat.price_cents}</p>
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
