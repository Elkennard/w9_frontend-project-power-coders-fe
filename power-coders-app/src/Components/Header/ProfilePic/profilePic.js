import React from "react";
import "./profilePic.css";

function ProfilePicture() {
  return (
    <img
      className="profilePicImage"
      src="/media/images/profilePic.jpg"
      alt="Currently logged in users face"
    />
  );
}

export default ProfilePicture;
