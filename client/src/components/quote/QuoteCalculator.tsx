'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiHome, FiPlus, FiCheck } from 'react-icons/fi'
import Link from 'next/link'

interface PriceBreakdown {
  basePrice: number
  bedrooms: number
  bathrooms: number
  extras: { name: string; price: number }[]
  total: number
}

const QuoteCalculator = () => {
  const [bedrooms, setBedrooms] = useState(2)
  const [bathrooms, setBathrooms] = useState(1)
  const [propertyType, setPropertyType] = useState('apartment')
  const [extras, setExtras] = useState<string[]>([])

  const basePrices: Record<string, number> = {
    studio: 120,
    apartment: 150,
    house: 180,
  }

  const extraServices = [
    { id: 'oven', name: 'Oven Deep Clean', price: 35 },
    { id: 'carpet', name: 'Carpet Cleaning (per room)', price: 40 },
    { id: 'windows', name: 'Window Cleaning (interior)', price: 30 },
    { id: 'balcony', name: 'Balcony/Patio', price: 25 },
    { id: 'garage', name: 'Garage', price: 45 },
  ]

  const calculatePrice = (): PriceBreakdown => {
    const basePrice = basePrices[propertyType]
    const bedroomCost = Math.max(0, bedrooms - 1) * 25
    const bathroomCost = Math.max(0, bathrooms - 1) * 20
    
    const selectedExtras = extras.map(extraId => {
      const service = extraServices.find(s => s.id === extraId)
      return service ? { name: service.name, price: service.price } : { name: '', price: 0 }
    })
    
    const extrasTotal = selectedExtras.reduce((sum, extra) => sum + extra.price, 0)
    const total = basePrice + bedroomCost + bathroomCost + extrasTotal

    return {
      basePrice,
      bedrooms: bedroomCost,
      bathrooms: bathroomCost,
      extras: selectedExtras,
      total
    }
  }

  const toggleExtra = (extraId: string) => {
    setExtras(prev =>
      prev.includes(extraId)
        ? prev.filter(id => id !== extraId)
        : [...prev, extraId]
    )
  }

  const breakdown = calculatePrice()

  return (
    <section id="quote" className="section-container bg-gray-50">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Get Your <span className="text-primary-600">Instant Quote</span>
        </h2>
        <p className="text-xl text-gray-600">
          Transparent pricing with detailed breakdown - No hidden fees!
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* Left: Configuration */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-xl p-8"
        >
          <h3 className="text-2xl font-bold mb-6 text-gray-900">Property Details</h3>

          {/* Property Type */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              Property Type
            </label>
            <div className="grid grid-cols-3 gap-3">
              {['studio', 'apartment', 'house'].map((type) => (
                <button
                  key={type}
                  onClick={() => setPropertyType(type)}
                  className={`p-4 rounded-xl border-2 transition-all ${
                    propertyType === type
                      ? 'border-primary-600 bg-primary-50 text-primary-600'
                      : 'border-gray-200 hover:border-primary-300'
                  }`}
                >
                  <FiHome className="mx-auto text-2xl mb-2" />
                  <div className="font-semibold capitalize">{type}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Bedrooms */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              Bedrooms: {bedrooms}
            </label>
            <input
              type="range"
              min="0"
              max="6"
              value={bedrooms}
              onChange={(e) => setBedrooms(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary-600"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>Studio</span>
              <span>1</span>
              <span>2</span>
              <span>3</span>
              <span>4</span>
              <span>5</span>
              <span>6+</span>
            </div>
          </div>

          {/* Bathrooms */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              Bathrooms: {bathrooms}
            </label>
            <input
              type="range"
              min="1"
              max="4"
              value={bathrooms}
              onChange={(e) => setBathrooms(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary-600"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>1</span>
              <span>2</span>
              <span>3</span>
              <span>4+</span>
            </div>
          </div>

          {/* Extra Services */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              Additional Services
            </label>
            <div className="space-y-2">
              {extraServices.map((service) => (
                <button
                  key={service.id}
                  onClick={() => toggleExtra(service.id)}
                  className={`w-full flex items-center justify-between p-4 rounded-xl border-2 transition-all ${
                    extras.includes(service.id)
                      ? 'border-primary-600 bg-primary-50'
                      : 'border-gray-200 hover:border-primary-300'
                  }`}
                >
                  <span className="flex items-center space-x-3">
                    <div className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                      extras.includes(service.id)
                        ? 'border-primary-600 bg-primary-600'
                        : 'border-gray-300'
                    }`}>
                      {extras.includes(service.id) && (
                        <FiCheck className="text-white text-sm" />
                      )}
                    </div>
                    <span className="font-medium">{service.name}</span>
                  </span>
                  <span className="text-primary-600 font-semibold">+£{service.price}</span>
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right: Price Breakdown */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-gradient-to-br from-primary-600 to-secondary-600 rounded-2xl shadow-xl p-8 text-white h-fit sticky top-24"
        >
          <h3 className="text-2xl font-bold mb-6">Price Breakdown</h3>

          <div className="space-y-4 mb-6">
            <div className="flex justify-between items-center pb-3 border-b border-white/20">
              <span className="text-purple-100">Base Price ({propertyType})</span>
              <span className="font-semibold text-xl">£{breakdown.basePrice}</span>
            </div>

            {breakdown.bedrooms > 0 && (
              <div className="flex justify-between items-center pb-3 border-b border-white/20">
                <span className="text-purple-100">Additional Bedrooms</span>
                <span className="font-semibold text-xl">£{breakdown.bedrooms}</span>
              </div>
            )}

            {breakdown.bathrooms > 0 && (
              <div className="flex justify-between items-center pb-3 border-b border-white/20">
                <span className="text-purple-100">Additional Bathrooms</span>
                <span className="font-semibold text-xl">£{breakdown.bathrooms}</span>
              </div>
            )}

            {breakdown.extras.map((extra, index) => (
              <div key={index} className="flex justify-between items-center pb-3 border-b border-white/20">
                <span className="text-purple-100">{extra.name}</span>
                <span className="font-semibold text-xl">£{extra.price}</span>
              </div>
            ))}
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-6">
            <div className="flex justify-between items-center">
              <span className="text-xl font-semibold">Total Price</span>
              <span className="text-4xl font-bold text-yellow-300">£{breakdown.total}</span>
            </div>
            <p className="text-sm text-purple-200 mt-2">
              * VAT included • No hidden fees
            </p>
          </div>

          <Link href="/booking" className="block">
            <button className="w-full bg-white text-primary-600 px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all hover:scale-105">
              Book Now - £{breakdown.total}
            </button>
          </Link>

          <div className="mt-6 space-y-2 text-sm text-purple-100">
            <div className="flex items-center space-x-2">
              <FiCheck className="flex-shrink-0" />
              <span>Professional cleaning guaranteed</span>
            </div>
            <div className="flex items-center space-x-2">
              <FiCheck className="flex-shrink-0" />
              <span>Free re-clean if not satisfied</span>
            </div>
            <div className="flex items-center space-x-2">
              <FiCheck className="flex-shrink-0" />
              <span>Deposit-back guarantee</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default QuoteCalculator
