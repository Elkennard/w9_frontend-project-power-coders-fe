import React from "react";

const imageStyle = {
	margin: "0 auto",
	padding: 0,
	width: "100px",
	height: "100px",
	display: "block",
};

function BrandLogo() {
	return (
		<div className="Image">
		<h1>Wellbeing Toolkit</h1>
			<img
				src={require("./soc-logo.png")}
				alt="School of Code logo"
				style={imageStyle}
			/>
		</div>
	);
}

export default BrandLogo;
