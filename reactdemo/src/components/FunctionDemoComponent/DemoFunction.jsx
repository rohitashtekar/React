import React, { useState } from 'react'

const DemoFunction = () => {
    const[count,setCount] = useState(1);
    let fname = "Peter Parker";
    const counter = () => {
        setCount(count+1);
    }

    const reset = () => {
        setCount(count);
    }
    
    return (
    <>
    <h2>My name is {fname}</h2>
    <p>Total likes are: {count}</p>
    <button onClick={() => counter()}>Like</button>
    <button onclick={() => reset()}>Reset</button>
    </>
    )
}

export default DemoFunction