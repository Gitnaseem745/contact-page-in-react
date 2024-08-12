import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from './components/Navbar'
import Contact from './components/Contact'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <Contact />
  </StrictMode>,
)
