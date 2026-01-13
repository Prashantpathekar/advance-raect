import React, { useState } from 'react'
const Formhandling = () => {
  //   let [myname,setmyName]=useState("")
  //   let [age,setage]=useState("")
  //   let [prof,setprof]=useState("")

  //   let handlechange=(e)=>{
  //    console.log(e.target.value);
  //    setmyName(e.target.value)

  //   }
  //   let sumbit=()=>{
  //     alert(`name:${myname} age:${age} prof:${prof}`)
    
  //   }
  // return (
  //   <>
  //     <h1 className='border-l-teal-300 text-blue-600 text-bold outline-neutral-200'>form handling</h1> <br />
  //     enter your name:<input type="text" value={myname} onChange={handlechange}/><br /><br />
  //     enter your age:<input type="number" value={age} onChange={(e)=>setage(e.target.value)}/><br /><br />
  //     enter your prof:<input type="text" value={prof} onChange={(e)=>setprof(e.target.value)}/><br /><br />
  //     <h1>{myname}</h1>
  //     <h1>{age}</h1>
  //     <h1>{prof}</h1>
  //     <input type="submit" value="submit" onClick={sumbit} />
      
    // </>

    let [form ,setfrom]=useState(({myname:"" ,
      myage:"",
      mycity:""}))
    let handlechange=(e)=>{
   setfrom({...form,[e.target.name]:e.target.value})    //spred operator old values save krta hai
    }

   let handlesumbit=(e)=>{
    e.preventDefault()   //page reload hone se bchata hai
    // alert(`name:${form.myname} age:${form.myage} city:${form.mycity}`)
    if(form.myname.trim()==""){  // trim space remove krta hai string par work
      alert("plese enter your name")
    }
    
      e.preventDefault()   //page reload hone se bchata hai
        if(form.age.trim()==""){
          alert("plese enter your age")
        }
        e.preventDefault()   //page reload hone se bchata hai
          if(form.city.trim()==""){
            alert("plese enter your city")
      }
    }
    let valid=true
    if(form.myname.trim()==""){
alert("plese enter your name")
valid=false }
else if (form.myage.trim()==""){
  alert("plese enter your age")
  valid=false
}
if(valid){
alert("form submitted")}
    return(
      <>
     <form onSubmit={handlesumbit}>
      <h1 className='border-l-teal-300 text-blue-600 text-bold outline-neutral-200'>form handling</h1> <br />
      enter your name:<input type="text" name='myname' value={form.myname} onChange={handlechange}/><br /><br />
      enter your age:<input type="number" name='myage' value={form.myage} onChange={handlechange}/><br /><br />
      enter your city:<input type="text" name='mycity' value={form.mycity} onChange={handlechange}/><br /><br />
      <h2>my name is : {form.myname} <br /><br />my age is : {form.myage} <br /><br />and my city is : {form.mycity}</h2><br />
      <button className="text-shadow-black"type="submit">sign up</button>
            </form >

      </>
    )
}   
export default Formhandling;
