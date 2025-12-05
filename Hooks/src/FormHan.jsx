import React, {useState } from 'react'
import "./tailwind.css"
const Form_handlin = () => {
// let [name , setname]=useState("")
// let [city , setcity]=useState("")

let [form,setform]=useState(
  {
    name:"",
    email:"",
    number:""
  }
)

let handleChange=(e)=>{
  setform({...form,[e.target.name]:e.target.value})
}
let Handlesubmit=(e)=>{
  e.preventDefault()  // stop the form reloading
  if(form.name.trim()==""){
    alert("name can not be empity")
  }
  // alert("form submitted")
  // console.log(name,city)

}
  return (
    <>
      <h1 className='text-fuchsia-600 border-y-indigo-500 flex justify-center">
' >Form handling</h1> <br /><br />
      <form onSubmit={Handlesubmit}>

    {/* Enetr name : <input type="text" value={name} onChange={(e)=>{setname(e.target.value)}} placeholder='Enter name'/> <br /><br />
    Enetr city : <input type="file" value={city} onChange={(e)=>{setcity(e.target.value)}} placeholder='Enter city'/> <br /><br /> */}

    Enetr name : <input type="text" name='name' value={form.name} onChange={handleChange} placeholder='Enter name'/> <br /><br />
    Enetr email : <input type="text" name='email' value={form.email} onChange={handleChange} placeholder='Enter email'/> <br /><br />
    Enetr number : <input type="number" name='number' value={form.number} onChange={handleChange} placeholder='Enter number'/> <br /><br />
      <button type='submit'>save data</button>
 
         </form>
         
    </>

  )
}

export default Form_handlin
