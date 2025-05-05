import React from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Categories from './Components/Categories'
import Welcome from './Components/Welcome'
import Toprated from './Components/Toprated'


import { Outlet,useLocation } from 'react-router-dom'





function App() {

  const location=useLocation();

  const isHome=location.pathname==='/';
 

  return (
    <>
    <Navbar/>
   
    
    {isHome && <Welcome />}

   
   
  
   <Outlet/>
   {isHome && <Categories />}
   {isHome && <Toprated />}


 

   
    
    
    </>
  )
}

export default App
