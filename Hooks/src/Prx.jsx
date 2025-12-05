import React from 'react'
import './tailwind.css'
import { useState } from 'react'
const Prx = () => {

  let [name , setname]=useState("")
  let [city , setcity]=useState("")
  
  let Handlesubmit=(e)=>{
    e.preventDefault()
    alert("form submitted")
    console.log(name)
  }
// let [variable , setVariable]=React.useState(initialValue)

let [count , setcount]=useState(0)
let Inc=()=>{
  setcount(count+1)
  console.log(count)
}
let Dec=()=>{
     if (count > 0) {
  setcount(count-1)
  console.log(count)
}
}

  return (
    <>
   <h1>counter: {count}</h1> <br />
   <button className='text-yellow-600' onClick={Inc}>Increment</button><br /><br />
   <button  className='text-red-600' onClick={Dec}>Decrement</button><br /><br />
   <button className='text-green-600' onClick={() => setcount(0)}>Reset</button>  

  <h1>Form handling</h1> <br /><br />
      <form onSubmit={Handlesubmit}>
    Enetr name : <input type="text" value={name} onChange={(e)=>{setname(e.target.value)}} placeholder='Enter name'/> <br /><br />
      </form>
      <br />
      <form onSubmit={Handlesubmit}>
    Enetr city : <input type="text" value={city} onChange={(e)=>{setcity(e.target.value)}} placeholder='Enter city'/> <br /><br />
      </form>
      <button type='submit'>save data</button>
   
    </>

  )
}
export default Prx
