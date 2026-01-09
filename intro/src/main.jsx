import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
  // named export and default export dono hota hai react me
  // named export me {} lagate hai import karte time
  // default export me {} nahi lagate hai import karte time