import React from "react";
import { withRouter, NavLink } from "react-router-dom";

import "./menu-items.scss";

const MenuItem = props => {
	return (
		<div className={`${props.section.size} menu-item`}>
			<div
				className="background-image"
				style={{
					backgroundImage: `url(${props.section.imageUrl})`
				}}
			/>
			<div className="content">
				<NavLink exact to={`${props.section.title}`}>
					<h1 className="title">{props.section.title.toUpperCase()}</h1>
					<span className="subtitle">SHOP NOW</span>
				</NavLink>
			</div>
		</div>
	);
};

export default withRouter(MenuItem);
