// // import React, { useState } from 'react'
// import './Register.css'
// export const register = () => {

//   const [user, setUser] = useState({
//     name: "",
//     email: "",
//     password: "",
//     reEnterpassword: ""
//   })
//   const handlechande = (e) => {
//     // console.log(e.target)
//     const { name, value } = e.target
//     setUser({
//       ...user,
//       [name]: value
//     })
//   }
//   return (
//     <div className='register'>
//       <h1>Register</h1>
//       <input type="text" name="name" value={user.name} placeholder="Your Name" onChange={handlechande} /><br></br>
//       <input type="email" name="email" value={user.email} placeholder="Your Email" /><br></br>
//       <input type="password" name="password" value={user.password} placeholder="Your Password" onChange={handlechande} /><br></br>
//       <input type="password" name="reEnterpassword" value={user.reEnterpassword} placeholder="Enter your Re-Password" onChange={handlechande} /><br></br>
//       <div className="button">Register</div>
//       <div>or</div>
//       <div className="button">Login</div>

//     </div>
//   )
// }

// export default register;