import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './indexNK.css'
import App from './AppNK.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
