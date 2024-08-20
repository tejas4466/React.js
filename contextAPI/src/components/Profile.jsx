import React, { useState } from 'react'
import { useContext } from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    // const {user}=useContext(UserContext)
    // if(!user) return <div>Please Login</div>
    const {user}=useContext(UserContext)
    // return <div>Welcome {user.username} </div>
    if(user){
    return <div>Your name is {user.input}</div>
    }

}

export default Profile
