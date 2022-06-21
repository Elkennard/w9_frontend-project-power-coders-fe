import React from "react";

const imageStyle = {
	padding: 0,
	height: "50px",
	display: "block",
};

function ProfilePicture() {
	return (
		<div className="Image">
			<img
				src={require("./profile-pic.jpg")}
				alt="Profile Picture"
				style={imageStyle}
			/>
		</div>
	);
}

export default ProfilePicture;
