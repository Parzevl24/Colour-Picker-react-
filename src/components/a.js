

import React,{useState} from 'react'

function Colorpicker(props){
    const [message, setMessage] = useState('');
    const [backgroundColor, setBackgroundColor] = useState('white')
    const handleClick = () => {
        // setMessage(`Button clicked! Color is ${props.color}`);
        setBackgroundColor(`${props.color}`)
    };
    // const colors = ["blue", "green", "orange", "melon"];
    
    const squareButton = {
        height:"50px",
        width:"50px",
        marginTop:"110px",
        marginLeft:"10px",
        float:"left",
        backgroundColor:props.color
    }
    const colorArray = props.color.map((rang, index) => (
    <button 
    key ={index}
    style={squareButton}>{rang}</button>))
    
    const backgroudScreen = {
        backgroundColor: backgroundColor,
        minHeight: "100vh"
    }
    return <div style={backgroudScreen}>
        {/* <button style={squareButton} onClick={handleClick}></button> */}
        <ul>{colorArray}</ul>
        <p>{message}</p>
    </div>
}

export default Colorpicker;


