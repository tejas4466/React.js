import { useState } from 'react'
import Calculator from './Components/Calculator'


function App() {
const bgContainer={
  backgroundImage:'url("https://img.freepik.com/premium-photo/calculator-pen-blue-background_220873-9932.jpg?w=1380")',
  backgroundSize:'cover',
  backgroundPosition:'center',
  height:'100vh'
}
  return (
    <div className='w-full h-screen bg-black bg-no-repeat' style={bgContainer}>
    <h1 className='block pt-10 mx-auto font-sans text-4xl font-bold text-center text-black sm:text-6xl'>Your Personal Calculator</h1>
    <Calculator/>
    </div>
  )
}

export default App
