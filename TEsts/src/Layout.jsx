import React from 'react'
import { Link,Outlet } from 'react-router-dom'
const Layout = () => {
  return (
    <>
       <header className='w-full flex h-18 justify-around items-center  border-2 bg-gray-950 text-amber-50'>
                <nav>
                    <ul className='flex-gap-10 font-bold text-2xl  sm:flex gap-5 hidden '>
                      
                        <li><Link to="/home" className='p-4 hover:bg-green-600 md:justify-center'>home</Link></li>
                        <li><Link to="/about" className='p-4 hover:bg-green-600'>about</Link></li>
                        <li><Link to="/contact" className='p-4 hover:bg-green-600'>contact</Link></li>
                       </ul>
        </nav> 
             </header>
         <Outlet/>

    </>
  )
}

export default Layout
