import { useState } from "react";

const Form1 = () => {
let [myname,setmyname]=useState("")
let [age,setage]=useState("")
let handlechange=(e)=>{
   setmyname(e.target.value)
}
let submit=()=>{
     alert('name:${myname} age:${age}')

}
return(
    <>
<form action="">
    <div className="flex-5 text-amber-800">
       enter your name <input type="text" value={myname}onChange={handlechange}  />
       enter your age <input type="text"value={age} onChange = {(e)=>setage(e.target.value)} />
       enter your name <br />{myname} <br /> <br /> enter your age <br />{age} <br />
      sumbit <input type="sumbit" value={submit}  onclick={submit}/>
   </div>
</form>
    </>


// spred operator

//     let [form ,setfrom]=useState(({myname:"" ,
//       myage:"",
//       mycity:""}))

//     let handlechange=(e)=>{
//    setfrom({...form,[e.target.name]:e.target.value})    //spred operator old values save krta hai
//     }

//   return(
//     <>
// <form action="">
//     <div className="flex-5 text-amber-800">
//        enter your name <input type="text" value={form.myname}onChange={handlechange}  /> <br /><br />
//        enter your age <input type="text" value={form.myage}onChange={handlechange}  /><br /> <br />
//        enter your city <input type="text" value={form.mycity}onChange={handlechange}  /><br /> <br />

//        my name is : {form.myname} and age is : {form.myage} and city is : {form.mycity}

//    </div>
// </form>
//     </>
)}
export default Form1;