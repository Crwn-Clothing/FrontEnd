import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import { useDispatch } from "react-redux";
// import shopActions from "../../../../actions/pages/shop";
import cartActions from "../../../../actions/pages/cart";

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1
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
const JacketsPage = props => {
	const dispatch = useDispatch();
	const selectProduct = product => {
		dispatch(cartActions.userCurrentOrder(product));
		dispatch(cartActions.addToCurrentUser(product));
	};
	const renderGrids = () => {
		return (
			<Grid onClick={() => selectProduct(props.jacket)} spacing={3} item xs={2}>
				<img
					className={classes.image}
					src={props.jacket.imageUrl}
					alt={props.jacket.name}
				/>
				<h3 className={classes.name}>{props.jacket.name}</h3>
				<p className={classes.price}>${props.jacket.price_cents}</p>
			</Grid>
		);
	};

	// const renderProduct = () => {
	// 	props.history.push("/jackets/");
	// };
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<Grid container spacing={3}>
				{renderGrids()}
			</Grid>
		</div>
	);
};

export default JacketsPage;
