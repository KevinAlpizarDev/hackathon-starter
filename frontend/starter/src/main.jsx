import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Google } from './Google.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Google />
  </StrictMode>,
)
