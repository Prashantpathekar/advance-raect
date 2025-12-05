import React from 'react' 
import "./tailwind.css"
import { Outlet ,Link} from 'react-router-dom'
const Layout = () => {
  return (
    <>
    <header className='w-full flex h-18 justify-around items-center  border-2 bg-gray-950 text-amber-50'>
                <nav>
                    <ul className='flex-gap-10 font-bold text-2xl  sm:flex gap-5 hidden '>
                        <li><Link to="/home" className='p-4 hover:bg-green-600'>home</Link></li>
                        <li><Link to="/about" className='p-4 hover:bg-green-600'>about</Link></li>
                        <li><Link to="/services" className='p-4 hover:bg-green-600'>services</Link></li>
                        <li><Link to="/contact" className='p-4 hover:bg-green-600'>contact</Link></li>
                        <li><Link to="/shreya" className='p-4 hover:bg-pink-600 -600'>Shreya</Link></li>
                         <li><Link to="/prashant" className='p-4 hover:bg-pink-600 -600'>prashant</Link></li>
                        {/* <img src="vite.svg" alt="" />
                        <img src="vite.svg" alt="" /> */}
                   
                        
                        
         </ul>
        </nav> 
             <button className='hover:bg-amber-400 border p-2 rounded-2xl text-blue-400 bg-amber-400 font-bold outline-black'>Login</button>
             </header>

                 <div className='h-5 '>
                  <img src="photo1.webp" alt="" />
                  </div>
      <Outlet />
    </>
  )
}
export default Layout
