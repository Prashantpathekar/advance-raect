// import React from 'react'
// // import pras from'./assets/image.png'
// const Child = (props) => {  
//   return (
//     <>
//    {/* ? <img src={pras} alt="" /> */}

//       {<p>my name is {props.name}</p>  
//       <p>my age is {props.age}</p>
//       <p>my price is {props.price}</p>
//       <img src={props.img} alt="" />
// </>
//   )
// }

// export default Child

// 2nd method not call props name

import React from "react";

const Child = ({ name, age, price, img }) => {
  return (
    <>
      <p className="card bg-pink">My name is {name}</p>
      <p>My age is {age}</p>
      <p>My price is {price}</p>
      <img src={img} alt="profile" />
    </>
  );
};

export default Child;
