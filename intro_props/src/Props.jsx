import React from 'react'
import Child from './Child.jsx'
const App = () => {
    //let App=()=>{
      let name="john"
        let age=22 
  return (
    <div>
        <h1>home page</h1>
        <Child name={name} age={age}/>
    
  
    </div>
  )
}

export default App
