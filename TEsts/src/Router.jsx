import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Home.jsx'
import About from './About.jsx'
import Contact from './Contact.jsx'
const Router = () => {
  return (
    <>
      <Routes>
  <Route path="/" element={<Layout/>}>
         <Route index element={<Home/>}/>  
        <Route path='about' element={<About/>}/>
        <Route path='Contact' element={<Contact/>}/>          
        </Route>
      </Routes>

    </>
  )
}

export default Router
