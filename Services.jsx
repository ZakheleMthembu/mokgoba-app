import React from 'react'
import { Link } from 'react-router-dom'

const SERVICES = [
  {id: 'printing', title: 'Printing (Flyers, Posters, Banners)'},
  {id: 'clothing', title: 'Clothing Branding (T-Shirts, Hoodies)'},
  {id: 'admin', title: 'Business Administration & Registrations'},
  {id: 'consulting', title: 'Business Support & Consulting'}
]

export default function Services(){
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {SERVICES.map(s => (
          <div key={s.id} className="p-4 bg-white rounded shadow">
            <h3 className="font-semibold">{s.title}</h3>
            <p className="mt-2">Click below to request a quote or send a request.</p>
            <Link to={`/services/${s.id}`} className="mt-3 inline-block text-blue-600">Learn more & Request</Link>
          </div>
        ))}
      </div>
    </div>
  )
}
