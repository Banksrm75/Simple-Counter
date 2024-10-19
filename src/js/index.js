// React
import React, {useState} from "react";
import ReactDOM from "react-dom/client";

// Components
import Home from "./component/home.jsx";
import StartStopButtons from "./component/StartStopButtons.jsx";



//Create root and INITIAL RENDER with buttons
const root = ReactDOM.createRoot(document.getElementById('app'));
// root.render(
//     <Home startNumber={startNumber} counter={counter}/>,
//     <StartStopButtons />
// )


//FUNCTIONS
function start(){
    setIsRunning(true);
    startTimeRef.current = Date.now() - elapsedTime;


}

function stop(){
    setIsRunning(false);
}



// VARIABLES
// const [isRunning, setIsRunning]  = useState(true);
let isRunning = true;
let startNumber = 1000;
let counter = 0;


setInterval(function() {
    //Update variables and Re-render root every second 
    if (isRunning) {
        root.render(
            <Home startNumber={startNumber} counter={counter}/>,
        <StartStopButtons />)
                counter++; 
                startNumber--; 
    }
    else {
        
    }
        
}, 1000)







