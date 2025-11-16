'use client'

import { motion } from 'framer-motion'
import { FiCheck, FiClock, FiShield, FiDollarSign, FiAward, FiUsers, FiPhone, FiHeart } from 'react-icons/fi'

const features = [
  {
    icon: FiClock,
    title: '24/7 Online Booking',
    description: 'Book anytime, anywhere without phone calls. Instant confirmation and transparent pricing.',
  },
  {
    icon: FiShield,
    title: 'Deposit Guarantee',
    description: 'Get your full deposit back or we re-clean for free. Fully insured and certified.',
  },
  {
    icon: FiDollarSign,
    title: 'Transparent Pricing',
    description: 'See exact price breakdown before booking. No hidden fees or surprise charges.',
  },
  {
    icon: FiAward,
    title: 'Quality Guaranteed',
    description: 'Professional cleaners with verified training. Free re-clean if you\'re not satisfied.',
  },
  {
    icon: FiUsers,
    title: 'Trusted by 500+',
    description: '4.9★ rating from happy customers. See real reviews from verified bookings.',
  },
  {
    icon: FiPhone,
    title: 'WhatsApp Updates',
    description: 'Get instant booking confirmations and updates via WhatsApp. Stay informed.',
  },
]

const WhyChooseUs = () => {
  return (
    <section className="section-container bg-gradient-to-br from-primary-50 to-secondary-50">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Why Choose <span className="text-primary-600">IBA Global Service</span>
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          We're not just another cleaning company. Here's what makes us different
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {features.map((feature, index) => {
          const Icon = feature.icon
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-shadow"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-lg flex items-center justify-center mb-4">
                <Icon className="text-2xl text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          )
        })}
      </div>

      {/* Stats Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-12 text-white"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl md:text-5xl font-bold mb-2">500+</div>
            <div className="text-purple-100">Happy Customers</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-bold mb-2">4.9★</div>
            <div className="text-purple-100">Average Rating</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-bold mb-2">100%</div>
            <div className="text-purple-100">Deposit Back</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-bold mb-2">24/7</div>
            <div className="text-purple-100">Online Booking</div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default WhyChooseUs
