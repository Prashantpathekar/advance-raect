import React from 'react'
import './tailwind.css'
const Card = ({name,age,city,img}) => {
  return (
    <>
      <summary className='border-2a p-4 m-4 text-center font-bold text-xl hover:bg-gray-300'>
        <img src={img} alt="" />
        {name} is {age} years old and lives in {city} .</summary>
    </>
  )
}

export default Card
