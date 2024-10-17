//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";

// include your styles into the webpack bundle
import "../styles/index.css";


//import your own components
import Home from "./component/home.jsx";

//render your react application
const root = ReactDOM.createRoot(document.getElementById('app'));


let startNumber = 1000;
let counter = 0;
setInterval(function() {
    //render your react application
    root.render(<Home startNumber={startNumber} counter={counter}/>)
    counter++; 
    startNumber--;   
}, 1000)





