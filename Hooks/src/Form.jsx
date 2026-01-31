import React ,{useState} from "react"
import "./tailwind.css"
const Form = () => {
// let [name , setname]=useState("")
// let [city , setcity]=useState("")

// let inputchange=(event)=>{
//     console.log(event.target.value)
//   setname(event.target.value)
// }
// let inputchange1=(event)=>{
//     console.log(event.target.value)
//   setcity(event.target.value)
// }



//   return (
//     <>
// <h1>Form handling</h1>
// your namen is: {name}
// <input type="text" onChange={inputchange}/> 
//  <br /> <br />
// Your city is: {city}
// <input type="text" onChange={inputchange1} />

//     </>
//   )

//input color change
  // const colors = ["text-red-500", "text-blue-500", "text-green-500", "text-yellow-500", "text-purple-500"];
  // const [index, setIndex] = useState(0);

  // const changeTextColor = () => {
  //   setIndex((index + 1) % colors.length);
  // };

  // return (
  //   <button
  //     onClick={changeTextColor}
  //     className={`px-6 py-3 rounded-xl text-lg ${colors[index]} transition-all duration-300`}
  //   >
  // Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt voluptate enim temporibus numquam deserunt optio ex dolorum vitae ab? Obcaecati harum et facilis aut officiis animi officia id saepe provident.
  //   </button>
  // );
  
  const [color, setColor] = useState("");

  return (

    <div style={{ padding: "20px" }}>
      <h2>Checkbox se Color Change</h2>

      <label>
        <input className='text-red-500' type="checkbox" onChange={() => setColor("red")} checked={color === "red"}/>
        Red
      </label>

      <br />

      <label>
        <input type="checkbox" onChange={() => setColor("yellow")} checked={color === "yellow"}/>
        Yellow
      </label>

      <div
        style={{ marginTop: "20px", height: "150px",width: "150px",border: "2px solid black",backgroundColor: color,}}>
            
    </div>
<h1>hello</h1>
    </div>
  );
}

export default Form
 

// character count in textarea
// button hai jispe click krke color cahne hona