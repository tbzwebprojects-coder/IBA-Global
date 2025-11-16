'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { FiArrowRight } from 'react-icons/fi'

const CTASection = () => {
  return (
    <section className="section-container">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="relative bg-gradient-to-br from-primary-600 via-purple-600 to-secondary-600 rounded-3xl p-12 md:p-16 text-white overflow-hidden"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Get Your Deposit Back?
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-purple-100">
            Book now and experience the difference of professional cleaning with transparent pricing and guaranteed results
          </p>

          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-8">
            <Link href="/#quote" className="bg-white text-primary-600 px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all hover:scale-105 flex items-center justify-center space-x-2">
              <span>Get Instant Quote</span>
              <FiArrowRight />
            </Link>
            <a
              href="https://wa.me/447000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all hover:scale-105 flex items-center justify-center space-x-2"
            >
              <span>WhatsApp Us</span>
              <FiArrowRight />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-3xl font-bold mb-2">No Phone Calls</div>
              <div className="text-purple-100">Book 24/7 online</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-3xl font-bold mb-2">Transparent</div>
              <div className="text-purple-100">See exact pricing</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-3xl font-bold mb-2">Guaranteed</div>
              <div className="text-purple-100">100% satisfaction</div>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full opacity-5"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-white rounded-full opacity-5"></div>
      </motion.div>
    </section>
  )
}

export default CTASection
