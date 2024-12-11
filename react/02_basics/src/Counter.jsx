import React, { useState } from 'react'

const Counter = () => {
    // useState
    const[count, setCount] = useState(10)
    function handelAdd (){
        setCount(count + 1)
    }
    function handelMinus (){
        setCount(count-1)
    }
    return (
        <div>
            <h1>Counter</h1>

            <div>
                <button onClick={handelAdd}>Add{count}</button>
                <p >{count}</p>
                <button onClick={handelMinus}>Minus {count}</button>
            </div>
        </div>
    )
}

export default Counter
