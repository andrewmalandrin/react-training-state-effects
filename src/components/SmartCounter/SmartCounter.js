import React, { useState, useEffect } from "react";
import './SmartCounter.css'

function SmartCounter(){
    
    const [quantity, setQuantity] = useState(1)
    const [disableMinusButton, setDisableMinusButton] = useState(false)

   
    
    function down(){
        if (quantity > 0){
            
            if(quantity === 1){
                setDisableMinusButton(true)
            }
            setQuantity(quantity - 1)
        }   
    }

    function up(){
        if(quantity === 0){
            setDisableMinusButton(false)
        }
        setQuantity(quantity + 1)
    }
    

   
    return (
        <div className="smart-counter">
            <button onClick={down} className="minus-button" disabled={disableMinusButton}>-</button>
            <h1>{quantity}</h1>
            <button onClick={up}>+</button>
        </div>
    )
}

export default SmartCounter