import React, { useState } from "react";
import './Counter.css';


function Counter (){
    //let quantity = 10

    let [quantity, setQuantity] = useState(10)

    function upQuantity(){
        setQuantity(quantity + 1)
        console.log(quantity + 1)
    }
    
    return(
        
        <div className="counter">
            <h1>{quantity}</h1>
            <button onClick={upQuantity}>+</button>
        </div>
    )
}

export default Counter