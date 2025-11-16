import { FiCalendar, FiDollarSign, FiUsers, FiTrendingUp } from 'react-icons/fi'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts'

const Dashboard = () => {
  const stats = [
    { name: 'Total Bookings', value: '124', icon: FiCalendar, change: '+12%', color: 'bg-blue-500' },
    { name: 'Revenue', value: '£24,800', icon: FiDollarSign, change: '+8%', color: 'bg-green-500' },
    { name: 'Customers', value: '89', icon: FiUsers, change: '+15%', color: 'bg-purple-500' },
    { name: 'Avg. Value', value: '£200', icon: FiTrendingUp, change: '+3%', color: 'bg-yellow-500' },
  ]

  const revenueData = [
    { month: 'Jan', revenue: 12000 },
    { month: 'Feb', revenue: 15000 },
    { month: 'Mar', revenue: 18000 },
    { month: 'Apr', revenue: 16000 },
    { month: 'May', revenue: 22000 },
    { month: 'Jun', revenue: 24800 },
  ]

  const bookingsData = [
    { day: 'Mon', bookings: 12 },
    { day: 'Tue', bookings: 19 },
    { day: 'Wed', bookings: 15 },
    { day: 'Thu', bookings: 22 },
    { day: 'Fri', bookings: 28 },
    { day: 'Sat', bookings: 18 },
    { day: 'Sun', bookings: 10 },
  ]

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600 mt-2">Welcome to IBA Global Service Admin</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => {
          const Icon = stat.icon
          return (
            <div key={stat.name} className="card">
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 ${stat.color} rounded-lg flex items-center justify-center`}>
                  <Icon className="text-2xl text-white" />
                </div>
                <span className="text-green-600 text-sm font-semibold">{stat.change}</span>
              </div>
              <h3 className="text-gray-600 text-sm">{stat.name}</h3>
              <p className="text-3xl font-bold text-gray-900 mt-1">{stat.value}</p>
            </div>
          )
        })}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Revenue Chart */}
        <div className="card">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Revenue Trend</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="revenue" stroke="#8b5cf6" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Bookings Chart */}
        <div className="card">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Weekly Bookings</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={bookingsData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="bookings" fill="#8b5cf6" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="card">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Recent Bookings</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 px-4 text-gray-700">ID</th>
                <th className="text-left py-3 px-4 text-gray-700">Customer</th>
                <th className="text-left py-3 px-4 text-gray-700">Date</th>
                <th className="text-left py-3 px-4 text-gray-700">Amount</th>
                <th className="text-left py-3 px-4 text-gray-700">Status</th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3, 4, 5].map((i) => (
                <tr key={i} className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4">#{1000 + i}</td>
                  <td className="py-3 px-4">John Doe</td>
                  <td className="py-3 px-4">2024-11-{15 + i}</td>
                  <td className="py-3 px-4">£{180 + i * 10}</td>
                  <td className="py-3 px-4">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-800">
                      Confirmed
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
