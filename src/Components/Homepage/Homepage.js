import React from 'react'
import { NavLink } from 'react-router-dom'
import './Homepage.css'
export const homepage = () => {
  return (
    <div className='homepage'>
        <h1>Hello Homepage</h1>
        {/* <NavLink to="../Login/Login"></NavLink> */}
        <div className='button'>Logout</div>
    </div>
  )
}

export default homepage;
