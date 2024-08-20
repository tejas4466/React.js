import React from 'react'
import { useState ,useContext } from 'react'
import UserContext from '../context/UserContext'
//useContext helps to fetch value from UserContext  



function Login() {
    // const[username,setUsername]=useState('')
    // const[password,setPassword]=useState('')
    // const {setUser}=useContext(UserContext)
    const[input,setInput]=useState('')
    const {setUser} =useContext(UserContext)

    // const handleSubmit=(e)=>{
    //     e.preventDefault()
    //     setUser({username,password})
    // }

    const handleSubmit=(e)=>{
        e.preventDefault()
        setUser({input})
    }

  return (
    <div>
      <h2>Login</h2>
      {/* <input type="text" value={username} onChange={(e)=>{setUsername(e.target.value)}} placeholder='username' />
      {"     "} 
      <input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder='password' />
      {"     "}

      <button onClick={handleSubmit}>Submit</button> */}
      <label htmlFor="name">Enter your Name:</label>
      <input type="text" name="name" id="name" value={input} onChange={(e)=>{setInput(e.target.value)}}/>
      <input type="submit" value="Submit" onClick={handleSubmit} />
    </div>
  )
}

export default Login

// {"      "} => to generate space 