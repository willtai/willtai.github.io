import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<a href="https://truelayer.com" className="work-link">
							<div className="work">
								<img
									src="./truelayer.png"
									alt="truelayer"
									className="work-image"
								/>
								<div className="work-title">TrueLayer</div>
								<div className="work-subtitle">
									Machine Learning Engineer
								</div>
							</div>
						</a>

						<a href="https://converge.io" className="work-link">
							<div className="work">
								<img
									src="./converge.png"
									alt="converge"
									className="work-image"
								/>
								<div className="work-title">Converge</div>
								<div className="work-subtitle">
									Data Scientist
								</div>
							</div>
						</a>

						<div className="work">
							<img
								src="./alphai.png"
								alt="alpha-i"
								className="work-image"
							/>
							<div className="work-title">Alpha-i</div>
							<div className="work-subtitle">
								Machine Learning Engineer
							</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
