'use client'

import { motion } from 'framer-motion'
import { FiHome, FiDroplet, FiTool, FiSun, FiPackage } from 'react-icons/fi'
import Link from 'next/link'

const services = [
  {
    icon: FiHome,
    title: 'End of Tenancy Cleaning',
    description: 'Complete deep clean for rental properties. Guaranteed to help you get your full deposit back.',
    price: 'From £150',
    features: ['All rooms cleaned', 'Kitchen deep clean', 'Bathroom sanitization', 'Deposit guarantee'],
  },
  {
    icon: FiDroplet,
    title: 'Deep Cleaning',
    description: 'Thorough cleaning of your entire property, reaching every corner and surface.',
    price: 'From £120',
    features: ['Top to bottom clean', 'Behind furniture', 'Hard-to-reach areas', 'Eco-friendly products'],
  },
  {
    icon: FiPackage,
    title: 'Carpet Cleaning',
    description: 'Professional steam cleaning removes stains, odors, and allergens from your carpets.',
    price: 'From £40/room',
    features: ['Steam cleaning', 'Stain removal', 'Fast drying', 'Pet odor removal'],
  },
  {
    icon: FiTool,
    title: 'Oven Cleaning',
    description: 'Restore your oven to showroom condition with our specialized cleaning service.',
    price: 'From £35',
    features: ['Inside & outside', 'Racks & trays', 'Glass door', 'Eco-friendly products'],
  },
  {
    icon: FiSun,
    title: 'Window Cleaning',
    description: 'Streak-free, crystal clear windows for better light and improved curb appeal.',
    price: 'From £30',
    features: ['Interior & exterior', 'Frames & sills', 'Streak-free finish', 'Safety guaranteed'],
  },
]

const Services = () => {
  return (
    <section className="section-container">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Our <span className="text-primary-600">Services</span>
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Professional cleaning services tailored to your needs with transparent pricing and guaranteed satisfaction
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => {
          const Icon = service.icon
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="card group hover:border-primary-600 border-2 border-transparent"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-xl mb-4 group-hover:scale-110 transition-transform">
                <Icon className="text-3xl text-white" />
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>

              <div className="text-2xl font-bold text-primary-600 mb-4">{service.price}</div>

              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-700">
                    <span className="w-1.5 h-1.5 bg-primary-600 rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>

              <Link href="/#quote" className="block">
                <button className="w-full btn-primary">Get Quote</button>
              </Link>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}

export default Services
