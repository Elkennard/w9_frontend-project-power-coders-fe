import React from "react";
import "./profile.css"

const imageStyle = {
	padding: 0,
	height: "50px",
	display: "block",
};

function ProfilePicture() {
	return (
		<div >
			<img
				className="Image"
				src={require("./profile-pic.jpg")}
				alt="Profile of individual"
				style={imageStyle}
			/>
		</div>
	);
}

export default ProfilePicture;
