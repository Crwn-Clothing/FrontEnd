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
const JacketsPage = props => {
	const renderGrids = () => {
		return (
			<Grid spacing={3} item xs={2}>
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
