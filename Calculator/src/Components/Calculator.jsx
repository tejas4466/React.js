import React, { useState } from 'react'

function Calculator() {
    const[value,setValue]=useState('')
 

  return (
    <div className='container w-4/5 p-10 mx-auto mt-20 sm:w-1/4 h-3/5 bg-inherit'>
        <div>
            <input type="text" className='w-full h-10 text-3xl font-bold text-right' value={value}/>
        </div>
        <div>
            <input type="button" value="AC" className='p-1 m-4 bg-blue-400 cursor-pointer sm:w-10 hover:bg-blue-200 hover:border-black'onClick={(e)=>{setValue("")}}/>
            <input type="button" value="DEL" className='p-1 m-4 bg-blue-400 cursor-pointer sm:w-10 hover:bg-blue-200 hover:border-black'onClick={(e)=>{setValue(value.slice(0,-1))}}/>
            <input type="button" value="." className='p-1 m-4 bg-blue-400 cursor-pointer sm:w-10 hover:bg-blue-200 hover:border-black'onClick={(e)=>{setValue(value+e.target.value)}}/>
            <input type="button" value="/"className='p-1 m-4 bg-blue-400 cursor-pointer sm:w-10 hover:bg-blue-200 hover:border-black' onClick={(e)=>{setValue(value+e.target.value)}}/>
        </div>
        <div>
         <input type="button" value="7" className='p-1 m-4 bg-blue-400 cursor-pointer sm:w-10 hover:bg-blue-200 hover:border-black'onClick={(e)=>{setValue(value+e.target.value)}}/>
            <input type="button" value="8" className='p-1 m-4 bg-blue-400 cursor-pointer sm:w-10 hover:bg-blue-200 hover:border-black'onClick={(e)=>{setValue(value+e.target.value)}}/>
            <input type="button" value="9" className='p-1 m-4 bg-blue-400 cursor-pointer sm:w-10 hover:bg-blue-200 hover:border-black'onClick={(e)=>{setValue(value+e.target.value)}}/>
            <input type="button" value="*" className='p-1 m-4 bg-blue-400 cursor-pointer sm:w-10 hover:bg-blue-200 hover:border-black'onClick={(e)=>{setValue(value+e.target.value)}}/>
        </div>
        <div>
        <input type="button" value="4"className='p-1 m-4 bg-blue-400 cursor-pointer sm:w-10 hover:bg-blue-200 hover:border-black' onClick={(e)=>{setValue(value+e.target.value)}}/>
            <input type="button" value="5" className='p-1 m-4 bg-blue-400 cursor-pointer sm:w-10 hover:bg-blue-200 hover:border-black'onClick={(e)=>{setValue(value+e.target.value)}}/>
            <input type="button" value="6" className='p-1 m-4 bg-blue-400 cursor-pointer sm:w-10 hover:bg-blue-200 hover:border-black'onClick={(e)=>{setValue(value+e.target.value)}}/>
            <input type="button" value="+" className='p-1 m-4 bg-blue-400 cursor-pointer sm:w-10 hover:bg-blue-200 hover:border-black'onClick={(e)=>{setValue(value+e.target.value)}}/>
        </div>
        <div>
        <input type="button" value="1"className='p-1 m-4 bg-blue-400 cursor-pointer sm:w-10 hover:bg-blue-200 hover:border-black' onClick={(e)=>{setValue(value+e.target.value)}}/>
            <input type="button" value="2" className='p-1 m-4 bg-blue-400 cursor-pointer sm:w-10 hover:bg-blue-200 hover:border-black'onClick={(e)=>{setValue(value+e.target.value)}}/>
            <input type="button" value="3" className='p-1 m-4 bg-blue-400 cursor-pointer sm:w-10 hover:bg-blue-200 hover:border-black'onClick={(e)=>{setValue(value+e.target.value)}}/>
            <input type="button" value="-" className='p-1 m-4 bg-blue-400 cursor-pointer sm:w-10 hover:bg-blue-200 hover:border-black'onClick={(e)=>{setValue(value+e.target.value)}}/>
        </div>
        <div>
        <input type="button" value="00" className='p-1 m-4 bg-blue-400 cursor-pointer sm:w-10 hover:bg-blue-200 hover:border-black'onClick={(e)=>{setValue(value+e.target.value)}}/>
            <input type="button" value="0" className='p-1 m-4 bg-blue-400 cursor-pointer sm:w-10 hover:bg-blue-200 hover:border-black'onClick={(e)=>{setValue(value+e.target.value)}}/>
            <input type="button" value="=" className='p-1 m-4 bg-blue-400 cursor-pointer sm:w-28 hover:bg-blue-200 hover:border-black'onClick={(e)=>{setValue(eval(value))}}/>
        </div>
    </div>
  )
}

export default Calculator
