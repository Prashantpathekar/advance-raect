import React,{useEffect,useState} from "react"
import './tailwind.css'
const Useeffect=()=>{
let [count,setcount]=useState(0)

let Inc=()=>{
setcount(count+1)
}
let dec=()=>{
    setcount(count-1)
}
    useEffect(()=>{  //har bar chalega useeffect  but // iska use krke ek bar hi baar chalega[]
        console.log("running.....")  // jab tak data aa na jaye tab tak data rukhega js ma c(await) sa
    })

   return(
    <>
    <button className="bg-amber-500 text-amber-700" onClick={Inc}>increment</button>
count:{count}

   <button className="bg-amber-500 text-amber-700" onClick={dec}>deccrement</button>
count:{count}
    </>
   )
}
export default Useeffect