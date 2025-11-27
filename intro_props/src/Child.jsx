import React from 'react'
import pras from'./assets/image.png'
const Child = (props) => {
  return (
    <>
    <img src={pras} alt="" />
      <summary>what is your name</summary>
      <p>my name is {props.name}</p>
      <p>my age is {props.age}</p>

      
</>
  )
}

export default Child
