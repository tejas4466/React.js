import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'


function Github() {
    const data=useLoaderData()
    console.log(data);
    // const[data,setData]=useState([])
    // //api call me taab krna chahunga jb mera yr component load (mount) ho
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/tejas4466')
    //     .then((res)=>res.json())
    //     .then((data)=>{
    //         setData(data)
    //     })
    // },[])
  return (
    <div className='text-4xl text-center bg-gray-400 h-[40rem] space-y-4'>
      <h1>Github Profile</h1>

      <img src={data.avatar_url} alt="Profile Image" width={300} className='inline-block' />
      <h3>Name: {data.name}</h3>
      <h3>Username: {data.login}</h3>
      <h3>Followers: {data.followers}</h3>
      <h3>Following: {data.following}</h3>
    </div>
  )
}

export default Github

export const githubInfoLoader = async()=>{
    
    const response=await fetch('https://api.github.com/users/tejas4466')
    return response.json()

}