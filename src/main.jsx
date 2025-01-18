import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import About from './pages/about.jsx'
import Contact from './pages/contact.jsx'
import Services from './pages/services.jsx'

import { BrowserRouter, Routes, Route } from "react-router";
import HeaderNav from './components/HeaderNav.jsx'
import FooterNav from './components/FooterNav.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <HeaderNav />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/services" element={<Services />} />
      </Routes>
      <FooterNav />
    </BrowserRouter>
  </StrictMode>,
)
