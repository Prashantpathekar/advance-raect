import React, { useState } from 'react'
import './new.css'
// import de from './assets/react.svg'
// const Home=()=>{

//     return(
//         <>
//    <img src={de} alt="de" className='de'/>
//       <button onClick={() => alert('Button clicked!')  } >click me</button><br /> <br />
//       <button onPlay={useState}>clicked</button>
//         </>
//     )
// }

const Home=()=> {
  const [count, setCount] = useState(0);

  return (
    <div >
      <h1>Counter{count}</h1>

      <button onClick={() => setCount(count + 1)}>
        Increment +
      </button>

      <button 
        onClick={() => setCount(count - 1)}>
        Decrement -
      </button>
    </div>
  );
}


export default Home;