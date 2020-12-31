import React from "react";
import "./ProfileCard.css";
import avatar from "../images/image-rita.png";

function ProfileCard(props) {
	return (
		<div className="card-container">
			<header>
				<img src={avatar} alt={props.name} />
			</header>
			<h1>
				{props.name} <span className="age">{props.age}</span>
			</h1>
			<h2>{props.city}</h2>
			<div className="social-container">
				<div className="followers">
					<h1>{props.followers}</h1>
					<p>Followers</p>
				</div>
				<div className="likes">
					<h1>{props.likes}</h1>
					<p>Likes</p>
				</div>
				<div className="photos">
					<h1>{props.photos}</h1>
					<p>Photos</p>
				</div>
			</div>
		</div>
	);
}

export default ProfileCard;
