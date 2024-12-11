import React from 'react'
import { useState } from 'react'

const Background = () => {


    const [color, setColor] = useState("white");

    function handelRed() {
        setColor("red")
    }

    return (
    <div id='container' style={{width:"100%", height:"100vh", backgroundColor: color }}>
        <div>
            <button style={{backgroundColor:"red"}} onClick={handelRed}>red</button>
        </div>
    </div>
    )
}

export default Background
