
import React, {useState} from "react"

import "./CountButton.css"

const CountButton = (props) => {
    console.log(props)
    // registering current count with react
    const [currentCount,setCurrentCount] = useState(0)

    const handleClick = () =>{
        setCurrentCount(currentCount + props.incrementBy)
    }

    const buttonStyle = {
        background: props.buttonColor,
        borderRadius:"10px",
    }
    
    return (
    <div>
        <hr/>
        <button style={buttonStyle} onClick={handleClick}>Increment By +{props.incrementBy}</button>
        <div className="counter-display">{currentCount}</div>
    </div>
    )
}

export default CountButton;
