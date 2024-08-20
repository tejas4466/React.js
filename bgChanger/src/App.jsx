import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
  const [color, setColor] = useState("olive")

  return (
    
      <div className='w-full h-screen duration-200'
      style={{backgroundColor:color}}>
        <div className='fixed inset-x-0 flex flex-wrap justify-center px-2 bottom-12'>
          <div className='flex flex-wrap justify-center gap-10 px-3 py-2 bg-white shadow-lg rounded-3xl'>
            <button onClick={()=>setColor("red")}className='px-4 py-1 text-white rounded-full shadow-lg outline-none'
            style={{backgroundColor:"red"}}>Red</button>
            <button onClick={()=>setColor("green")}className='px-4 py-1 text-white rounded-full shadow-lg outline-none'
            style={{backgroundColor:"green"}}>Green</button>
            <button onClick={()=>setColor("blue")}className='px-4 py-1 text-white rounded-full shadow-lg outline-none'
            style={{backgroundColor:"blue"}}>Blue</button>
            <button onClick={()=>setColor("lavender")}className='px-4 py-1 rounded-full outline-none text-blacpink-lg'
            style={{backgroundColor:"lavender"}}>Lavender</button>
            <button onClick={()=>setColor("black")}className='px-4 py-1 text-white rounded-full shadow-lg outline-none'
            style={{backgroundColor:"black"}}>black</button>
            <button onClick={()=>setColor("white")}className='px-4 py-1 text-black rounded-full shadow-lg outline-none'
            style={{backgroundColor:"white"}}>white</button>
            <button onClick={()=>setColor("yellow")}className='px-4 py-1 text-white rounded-full shadow-lg outline-none'
            style={{backgroundColor:"yellow"}}>yellow</button>
            <button onClick={()=>setColor("orange")}className='px-4 py-1 text-white rounded-full shadow-lg outline-none'
            style={{backgroundColor:"orange"}}>orange</button>
            <button onClick={()=>setColor("pink")}className='px-4 py-1 text-white rounded-full shadow-lg outline-none'
            style={{backgroundColor:"pink"}}>pink</button>
            <button onClick={()=>setColor("skyblue")}className='px-4 py-1 text-white rounded-full shadow-lg outline-none'
            style={{backgroundColor:"skyblue"}}>skyblue</button>
          </div>
        </div>
      </div>
    
  )
}

export default App
