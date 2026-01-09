import React from 'react'
import './new.css'
import logo from'./assets/react.svg'
import Navbar from './Map'
import Home from './Home'
const App=()=>{
return(
// java script will be written here return ka uper likhna hai

    <>
     <img src ={logo} alt="logo" className="logo" />
          <p className='title'>Welcome to React</p>

       <Home />
<Navbar/>
    </>
)
}
export default App;