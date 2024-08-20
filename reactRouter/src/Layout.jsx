import React from 'react'
import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'
import Home from './components/Home/Home.jsx'
import { Outlet } from 'react-router-dom'
//Outlet keeps the remaining things same and where the outlet is passed only there changes take place

function Layout() {
  return (
    <>
      <Header/>
    {/* i want pass here things dynamically for this thing react router dom gives an interesting thing called Outlet*/}
      <Outlet/>
      <Footer/>
    </>
  )
}

export default Layout
