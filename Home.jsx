import React from 'react'
import { Link } from 'react-router-dom'

export default function Home(){
  return (
    <div className="space-y-6">
      <header className="p-6 bg-white rounded shadow-md">
        <h1 className="text-2xl font-bold">Mokgoba Business and Print Hub</h1>
        <p className="mt-2">Empowering Entrepreneurs Through Print and Business Solutions.</p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 bg-gray-50 rounded shadow">
          <h3 className="font-semibold">About</h3>
          <p className="mt-2">We provide printing, branded clothing, business admin and company registration support.</p>
        </div>
        <div className="p-4 bg-gray-50 rounded shadow">
          <h3 className="font-semibold">Services</h3>
          <p className="mt-2"><Link to="/services" className="text-blue-600 underline">View our services</Link></p>
        </div>
        <div className="p-4 bg-gray-50 rounded shadow">
          <h3 className="font-semibold">Download Profile</h3>
          <a href="/Mokgoba_Business_Profile_2025.pdf" target="_blank" rel="noreferrer" className="text-blue-600 underline">Download PDF</a>
        </div>
      </section>

      <div>
        <Link to="/chat" className="inline-block px-4 py-2 bg-blue-600 text-white rounded">Ask our chatbot</Link>
      </div>
    </div>
  )
}
