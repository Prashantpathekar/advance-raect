import React, {useState } from 'react'
import "./tailwind.css"
const Form_handlin = () => {
let [name , setname]=useState("")
let [city , setcity]=useState("")

let Handlesubmit=(e)=>{
  e.preventDefault()
  alert("form submitted")
  console.log(name)
}
  return (
    <>
      <h1 className='text-fuchsia-600 border-y-indigo-500'>Form handling</h1> <br /><br />
      <form onSubmit={Handlesubmit}>
    Enetr name : <input className="text-pink-700" type="text" value={name} onChange={(e)=>{setname(e.target.value)}} placeholder='Enter name'/> <br /><br />
      </form>
      <br />
      <form onSubmit={Handlesubmit}>
    Enetr city : <input type="file" value={city} onChange={(e)=>{setcity(e.target.value)}} placeholder='Enter city'/> <br /><br />
      </form>
      <button type='submit'>save data</button>
    </>

  )
}

export default Form_handlin
