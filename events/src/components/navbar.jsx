import React from 'react'
import logo from '../assets/logo.svg'

const navbar = () => {
  return (
	<div>
		<nav className="bg-black" style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)' }}>
      {/* Navbar Container */}
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Left Logo Section */}
        <div className="flex items-center">
          <img
            src={logo}
            alt="Expresso Logo"
            className="h-16 object-contain"
          />
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-8 text-white uppercase text-lg font-bold" style={{ fontFamily: "'Inter', sans-serif" }}>
          <li className="hover:text-gray-300 cursor-pointer duration-300">Home</li>
          <li className="hover:text-gray-300 cursor-pointer duration-300">Events</li>
          <li className="hover:text-gray-300 cursor-pointer duration-300">Art</li>
          <li className="hover:text-gray-300 cursor-pointer duration-300">Literary</li>
          <li className="hover:text-gray-300 cursor-pointer duration-300">Team</li>
          <li className="hover:text-gray-300 cursor-pointer duration-300">Alumni</li>
        </ul>

        {/* Join Us Button */}
        <div>
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-6 rounded-full transition-transform duration-300 active:scale-95" style={{ fontFamily: "'Inter', sans-serif", boxShadow: '0 2px 4px rgba(0, 0, 0, 0.3)' }}>
            Join Us
          </button>
        </div>
      </div>
    </nav>
	</div>
  )
}

export default navbar