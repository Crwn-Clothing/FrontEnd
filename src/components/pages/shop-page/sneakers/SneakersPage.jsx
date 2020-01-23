import React from "react";
import { Grid, makeStyles, Button } from "@material-ui/core";
import { useDispatch } from "react-redux";
import cartActions from "../../../../actions/pages/cart";
import wishListActions from "../../../../actions/pages/wishList";

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
const SneakersPage = props => {
	const dispatch = useDispatch();
	const selectProduct = product => {
		dispatch(cartActions.userCurrentOrder(product));
		dispatch(cartActions.addToCurrentUser(product));
	};
	const AddProductToWishList = product => {
		dispatch(wishListActions.addItemToWishList(product));
	};
	const renderGrids = () => {
		return (
			<Grid spacing={3} item xs={2}>
				<img
					className={classes.image}
					src={props.sneaker.imageUrl}
					alt={props.sneaker.name}
				/>
				<h4 className={classes.name}>{props.sneaker.name}</h4>
				<p className={classes.price}>${props.sneaker.price_cents}</p>
				<Button
					onClick={() => selectProduct(props.sneaker)}
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
				<Button
					onClick={() => AddProductToWishList(props.sneaker)}
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
					Add To WishList
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

export default SneakersPage;
