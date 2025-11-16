import { useState } from 'react'
import { FiSearch, FiEye } from 'react-icons/fi'

const Bookings = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')

  const bookings = [
    { id: 1001, customer: 'Sarah Johnson', email: 'sarah@example.com', phone: '+44 7123 456789', date: '2024-11-20', time: '10:00', address: '123 Main St, Manchester', propertyType: 'Apartment', bedrooms: 2, bathrooms: 1, total: 180, status: 'confirmed' },
    { id: 1002, customer: 'Michael Chen', email: 'michael@example.com', phone: '+44 7234 567890', date: '2024-11-21', time: '14:00', address: '456 Oak Ave, Salford', propertyType: 'House', bedrooms: 3, bathrooms: 2, total: 245, status: 'pending' },
    { id: 1003, customer: 'Emma Williams', email: 'emma@example.com', phone: '+44 7345 678901', date: '2024-11-22', time: '09:00', address: '789 Elm St, Stockport', propertyType: 'Studio', bedrooms: 0, bathrooms: 1, total: 150, status: 'completed' },
    { id: 1004, customer: 'David Brown', email: 'david@example.com', phone: '+44 7456 789012', date: '2024-11-23', time: '11:00', address: '321 Pine Rd, Trafford', propertyType: 'Apartment', bedrooms: 2, bathrooms: 1, total: 195, status: 'confirmed' },
    { id: 1005, customer: 'Lisa Martinez', email: 'lisa@example.com', phone: '+44 7567 890123', date: '2024-11-24', time: '15:00', address: '654 Maple Dr, Bolton', propertyType: 'House', bedrooms: 4, bathrooms: 3, total: 320, status: 'pending' },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed': return 'bg-green-100 text-green-800'
      case 'pending': return 'bg-yellow-100 text-yellow-800'
      case 'completed': return 'bg-blue-100 text-blue-800'
      case 'cancelled': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div>
      <div className="mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Bookings</h1>
          <p className="text-gray-600 mt-2">Manage all customer bookings</p>
        </div>
        <button className="btn-primary">+ New Booking</button>
      </div>

      {/* Filters */}
      <div className="card mb-6">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1 relative">
            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search by customer name, email, or booking ID..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="input pl-10"
            />
          </div>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="input sm:w-48"
          >
            <option value="all">All Status</option>
            <option value="pending">Pending</option>
            <option value="confirmed">Confirmed</option>
            <option value="completed">Completed</option>
            <option value="cancelled">Cancelled</option>
          </select>
        </div>
      </div>

      {/* Bookings Table */}
      <div className="card overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="text-left py-3 px-4 text-gray-700 font-semibold">Booking ID</th>
              <th className="text-left py-3 px-4 text-gray-700 font-semibold">Customer</th>
              <th className="text-left py-3 px-4 text-gray-700 font-semibold">Date & Time</th>
              <th className="text-left py-3 px-4 text-gray-700 font-semibold">Property</th>
              <th className="text-left py-3 px-4 text-gray-700 font-semibold">Total</th>
              <th className="text-left py-3 px-4 text-gray-700 font-semibold">Status</th>
              <th className="text-left py-3 px-4 text-gray-700 font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <tr key={booking.id} className="border-b hover:bg-gray-50">
                <td className="py-3 px-4 font-medium">#{booking.id}</td>
                <td className="py-3 px-4">
                  <div>
                    <div className="font-medium">{booking.customer}</div>
                    <div className="text-sm text-gray-600">{booking.email}</div>
                  </div>
                </td>
                <td className="py-3 px-4">
                  <div>
                    <div>{booking.date}</div>
                    <div className="text-sm text-gray-600">{booking.time}</div>
                  </div>
                </td>
                <td className="py-3 px-4">
                  <div>
                    <div className="font-medium">{booking.propertyType}</div>
                    <div className="text-sm text-gray-600">{booking.bedrooms} bed, {booking.bathrooms} bath</div>
                  </div>
                </td>
                <td className="py-3 px-4 font-semibold">£{booking.total}</td>
                <td className="py-3 px-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold capitalize ${getStatusColor(booking.status)}`}>
                    {booking.status}
                  </span>
                </td>
                <td className="py-3 px-4">
                  <button className="text-primary-600 hover:text-primary-800">
                    <FiEye className="text-lg" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Bookings
