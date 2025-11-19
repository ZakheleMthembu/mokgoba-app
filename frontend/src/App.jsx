import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home'
import Services from './components/Services'
import ServiceDetail from './components/ServiceDetail'
import Chatbot from './components/Chatbot'
import Contact from './components/Contact'
import Payments from './components/Payments'
import About from './components/About'
import SocialImpact from './components/SocialImpact'
import Location from './components/Location'

export default function App(){
  return (
    <Router>
      <div className="min-h-screen">
        <nav className="p-4 flex justify-between items-center bg-gradient-to-r from-green-500 via-yellow-400 to-blue-600 text-white">
          <div className="font-bold">Mokgoba Business & Print Hub</div>
          <div className="space-x-4">
            <Link to="/">Home</Link>
            <Link to="/services">Services</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </nav>

        <main className="p-4 max-w-4xl mx-auto">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/services" element={<Services/>} />
            <Route path="/services/:id" element={<ServiceDetail/>} />
            <Route path="/chat" element={<Chatbot/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/payments" element={<Payments/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/social" element={<SocialImpact/>} />
            <Route path="/location" element={<Location/>} />
          </Routes>
        </main>

        <footer className="p-4 text-center text-sm">Powered by Ithemba Lokwakha Group (PTY) LTD • 5% profit donated to communities</footer>
      </div>
    </Router>
  )
}
