import { useState } from 'react'
// import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContext from './context/UserContext'

function App() {
  const[user,setUser]=useState('')
  return (
    <UserContext.Provider value={{user,setUser}}> 
    <h1>Hello React!</h1>
    <Login/>{/*data kis tarahe se send hota he*/}
    <Profile/>{/*data kis tarahe access hota he*/}
    </UserContext.Provider>
  )
}

export default App
