import React, { useState } from 'react'

const EmployeeDetails = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleData = (e) => {
    e.preventDefault();
    console.log("Employee Details are: ", {name}, {email}, {password});
  }

  return (
    <>
    <h1>Employee Details</h1>
    <p>The name of the University is: {props.uni_name}</p>
    <p>The id of the employee is: {props.emp_id}</p>
    <p>Employee is working in the {props.emp_dept} department</p>
    <p>Employee is the master of {props.emp_course}</p>

    <ul>
        {Object.entries(props.marks).map(([key,value]) => (
            <li>
                <strong>{key}:</strong> {value}
            </li>
        ))}
    </ul>

    <div className='employee_details'>
        <form onSubmit={handleData}>
          <div>
            <span>Name:</span> <br/>
            <input type="text" id="name" placeholder='Enter Name' onChange={(e) => {setName(e.target.value)}}/>
          </div>
          <br/>
          <div>
            <span>Email:</span> <br/>
            <input type="email" id="email" placeholder='Enter Email' onChange={(e) => {setEmail(e.target.value)}}/>
          </div>
          <br/>
          <div>
            <span>Password:</span> <br/>
            <input type="password" id="password" placeholder='Enter Password' onChange={(e) => {setPassword(e.target.value)}}/>
          </div>
          <br/>
          <div>
            <button>
              Submit
            </button>
          </div>
        </form>
    </div>
    </>
  )
}

export default EmployeeDetails