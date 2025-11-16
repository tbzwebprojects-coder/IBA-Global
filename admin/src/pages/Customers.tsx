import { FiSearch, FiMail, FiPhone } from 'react-icons/fi'

const Customers = () => {
  const customers = [
    { id: 1, name: 'Sarah Johnson', email: 'sarah@example.com', phone: '+44 7123 456789', bookings: 3, totalSpent: 540, lastBooking: '2024-11-15', joinedDate: '2024-08-10' },
    { id: 2, name: 'Michael Chen', email: 'michael@example.com', phone: '+44 7234 567890', bookings: 2, totalSpent: 360, lastBooking: '2024-11-10', joinedDate: '2024-09-05' },
    { id: 3, name: 'Emma Williams', email: 'emma@example.com', phone: '+44 7345 678901', bookings: 1, totalSpent: 180, lastBooking: '2024-11-08', joinedDate: '2024-10-20' },
    { id: 4, name: 'David Brown', email: 'david@example.com', phone: '+44 7456 789012', bookings: 4, totalSpent: 720, lastBooking: '2024-11-12', joinedDate: '2024-07-15' },
    { id: 5, name: 'Lisa Martinez', email: 'lisa@example.com', phone: '+44 7567 890123', bookings: 2, totalSpent: 400, lastBooking: '2024-11-14', joinedDate: '2024-09-25' },
  ]

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Customers</h1>
        <p className="text-gray-600 mt-2">Customer relationship management</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="card">
          <h3 className="text-gray-600 text-sm mb-2">Total Customers</h3>
          <p className="text-3xl font-bold text-gray-900">89</p>
          <span className="text-green-600 text-sm">+12 this month</span>
        </div>
        <div className="card">
          <h3 className="text-gray-600 text-sm mb-2">Active Customers</h3>
          <p className="text-3xl font-bold text-gray-900">67</p>
          <span className="text-blue-600 text-sm">75% active rate</span>
        </div>
        <div className="card">
          <h3 className="text-gray-600 text-sm mb-2">Avg. Lifetime Value</h3>
          <p className="text-3xl font-bold text-gray-900">£420</p>
          <span className="text-purple-600 text-sm">Per customer</span>
        </div>
        <div className="card">
          <h3 className="text-gray-600 text-sm mb-2">Repeat Rate</h3>
          <p className="text-3xl font-bold text-gray-900">68%</p>
          <span className="text-yellow-600 text-sm">2+ bookings</span>
        </div>
      </div>

      {/* Search */}
      <div className="card mb-6">
        <div className="relative">
          <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search customers by name, email, or phone..."
            className="input pl-10"
          />
        </div>
      </div>

      {/* Customers Table */}
      <div className="card overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="text-left py-3 px-4 text-gray-700 font-semibold">Customer</th>
              <th className="text-left py-3 px-4 text-gray-700 font-semibold">Contact</th>
              <th className="text-left py-3 px-4 text-gray-700 font-semibold">Bookings</th>
              <th className="text-left py-3 px-4 text-gray-700 font-semibold">Total Spent</th>
              <th className="text-left py-3 px-4 text-gray-700 font-semibold">Last Booking</th>
              <th className="text-left py-3 px-4 text-gray-700 font-semibold">Joined</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => (
              <tr key={customer.id} className="border-b hover:bg-gray-50 cursor-pointer">
                <td className="py-3 px-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
                      {customer.name.charAt(0)}
                    </div>
                    <div className="font-medium">{customer.name}</div>
                  </div>
                </td>
                <td className="py-3 px-4">
                  <div className="space-y-1">
                    <div className="flex items-center text-sm text-gray-600">
                      <FiMail className="mr-2" />
                      {customer.email}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <FiPhone className="mr-2" />
                      {customer.phone}
                    </div>
                  </div>
                </td>
                <td className="py-3 px-4 font-semibold">{customer.bookings}</td>
                <td className="py-3 px-4 font-semibold text-green-600">£{customer.totalSpent}</td>
                <td className="py-3 px-4 text-sm text-gray-600">{customer.lastBooking}</td>
                <td className="py-3 px-4 text-sm text-gray-600">{customer.joinedDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Customers
