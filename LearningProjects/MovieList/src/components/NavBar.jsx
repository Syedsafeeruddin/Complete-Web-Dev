import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <nav className="bg-black px-6 py-4 flex justify-between items-center shadow-lg">
      <div className="text-2xl font-bold text-red-600">
        <Link to="/">Movie App</Link>
      </div>
      <div className="space-x-6">
        <Link to="/" className="text-red-600 font-medium hover:text-white transition">Home</Link>
        <Link to="/favourite" className="text-red-600 font-medium hover:text-white transition">Favourite</Link>
      </div>
    </nav>
  )
}

export default NavBar
