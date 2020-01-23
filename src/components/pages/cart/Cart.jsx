import React from "react";
import { Grid, makeStyles, Button } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
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
const CartPage = props => {
	const dispatch = useDispatch();
	const userCart = useSelector(state => state.cart.userCart);
	const removeProduct = item => {
		let removedItem = userCart.filter(product => product !== item);
		dispatch(cartActions.removeProductFromCart(removedItem));
	};

	const renderGrids = () => {
		return (
			<Grid spacing={3} item xs={2}>
				<img
					className={classes.image}
					src={props.cartItem.imageUrl}
					alt={props.cartItem.name}
				/>
				<h4 className={classes.name}>{props.cartItem.name}</h4>
				<p className={classes.price}>${props.cartItem.price_cents}</p>

				<Button
					onClick={() => removeProduct(props.cartItem)}
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
					Remove From Cart
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

export default CartPage;
