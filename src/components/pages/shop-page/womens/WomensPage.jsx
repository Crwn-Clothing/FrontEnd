import React from "react";
import { Grid, makeStyles } from "@material-ui/core";

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
		marginLeft: "140px",
		textAlign: "center"
	},
	price: {
		marginLeft: "150px",
		textAlign: "center"
	},
	paper: {
		padding: theme.spacing(2),
		textAlign: "center",
		color: theme.palette.text.secondary
	}
}));
const WomensPage = props => {
	const renderGrids = () => {
		return (
			<Grid spacing={3} item xs={2}>
				<img
					className={classes.image}
					src={props.women.imageUrl}
					alt={props.women.name}
				/>
				<p className={classes.name}>{props.women.name}</p>
				<p className={classes.price}>${props.women.price_cents}</p>
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

export default WomensPage;
