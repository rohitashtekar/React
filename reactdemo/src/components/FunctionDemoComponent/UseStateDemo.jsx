import React, { useState } from 'react'

const UseStateDemo = () => {

    const [show, setShow] = useState();

    return (
        <>
        <h1>useState Demo</h1>
        <button onClick={() => setShow(!show)}>
            {show?"Hide":"Show"} Text
        </button>
        {show && <p>This is toggle example</p>}
        </>
    )
}

export default UseStateDemo