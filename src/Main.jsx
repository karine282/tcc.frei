import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Navegador from  './routes.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navegador />
  </StrictMode>
)
