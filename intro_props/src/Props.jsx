import React from 'react'
import Child from './Child.jsx'
const App = () => {
      let course=[
        {
          name:"react",
          age:5,
          price:2000,
          img:"1.jpg"
        },
        {
          name:"angular",
          age:3,
          price:1500,
          img:"1.jpg"
        }
      ]
  return (
    <>
<h1 className="text-3xl font-semibold block underline m-4 text-amber-500">Home Page</h1>
        {
          course.map((item)=>
          <Child name={item.name} 
          age={item.age}
           price={item.price}
           img={item.img}/>)
        }
     
  
    </>
  )
}

export default App

// function App() {
//   const Apex = [
//     { id: 1, name: "Prashant" },
//     { id: 2, name: "Simran" }
//   ];

//   return (
//     <div className="container">
//       <h1 className="title">Hello World</h1>

//       {Apex.map((item) => (
//         <div className="card" key={item.id}>
//           <p className="id">ID: {item.id}</p>
//           <p className="name">Name: {item.name}</p>
//         </div>
//       ))}
//     </div>
//   );
// }
// export default App;


// ui par dikhna ka liye usestate ka use krege.