import React from 'react';
import PropTypes from "prop-types";

const HundredSecondsAlert = (props) => {
	if(props.hundredsDigit === 1 && props.tensDigit === 0 && props.onesDigit === 0) {
        return window.alert("You have been staring at the screen for 100 seconds!")
    }
        
}

HundredSecondsAlert.propTypes = {
	onesDigit: PropTypes.number,
	tensDigit: PropTypes.number,
	hundredsDigit: PropTypes.number
}


export default HundredSecondsAlert