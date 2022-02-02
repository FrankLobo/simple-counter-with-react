//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
// include your styles into the webpack bundle
// import "../styles/index.css";

//import your own components
import Counter from "./component/counter.jsx";

Counter.propTypes = {
	digitSix: PropTypes.number,
	digiFive: PropTypes.number,
	digitFour: PropTypes.number,
	digitThree: PropTypes.number,
	digitTwo: PropTypes.number,
	digitOne: PropTypes.number,
};
//render your react application
let countingNumber = 0;
setInterval(function () {
	let six = Math.floor(countingNumber / 100000);
	let five = Math.floor(countingNumber / 10000);
	let four = Math.floor(countingNumber / 1000);
	let three = Math.floor(countingNumber / 100);
	let two = Math.floor(countingNumber / 10);
	let one = Math.floor(countingNumber / 1);
	countingNumber++;
	ReactDOM.render(
		<Counter
			digitOne={one}
			digitTwo={two}
			digitThree={three}
			digitFour={four}
			digitFive={five}
			digitSix={six}
		/>,
		document.querySelector("#app")
	);
}, 1000);
