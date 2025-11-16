'use client'

import { useState } from 'react'
import Link from 'next/link'
import { FiMenu, FiX, FiPhone } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Get Quote', href: '/#quote' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">IBA</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">IBA Global Service</h1>
              <p className="text-xs text-gray-600">Professional Cleaning</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
              >
                {link.name}
              </Link>
            ))}
            
            <a
              href="https://wa.me/447000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition-colors"
            >
              <FaWhatsapp className="text-xl" />
              <span className="font-medium">WhatsApp</span>
            </a>

            <Link href="/login" className="btn-primary">
              Login
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700 hover:text-primary-600"
          >
            {isOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block py-3 text-gray-700 hover:text-primary-600 font-medium transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="https://wa.me/447000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition-colors mt-4 justify-center"
            >
              <FaWhatsapp className="text-xl" />
              <span className="font-medium">WhatsApp</span>
            </a>
            <Link href="/login" className="block mt-4">
              <button className="btn-primary w-full">Login</button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
