import React, { useState } from "react";

export const ProfileCard = (props) => {
	// const [sideA, setSideA] = useState({
	// 	name: "",
	// 	title: "",
	// 	background: "",
	// 	profile: "",
	// });

	// const [sideB, setSideB] = useState({
	// 	mbti: "",
	// 	enneagram: "",
	// 	moral: "",
	// 	character: "",
	// 	hogwarts: "",
	// });

	// const [currentSide, setCurrentSide] = useState("A");

	// const flipCard = () => {
	// 	setCurrentSide(currentSide === "A" ? "B" : "A");
	// };

	// const renderSideA = () => (
	// 	<div style={{ backgroundImage: `url(${sideA.background})` }}>
	// 		<img src={sideA.profile} alt="profile" />
	// 		<h1>{sideA.name}</h1>
	// 		<p>{sideA.title}</p>
	// 	</div>
	// );

	// const renderSideB = () => (
	// 	<div>
	// 		<p>MBTI: {sideB.mbti}</p>
	// 		<p>Enneagram: {sideB.enneagram}</p>
	// 		<p>Moral Alignment: {sideB.moral}</p>
	// 		<p>Character Archetype: {sideB.character}</p>
	// 		<p>Hogwarts House: {sideB.hogwarts}</p>
	// 	</div>
	// );

	return (
		// <div onClick={flipCard}>
		// 	{currentSide === "A" ? renderSideA() : renderSideB()}
		// </div>
		<div className="scene">
			<label className="card-wrap">
				<input type="checkbox" className="flipcard" />
				<div className="card">
					<div className="front card-face">
						<img
							src="https://images.unsplash.com/photo-1517374148673-a38e9dd4fe6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
							alt=""
							className="card-photo"
						/>
					</div>
					<div className="back card-face">
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
					</div>
				</div>
			</label>
			<label className="card-wrap">
				<input type="checkbox" className="flipcard" />
				<div className="card">
					<div className="front card-face">
						<img
							src="https://images.unsplash.com/photo-1531518326825-96490ddf2a89?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
							alt=""
							className="card-photo"
						/>
					</div>
					<div className="back card-face">
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
					</div>
				</div>
			</label>
			<label className="card-wrap">
				<input type="checkbox" className="flipcard" />
				<div className="card">
					<div className="front card-face">
						<img
							src="https://images.unsplash.com/photo-1529911194209-8578109840df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
							alt=""
							className="card-photo"
						/>
					</div>
					<div className="back card-face">
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
					</div>
				</div>
			</label>
		</div>
	);
};
