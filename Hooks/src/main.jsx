import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
 //import App from './Prx.jsx'
//import App from './Form.jsx'
//import App from './Character.jsx'
import App from './FormHan.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
