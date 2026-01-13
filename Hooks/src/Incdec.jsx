import React, { useState } from 'react';

const Incdec = () => {
  //const [count, setCount] = useState(0);

  // const Inc = () => {
  //   setCount(count + 1);
  // };

  // const Dec = () => {
  //   if (count > 0) {
  //     setCount(count - 1);
  //   }
  // };
  // const Reset = () => { 
  //   setCount(0);
  // };

  // return (
  //   <>
  //     <h2 classname="bg-pink">Counter {count}</h2>
  //     <button onClick={Inc}>Inc</button> <br /><br />
  //     <button onClick={Dec}>Dec</button> <br /> <br />
  //     <button onClick={Reset}>Reset</button>
  //   </>
  // );

// turnary operator

  // const [dark, setDark] = useState(false);   

//   return (
//     <div
//       style={{
//         backgroundColor: dark ? "black" : "white",
//         color: dark ? "white" : "black",
//         // height: "100vh",
//         // padding: "20px",
//       }}
//     >
//       <h1>{dark ? "Dark Mode" : "Light Mode"}</h1>

//       <button onClick={() => setDark(!dark)}>
//         {dark ? "Switch to Light Mode" : "Switch to Dark Mode"}
//       </button>
//     </div>
//   );
// };


let [show, setShow] = useState(true);
  return (
    <>
        {show && <h1>hello</h1>}
          <button onClick={() => setShow(!show)}>
          {show ? "Hide" : "Show"}
          </button>
    </> 
  )
};
export default Incdec;
