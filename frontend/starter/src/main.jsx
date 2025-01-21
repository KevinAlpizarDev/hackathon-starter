import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Google } from './Google.jsx'
import { BrowserRouter } from "react-router-dom";
createRoot(document.getElementById('root')).render(
  <StrictMode>


    <BrowserRouter>
      <Google />

    </BrowserRouter>


  </StrictMode>,
)
