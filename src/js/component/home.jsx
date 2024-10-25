import React from "react";
import calculatePlaceValues from "../../lib/CalcPlaceValues.js"
import SecondsCounter from "./SecondsCounter.jsx";
import HundredSecondsAlert from "./HundredSecondsAlert.jsx"
import Countdown from "./Countdown.jsx";
import StartStopButtons from "./StartStopButtons.jsx";


//create your first component
const Home = (props) => {
	return (
		<>
			
			<div className="label">COUNTDOWN TIMER:</div>
			<Countdown 
				onesDigit = {calculatePlaceValues(props.startNumber, 1)}
				tensDigit = {calculatePlaceValues(props.startNumber, 10)}
				hundredsDigit = {calculatePlaceValues(props.startNumber, 100)}
				thousandsDigit = {calculatePlaceValues(props.startNumber, 1000)}
			/> 
			{/* <StartStopButtons /> */}
			<div className="label">STOPWATCH:</div>
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
