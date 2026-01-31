// main.jsx
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./Tailwind.css";  
// import App from "./Props";  // 1 st
import App from "./App"; 

//import App from "./Router";
// import App from "./btn";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
