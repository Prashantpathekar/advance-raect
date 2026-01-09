import { Route, Routes } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Home.jsx'
import About from './About.jsx'
import Service from './Service.jsx'


const Router=()=>{
    return(
        // main.jsx => <BrowserRouter></BrowserRouter>
        // Layout.jsx => Outlet ,Link
        // (app.jsx) Router.jsx => Routes and Route

        <>
  <Routes>
      <Route path="/" element={<Layout/>}>
         <Route index element={<Home/>}/>  
        <Route path='about' element={<About/>}/>
        <Route path='services' element={<Service/>}/>
    </Route>
  </Routes>

        </>
    )
}
export default Router