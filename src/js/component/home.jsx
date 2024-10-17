import React from "react";
import calculatePlaceValues from "../../lib/CalcPlaceValues.js"
import SecondsCounter from "./SecondsCounter.jsx";
import HundredSecondsAlert from "./HundredSecondsAlert.jsx"





//create your first component
const Home = (props) => {
	return (
		<>
			<HundredSecondsAlert 
			onesDigit = {calculatePlaceValues(props.counter, 1)}
			tensDigit = {calculatePlaceValues(props.counter, 10)}
			hundredsDigit = {calculatePlaceValues(props.counter, 100)}
			/>
			<SecondsCounter 
				onesDigit = {calculatePlaceValues(props.counter, 1)}
				tensDigit = {calculatePlaceValues(props.counter, 10)}
				hundredsDigit = {calculatePlaceValues(props.counter, 100)}
				thousandsDigit = {calculatePlaceValues(props.counter, 1000)}
			/>
			
		</>
		
	);
};

export default Home;
