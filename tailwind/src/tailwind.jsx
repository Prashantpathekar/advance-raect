import './tailwind.css'
import img from './assets/1.webp'
import { AiFillAlert } from "react-icons/ai";

const tailwind =()=>{
    return(
        <>
        {/* response => 0.640 px => by default
         1.025 px=> sm:flex tablet
         1.280 px=> md:flex laptop 
          react icoms icons ki website
          
          virtul dom use krta hai isliey easy ho jata hai */}
         <header className='w-full flex h-18 justify-around items-center  border-2 bg-gray-950 text-amber-50'>
                <img src={img} alt="logo" className='w-20 h-20 rounded-full'/>
            <nav>
                <ul className='flex gap-10 font-bold text-2xl  sm:flex gap-5 hidden '>
                    <li className='p-4 hover:bg-green-600'>home</li>
                    <li className='p-4 hover:bg-green-600'>about</li>
                    <li className='p-4 hover:bg-green-600'>services</li>
                    <li className='p-4 hover:bg-green-600'>contact</li>
                    <li className='p-4 hover:bg-pink-600 -600'>shreya</li>
                     <li className='p-4 hover:bg-pink-600 -600'>prashant</li>
    
                <img src="vite.svg" alt="" />
     </ul>
                </nav> 
         <button className='hover:bg-amber-400 border p-2 rounded-2xl text-blue-400 bg-amber-400 font-bold outline-black'>Login</button>
         </header>
        </>
    )
}

export default tailwind