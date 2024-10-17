import React from 'react';
import PropTypes from "prop-types";
import '../../styles/secondsCounter.css'
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
            <button type="button" onClick={start(props.isRunning)} class="btn btn-success">Start</button>
            <button type="button" onClick={stop(props.isRunning)} class="btn btn-danger">Stop</button>
        </>
        
    );
}

StartStopButtons.propTypes = {
	isRunning: PropTypes.bool
}


export default StartStopButtons