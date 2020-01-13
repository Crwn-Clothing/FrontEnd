import React from "react";
import { NavLink } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { SocialIcon } from "react-social-icons";

import "./footer.scss";

export const Footer = () => {
	return (
		<div>
			<div>
				<ul className="nav-bar">
					<li>
						<NavLink exact to="/">
							Products
						</NavLink>
					</li>
					<li>
						<NavLink exact to="/mens">
							About Us
						</NavLink>
					</li>
					<li>
						<NavLink exact to="/womens">
							Company
						</NavLink>
					</li>
					<li>
						<NavLink exact to="/">
							Help
						</NavLink>
					</li>
					<div id="social-media-icons">
						<li>
							<Button>
								<SocialIcon
									url="https://www.facebook.com/"
									style={{ height: "25px", width: "20px" }}
								/>
							</Button>
						</li>

						<li>
							<Button>
								<SocialIcon
									url="https://www.instagram.com/"
									style={{ height: "25px", width: "20px" }}
								/>
							</Button>
						</li>
						<li>
							<Button>
								<SocialIcon
									url="https://www.twitter.com/"
									style={{ height: "25px", width: "20px" }}
								/>
							</Button>
						</li>
						<li>
							<Button>
								<SocialIcon
									url="https://www.linkedin.com/"
									style={{ height: "25px", width: "20px" }}
								/>
							</Button>
						</li>
					</div>
				</ul>
			</div>
		</div>
	);
};
