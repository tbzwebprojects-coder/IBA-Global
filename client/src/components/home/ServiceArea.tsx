'use client'

import { motion } from 'framer-motion'
import { FiMapPin, FiCheck } from 'react-icons/fi'

const areas = [
  'Manchester City Centre',
  'Salford',
  'Trafford',
  'Stockport',
  'Oldham',
  'Rochdale',
  'Bury',
  'Bolton',
  'Wigan',
  'Tameside',
  'Stretford',
  'Sale',
  'Altrincham',
  'Urmston',
  'Didsbury',
  'Chorlton',
]

const ServiceArea = () => {
  return (
    <section className="section-container">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Service <span className="text-primary-600">Coverage Area</span>
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          We proudly serve Greater Manchester and surrounding areas
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Map Placeholder */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-primary-100 to-secondary-100 rounded-2xl p-8 h-96 flex items-center justify-center relative overflow-hidden"
        >
          <div className="text-center z-10">
            <FiMapPin className="text-6xl text-primary-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Greater Manchester</h3>
            <p className="text-gray-700">Covering all major areas</p>
          </div>
          
          {/* Decorative circles */}
          <div className="absolute top-10 left-10 w-32 h-32 bg-primary-200 rounded-full opacity-30"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-secondary-200 rounded-full opacity-30"></div>
          <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-primary-300 rounded-full opacity-20"></div>
        </motion.div>

        {/* Areas List */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Areas We Cover:</h3>
          <div className="grid grid-cols-2 gap-4">
            {areas.map((area, index) => (
              <div key={index} className="flex items-center space-x-3">
                <FiCheck className="text-primary-600 flex-shrink-0" />
                <span className="text-gray-700">{area}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 bg-primary-50 rounded-xl border-2 border-primary-200">
            <h4 className="font-bold text-gray-900 mb-2">Don't see your area?</h4>
            <p className="text-gray-700 mb-4">
              Contact us - we may still be able to help! We regularly expand our coverage.
            </p>
            <a href="https://wa.me/447000000000" className="btn-primary inline-block">
              Contact on WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ServiceArea
