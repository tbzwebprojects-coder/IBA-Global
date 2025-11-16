import { useState } from 'react'
import { FiSave, FiEdit2 } from 'react-icons/fi'
import toast from 'react-hot-toast'

const Pricing = () => {
  const [pricingRules, setPricingRules] = useState([
    { id: 1, propertyType: 'Studio', basePrice: 120, bedroomPrice: 25, bathroomPrice: 20 },
    { id: 2, propertyType: 'Apartment', basePrice: 150, bedroomPrice: 25, bathroomPrice: 20 },
    { id: 3, propertyType: 'House', basePrice: 180, bedroomPrice: 25, bathroomPrice: 20 },
  ])

  const [extraServices, setExtraServices] = useState([
    { id: 1, name: 'Oven Deep Clean', price: 35, active: true },
    { id: 2, name: 'Carpet Cleaning (per room)', price: 40, active: true },
    { id: 3, name: 'Window Cleaning (interior)', price: 30, active: true },
    { id: 4, name: 'Balcony/Patio', price: 25, active: true },
    { id: 5, name: 'Garage', price: 45, active: true },
  ])

  const handleSavePricing = () => {
    toast.success('Pricing updated successfully!')
  }

  const updatePricingRule = (id: number, field: string, value: number) => {
    setPricingRules(prev => prev.map(rule => 
      rule.id === id ? { ...rule, [field]: value } : rule
    ))
  }

  const updateExtraService = (id: number, field: string, value: number | boolean) => {
    setExtraServices(prev => prev.map(service => 
      service.id === id ? { ...service, [field]: value } : service
    ))
  }

  return (
    <div>
      <div className="mb-8 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Pricing Management</h1>
          <p className="text-gray-600 mt-2">Control your pricing dynamically</p>
        </div>
        <button onClick={handleSavePricing} className="btn-primary flex items-center space-x-2">
          <FiSave />
          <span>Save Changes</span>
        </button>
      </div>

      {/* Base Pricing Rules */}
      <div className="card mb-8">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Base Pricing by Property Type</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 px-4 text-gray-700 font-semibold">Property Type</th>
                <th className="text-left py-3 px-4 text-gray-700 font-semibold">Base Price</th>
                <th className="text-left py-3 px-4 text-gray-700 font-semibold">Per Bedroom</th>
                <th className="text-left py-3 px-4 text-gray-700 font-semibold">Per Bathroom</th>
              </tr>
            </thead>
            <tbody>
              {pricingRules.map((rule) => (
                <tr key={rule.id} className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium">{rule.propertyType}</td>
                  <td className="py-3 px-4">
                    <div className="flex items-center">
                      <span className="text-gray-600 mr-2">£</span>
                      <input
                        type="number"
                        value={rule.basePrice}
                        onChange={(e) => updatePricingRule(rule.id, 'basePrice', parseFloat(e.target.value))}
                        className="input w-24"
                      />
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex items-center">
                      <span className="text-gray-600 mr-2">£</span>
                      <input
                        type="number"
                        value={rule.bedroomPrice}
                        onChange={(e) => updatePricingRule(rule.id, 'bedroomPrice', parseFloat(e.target.value))}
                        className="input w-24"
                      />
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex items-center">
                      <span className="text-gray-600 mr-2">£</span>
                      <input
                        type="number"
                        value={rule.bathroomPrice}
                        onChange={(e) => updatePricingRule(rule.id, 'bathroomPrice', parseFloat(e.target.value))}
                        className="input w-24"
                      />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Extra Services */}
      <div className="card">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold text-gray-900">Extra Services</h3>
          <button className="btn-secondary text-sm">+ Add Service</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 px-4 text-gray-700 font-semibold">Service Name</th>
                <th className="text-left py-3 px-4 text-gray-700 font-semibold">Price</th>
                <th className="text-left py-3 px-4 text-gray-700 font-semibold">Status</th>
                <th className="text-left py-3 px-4 text-gray-700 font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {extraServices.map((service) => (
                <tr key={service.id} className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium">{service.name}</td>
                  <td className="py-3 px-4">
                    <div className="flex items-center">
                      <span className="text-gray-600 mr-2">£</span>
                      <input
                        type="number"
                        value={service.price}
                        onChange={(e) => updateExtraService(service.id, 'price', parseFloat(e.target.value))}
                        className="input w-24"
                      />
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={service.active}
                        onChange={(e) => updateExtraService(service.id, 'active', e.target.checked)}
                        className="mr-2"
                      />
                      <span className={service.active ? 'text-green-600' : 'text-gray-400'}>
                        {service.active ? 'Active' : 'Inactive'}
                      </span>
                    </label>
                  </td>
                  <td className="py-3 px-4">
                    <button className="text-primary-600 hover:text-primary-800">
                      <FiEdit2 />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pricing Preview */}
      <div className="card mt-8">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Pricing Calculator Preview</h3>
        <div className="bg-gray-50 p-6 rounded-lg">
          <div className="grid md:grid-cols-3 gap-4">
            {pricingRules.map((rule) => (
              <div key={rule.id} className="bg-white p-4 rounded-lg border border-gray-200">
                <h4 className="font-bold text-gray-900 mb-2">{rule.propertyType}</h4>
                <div className="space-y-2 text-sm text-gray-600">
                  <div>Base: £{rule.basePrice}</div>
                  <div>+ Bedroom: £{rule.bedroomPrice}</div>
                  <div>+ Bathroom: £{rule.bathroomPrice}</div>
                  <div className="border-t pt-2 mt-2 font-semibold text-gray-900">
                    Example (2 bed, 1 bath): £{rule.basePrice + rule.bedroomPrice + rule.bathroomPrice}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pricing
