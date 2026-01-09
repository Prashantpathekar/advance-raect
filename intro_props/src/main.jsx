import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './Props.jsx'
// import App from './Map.jsx'
import './Tailwind.css'        // ✅ CSS (NO variable)

createRoot(document.getElementById('root')).render(
<StrictMode>
    <App />
</StrictMode>
)

// react ka root hota hai main.jsx. kyunki ye entry point hota hai