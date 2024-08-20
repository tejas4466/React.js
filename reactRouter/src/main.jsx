import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'
import Home from './components/Home/Home.jsx'

import About from './components/About/About.jsx'
import { Route, RouterProvider,createBrowserRouter,createRoutesFromElements} from 'react-router-dom'
import Layout from './Layout.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github from './components/Github/Github.jsx'
import { githubInfoLoader } from './components/Github/Github.jsx'
//react router dom => third party library

//How to create a router
//i want header and footer to be same aur uske andar ke componenet change hote rhe
// const router=createBrowserRouter([
//   {
//     path:'/',//slash is a top level element iske andar nesting ho rhi he.path will render element
//     element:<Layout/>,
//     //nesting routes
//     children:[
//       {
//         path:"",
//         element:<Home/>
//       },
//       {
//         path:"about",
//         element:<About/>
//       },
//       {
//         path:"contact",
//         element:<Contact/>
//       },
//     ]
//   }
// ])

//one more way to create router
const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/'element={<Layout/>}>
    <Route path='' element={<Home/>}/>
    <Route path='about' element={<About/>}/>
    <Route path='contact'element={<Contact/>}/>
    <Route path='user/:userid'element={<User/>}/>
    {/* :userid is used to take dynamic values from URL  */}
    <Route path='github'element={<Github/>} loader={githubInfoLoader}/>
    {/* loader helps to make optimizations.whenever github link will be hovered on webpage data fetching from api will start in the backend and will be kept in the cache memory and whenever the user will click on the link data will be already fetched.It is more quicker than useEffect */}

    </Route>
  )
)







ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
