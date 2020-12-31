import React from "react";
import ProfileCard from "./components/ProfileCard";
import "./App.css";

function App() {
	return (
		<div className="background">
			<div className="bg-pattern-top"></div>
			<div className="bg-pattern-bottom"></div>

			<ProfileCard
				name="Rita Correia"
				age="32"
				city="London"
				followers="80K"
				likes="803K"
				photos="1.4K"
			></ProfileCard>
		</div>
	);
}

export default App;
