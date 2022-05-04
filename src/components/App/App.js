import React from "react";
import './App.css'

import Counter from "../Counter/Counter";
import SmartCounter from "../SmartCounter/SmartCounter";

function App (){

    return(
        <div className="app">
            
            <h1>My name is Andrew Malandrin, Hello World!</h1>
            <p>Counter example:</p>
            <SmartCounter/>
        </div>
    )
}



export default App