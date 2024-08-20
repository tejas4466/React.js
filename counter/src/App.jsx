import { useState } from 'react'//hooks
import './App.css'
//react controls UI updation  

function App() {
 let [counter,setCounter]=useState(16)//propagates changes everywhere in the DOM tree where counter is printed
// let counter=16;

const addValue = () => {
  setCounter(counter+1)
  // if(counter==20){
  //   alert("Counter value cannot be futher added")
  //   setCounter(counter)
  // }
  // react interview question
  // setCounter(counter+1)
  // setCounter(counter+1)
  // setCounter(counter+1)
  //this are bunch of packages
  // output=>it adds only one value yet we have made 4 requests because react creates a bunch where same thing are to be updated

  setCounter(prevCounter => prevCounter +1)
  setCounter(prevCounter => prevCounter +1)
  setCounter(prevCounter => prevCounter +1)
  //this are not now bunch of packages
  // now the value will be increased by 4 as setCounter has a special functionality called callbacks which are updated after one call is completed ek call complete hone ke baad agla call call hota he.this is nothing but state propagation
}
const removeValue= () => {
  setCounter(counter-1)
  // if(counter<=0){
  //   alert("Counter value cannot be negative")
  //   setCounter(counter)
  // }
}
  return (
    <>
     <h1>Counter using React</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <br /><br/>
      <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
