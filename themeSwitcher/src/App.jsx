import { useEffect, useState } from 'react'
import Themebtn from './components/Themebtn'
import Card from './components/Card'
import { ThemeProvider } from './contexts/theme'



function App() {
const[themeMode,setThememMode]=useState("light")



  //only access of lightTheme and darkTheme method i have but vo methods kya krte he ye muje nhi pata
  //if I define methods of same name like them then automatically the functionality goes in them
  const lightTheme=()=>{
    setThememMode("light")
  }
  const darkTheme=()=>{
    setThememMode("dark")
  }

  //actual change in theme

  useEffect(()=>{
    //agar class ke andar intial value ko remove kro
    document.querySelector('html').classList.remove("light","dark")
    document.querySelector('html').classList.add(themeMode)

  },[themeMode])



  return (
      <ThemeProvider value={{themeMode,lightTheme,darkTheme}}>
<div className="flex flex-wrap items-center min-h-screen">
                <div className="w-full">
                    <div className="flex justify-end w-full max-w-sm mx-auto mb-4">
                      <Themebtn></Themebtn>
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                      <Card></Card>
                    </div>
                </div>
            </div>
            </ThemeProvider>
  )
}

export default App
