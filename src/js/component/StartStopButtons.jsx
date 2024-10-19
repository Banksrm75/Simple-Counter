import React from 'react';
import PropTypes from "prop-types";
import '../../styles/startStopButtons.css'
import '../index'

function start(){
    setIsRunning(true);


}

function stop(){
    setIsRunning(false);
}



const StartStopButtons = (props) => {
	return (
        <>
            <button type="button" onClick={() => {setIsRunning(true)}} className="btn btn-success">Start</button>
            <button type="button" onClick={() => {setIsRunning(false)}} className="btn btn-danger">Stop</button>
        </>
        
    );
}

StartStopButtons.propTypes = {
	isRunning: PropTypes.bool
}


export default StartStopButtons