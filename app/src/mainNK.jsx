import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './AppNK.module.css'
import App from './AppNK.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Routes> 
      <Route path="/" element={<App />} />
    </Routes>
  </StrictMode>,
)
