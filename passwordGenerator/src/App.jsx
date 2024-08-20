import { useState, useCallback, useEffect, useRef, useMemo } from 'react'
// optimized way 
//how to target elements using hooks

// useState hook => useState is a React Hook that lets you add a state variable to your component
// const [state, setState] = useState(initialState)

function App() {
  //this all variables created using useState are going to be updated on the UI
  const [length, setLength] = useState(8) //to keep track of length
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  //useRef hook
  //first create a variable to use useRef hook
  //used to improve user experience
  //it gives reference of any element on the webpage and manipulate it
  const passwordRef = useRef(null)//no default value

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password)
  }, [password])
  //here i am able to use window access because of react as finally react is compiled in javascript and window object is present is javascript but in next.js due to server side rendering it is not available




  //useMemo and useCallback
  //whenever the page reloads for the first time all components are rendered once
  //when the state of a component is changed it is re-rendered
  //useCallback hook is used to optimize a function which us used again and again depending on the conditions
  // useCallback is a React Hook that lets you cache a function definition between re-renders.
  // const cachedFn = useCallback(fn, dependencies)
  // useMemo and useCallback hooks are for performance optimization of react application
  // consider a parent component and a child component 
  //when my parent component method is running my child component should not be re-rendered unneccesarily
  //for this problem useMemo hook can be used
  //useCallback scenario => i have created a function in parent component and passed as a prop in child component
  //when the page reloads function are recreated due to which again the component is re-rendered unneccesarily
  //when the dependencies change the component will be re-rendered else not
  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
      
    }

    setPassword(pass)


  }, [length, numberAllowed, charAllowed, setPassword])


  //when us page loads for the first time the function is called and then is any change is dependencies occur then  
  // it is called again
  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])



  return (
    
    <div className="w-full max-w-md px-4 py-3 mx-auto my-8 text-orange-500 bg-gray-800 rounded-lg shadow-xl">
      <h1 className='my-3 text-center text-white'>Password generator</h1>
    <div className="flex mb-4 overflow-hidden rounded-lg shadow">
        <input
            type="text"
            value={password}
            className="w-full px-3 py-1 outline-none"
            placeholder="Password"
            readOnly
            ref={passwordRef}//used for reference hook
        />
        <button
        onClick={copyPasswordToClipboard}
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        >copy</button>
        
    </div>
    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input 
        type="range"
        min={6}
        max={100}
        value={length}
         className='cursor-pointer'
         onChange={(e) => {setLength(e.target.value)}}
          />
          <label>Length: {length}</label>
      </div>
      <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          defaultChecked={numberAllowed}
          id="numberInput"
          onChange={() => {
              setNumberAllowed((prev) => !prev);
          }}
      />
      <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => {
                  setCharAllowed((prev) => !prev )
              }}
          />
          <label htmlFor="characterInput">Characters</label>
      </div>
    </div>
</div>
    
  )
}

export default App