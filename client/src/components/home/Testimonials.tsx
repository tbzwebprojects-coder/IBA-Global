'use client'

import { motion } from 'framer-motion'
import { FiStar } from 'react-icons/fi'

const testimonials = [
  {
    name: 'Sarah Johnson',
    location: 'Manchester',
    rating: 5,
    text: 'Amazing service! Got my full deposit back thanks to IBA. The online booking was so easy and the price breakdown helped me budget. Highly recommend!',
    date: 'October 2024',
  },
  {
    name: 'Michael Chen',
    location: 'Salford',
    rating: 5,
    text: 'Best cleaning company I\'ve used. No hassle with phone calls, instant quote, and they even sent WhatsApp updates. The cleaners were professional and thorough.',
    date: 'November 2024',
  },
  {
    name: 'Emma Williams',
    location: 'Stockport',
    rating: 5,
    text: 'Moved out of my student flat and needed end of tenancy cleaning. Booked online at 11pm and got confirmation instantly. The cleaners did an incredible job!',
    date: 'September 2024',
  },
  {
    name: 'David Brown',
    location: 'Trafford',
    rating: 5,
    text: 'Professional, reliable, and transparent. The price breakdown feature is brilliant - you know exactly what you\'re paying for. Will use again!',
    date: 'November 2024',
  },
  {
    name: 'Lisa Martinez',
    location: 'Bolton',
    rating: 5,
    text: 'Fantastic experience from start to finish. Online payment was secure and easy, and the cleaning quality exceeded expectations. 100% recommend!',
    date: 'October 2024',
  },
  {
    name: 'James Taylor',
    location: 'Oldham',
    rating: 5,
    text: 'I was skeptical about booking online but IBA proved me wrong. Everything was transparent, professional, and the results were perfect. Got my deposit back!',
    date: 'September 2024',
  },
]

const Testimonials = () => {
  return (
    <section className="section-container bg-gray-50">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          What Our <span className="text-primary-600">Customers Say</span>
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Real reviews from real customers. See why people trust IBA Global Service
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-shadow"
          >
            {/* Rating Stars */}
            <div className="flex space-x-1 mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <FiStar key={i} className="text-yellow-400 fill-yellow-400" />
              ))}
            </div>

            {/* Review Text */}
            <p className="text-gray-700 mb-6 italic">&ldquo;{testimonial.text}&rdquo;</p>

            {/* Author Info */}
            <div className="border-t pt-4">
              <div className="font-bold text-gray-900">{testimonial.name}</div>
              <div className="text-sm text-gray-600">{testimonial.location}</div>
              <div className="text-xs text-gray-500 mt-1">{testimonial.date}</div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Trust Badges */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-16 bg-white rounded-2xl p-8 shadow-xl"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-primary-600 mb-2">500+</div>
            <div className="text-gray-600">Reviews</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary-600 mb-2">4.9/5</div>
            <div className="text-gray-600">Rating</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary-600 mb-2">98%</div>
            <div className="text-gray-600">Satisfaction</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary-600 mb-2">100%</div>
            <div className="text-gray-600">Guaranteed</div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Testimonials
