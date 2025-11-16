'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { FiCheck, FiStar } from 'react-icons/fi'

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary-600 via-purple-600 to-secondary-600 text-white pt-32 pb-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <span className="text-sm font-semibold">📍 Greater Manchester, UK</span>
              </div>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Professional<br />
              <span className="text-yellow-300">End of Tenancy</span><br />
              Cleaning
            </h1>

            <p className="text-xl mb-8 text-purple-100">
              Get your deposit back with our guaranteed professional cleaning service. 
              Instant online quotes, transparent pricing, and 24/7 booking.
            </p>

            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
              <Link href="/#quote" className="bg-white text-primary-600 px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all hover:scale-105 text-center">
                Get Instant Quote
              </Link>
              <Link href="/contact" className="bg-transparent border-2 border-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-primary-600 transition-all text-center">
                Contact Us
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-3xl font-bold">500+</div>
                <div className="text-sm text-purple-200">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">4.9★</div>
                <div className="text-sm text-purple-200">Rating</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">100%</div>
                <div className="text-sm text-purple-200">Guaranteed</div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Benefits */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20"
          >
            <h3 className="text-2xl font-bold mb-6">Why Choose IBA Global Service?</h3>
            <ul className="space-y-4">
              {[
                'Instant online quote with transparent pricing',
                'No phone calls needed - book 24/7 online',
                'Complete payment collection on website',
                'Deposit-back guarantee',
                'Fully insured & trained cleaners',
                'WhatsApp instant updates',
                'Same-day & next-day availability',
                'Free re-clean if not satisfied'
              ].map((benefit, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <FiCheck className="text-yellow-300 text-xl flex-shrink-0 mt-1" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" className="w-full h-12 md:h-20">
          <path
            fill="#ffffff"
            d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
          />
        </svg>
      </div>
    </section>
  )
}

export default Hero
