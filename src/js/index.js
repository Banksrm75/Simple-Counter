//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";

// include your styles into the webpack bundle
import "../styles/index.css";


//import your own components
import Home from "./component/home.jsx";

//render your react application
const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(<Home startNumber={startNumber} counter={counter}/>)

// const [isRunning, setIsRunning]  = useState(false);

function start(){
    setIsRunning(true);
    startTimeRef.current = Date.now() - elapsedTime;


}

function stop(){
    setIsRunning(false);
}





let isRunning = true;
let startNumber = 1000;
let counter = 0;


setInterval(function() {
    //render your react application
    if (isRunning) {
        root.render(<Home isRunning={isRunning} startNumber={startNumber} counter={counter}/>)
        counter++; 
        startNumber--; 
    }
        
}, 1000)







