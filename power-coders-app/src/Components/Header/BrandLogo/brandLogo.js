import React from "react";
import "./brand.css"
const imageStyle = {
	margin: "0 auto",
	padding: 0,
	width: "80px",
	height: "80px",
	display: "block",
};

function BrandLogo(props) {
	return (
		<div className={props.class}>
		<h1 className='h1title'>Wellbeing Toolkit</h1>
			<img
				src={require("./soc-logo.png")}
				alt="School of Code logo"
				style={imageStyle}
			/>
		</div>
	);
}

export default BrandLogo;
