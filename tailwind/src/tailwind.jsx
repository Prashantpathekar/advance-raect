import './tailwind.css'
import img from './assets/1.webp'
import './Card.jsx'
import { AiFillAlert } from "react-icons/ai";
import Card from './Card.jsx';
import img1 from './assets/1.webp'

const tailwind =()=>{

    let fruits = ['mango','banana','grapes']  //map 

    return(
        <>
        {fruits.map((item)=>  //variable or callback function (item) map     =>   <input key={item.id} defaultValue={item.name} />

        <ul>
            <li>{item}</li>
        </ul>
        
        )}
        {/* response => 0.640 px => by default
         sm:flex tablet  640px to 768px
         md:flex laptop   768px to 1024px
         lg=1024  desktop px to 1280 px
            xl=1280 px to 1536 px
        resonsive hidden sm:block md:flex gap-4  */}

          {/* react router dom => routing krne k liey use hota hai 
          single page application banane k liey use hota hai


    // react dom install => npm i react-router-dom
          virtul dom use krta hai isliey easy ho jata hai */}

         <header className='w-full flex h-18 justify-around items-center  border-2 bg-gray-950 text-amber-50'>
                <img src={img} alt="logo" className='w-20 h-20 rounded-full'/>
            <nav>
                <ul className='flex gap-10 font-bold text-2xl  sm:flex gap-5 hidden '>
                    <li className='p-4 hover:bg-green-600'>home</li>
                    <li className='p-4 hover:bg-green-600'>about</li>
                    <li className='p-4 hover:bg-green-600'>services</li>
                    <li className='p-4 hover:bg-green-600'>contact</li>
                    {/* <li className='p-4 hover:bg-pink-600 -600'></li>
                     <li className='p-4 hover:bg-pink-600 -600'>prashant</li> */}
    
                <img src="vite.svg" alt="" />
     </ul>
                </nav> 
         <button className='hover:bg-amber-400 border p-2 rounded-2xl text-blue-400 bg-amber-400 font-bold outline-black'>Login</button>
         </header>

      
         <Card img={img1} name={'hello'} age={21} city={'bhopal'}></Card>
         <Card img={img1} name={'name'} age={20} city={'multai'}></Card>
         <Card img={img1} name={'pawar'} age={23} city={'chikhlikalan'}></Card>
        <Card img={img1} name={'prashant'} age={22} city={'New York'}></Card>
        </>   // react fragment 
    

    )
}

export default tailwind