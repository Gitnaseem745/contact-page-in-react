import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from './components/Navigation/Navbar'
import ContactHeader from './components/ContactHeader/ContactHeader'
import ContactForm from './components/ContactForm/ContactForm'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <main className='mainContainer'>
    <ContactHeader />
    <ContactForm />
    </main>
  </StrictMode>,
)
