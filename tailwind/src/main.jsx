import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './tailwind.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
