import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid, makeStyles, Button } from "@material-ui/core";
import wishListActions from "../../../actions/pages/wishList";
import cartActions from "../../../actions/pages/cart";

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

const WishListPage = props => {
	const dispatch = useDispatch();
	const wishListCart = useSelector(state => state.wishList.wishListCart);

	const removeFromWishList = product => {
		let filteredWishList = wishListCart.filter(
			wishListItem => wishListItem !== product
		);
		dispatch(wishListActions.removeItemFromWishList(filteredWishList));
	};

	const addProductToCart = product => {
		dispatch(cartActions.addToCurrentUser(product));
	};

	const renderGrids = () => {
		return (
			<Grid spacing={3} item xs={2}>
				<img
					className={classes.image}
					src={props.wishList.imageUrl}
					alt={props.wishList.name}
				/>
				<h4 className={classes.name}>{props.wishList.name}</h4>
				<p className={classes.price}>${props.wishList.price_cents}</p>

				<Button
					onClick={() => addProductToCart(props.wishList)}
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
					Add to Cart
				</Button>
				<Button
					onClick={() => removeFromWishList(props.wishList)}
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
					Remove from WishList
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

export default WishListPage;
