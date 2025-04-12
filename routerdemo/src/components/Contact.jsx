import React, { useState } from 'react'
import './components.css'

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleData = (e) => {
    e.preventDefault();
    console.log("Employee Details are: ", {name}, {email}, {password});
  }

  return (
    <>
    <div style={{textAlign: "center", backgroundColor: '#f8f9fa', padding: '20px 0'}}>
        <h1>Contact us for Queries about Plants</h1>
    </div>
    <div className='customer_details'>
        <form onSubmit={handleData}>
          <div>
            <input type="text" id="name" placeholder='Enter Name' onChange={(e) => {setName(e.target.value)}}/>
          </div>
          <br/>
          <div>
            <input type="email" id="email" placeholder='Enter Email' onChange={(e) => {setEmail(e.target.value)}}/>
          </div>
          <br/>
          <div>
            <input type="text" id="query" placeholder='Enter Query' onChange={(e) => {setPassword(e.target.value)}}/>
          </div>
          <br/>
          <div className='submit_btn_container'>
            <button>
              Submit
            </button>
          </div>
        </form>
    </div>
    </>
  )
}

export default Contact