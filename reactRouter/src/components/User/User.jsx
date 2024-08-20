import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid}=useParams()
  return (
  
    <div className='p-4 text-3xl text-center bg-gray-400 h-[4rem] w-[30rem] mx-auto'>
        User:{userid}</div>
  )
}

export default User
