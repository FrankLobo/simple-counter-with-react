import React from "react";
//include images into your bundle
// import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/index.css";

//create your first component
const Counter = (props) => {
	return (
		<div className="main-counter">
			<div className="clock-calendar">
				<i className="far fa-clock"></i>
			</div>
			<div className="six">{props.digitSix % 10}</div>
			<div className="five">{props.digitFive % 10}</div>
			<div className="four">{props.digitFour % 10}</div>
			<div className="three">{props.digitThree % 10}</div>
			<div className="two">{props.digitTwo % 10}</div>
			<div className="one">{props.digitOne % 10}</div>
		</div>
	);
};
export default Counter;
