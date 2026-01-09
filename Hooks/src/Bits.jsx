import React from 'react'
import Squares from './squares.jsx'
const Bits = () => {
  return (
    <>
  
<Squares 
speed={0.25} 
squareSize={50}
direction='diagonal' // up, down, left, right, diagonal
borderColor='pink'
hoverFillColor='#555'

/>
    </>
  )
}

export default Bits
