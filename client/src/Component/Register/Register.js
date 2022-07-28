import React from 'react'
import './Register.css';

const Register = () => {
  return (
    <div className='Register'>
        <h1>Register</h1>
        <input type="text" placeholder="Enter your Name"></input>
        <input type="text" placeholder="Enter your Email"></input>
        <input type="password" placeholder="Enter your Password"></input>
        <input type="password" placeholder="Enter your Re-Password"></input>
        <div className='button'>Register</div>
        <div>or</div>
        <div className='button'>Login</div>
    </div>
  )
}

export default Register