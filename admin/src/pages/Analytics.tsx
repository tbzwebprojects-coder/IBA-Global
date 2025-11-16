import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, LineChart, Line, XAxis, YAxis, CartesianGrid } from 'recharts'

const Analytics = () => {
  const conversionData = [
    { stage: 'Website Visitors', count: 5000, rate: 100 },
    { stage: 'Quote Calculated', count: 800, rate: 16 },
    { stage: 'Booking Started', count: 300, rate: 6 },
    { stage: 'Payment Completed', count: 200, rate: 4 },
  ]

  const sourceData = [
    { name: 'Google Organic', value: 45 },
    { name: 'Direct', value: 25 },
    { name: 'Google Ads', value: 15 },
    { name: 'Social Media', value: 10 },
    { name: 'Referrals', value: 5 },
  ]

  const COLORS = ['#8b5cf6', '#06b6d4', '#10b981', '#f59e0b', '#ef4444']

  const performanceData = [
    { month: 'Jan', bookings: 45, revenue: 9000 },
    { month: 'Feb', revenue: 12000, bookings: 60 },
    { month: 'Mar', bookings: 70, revenue: 14000 },
    { month: 'Apr', bookings: 55, revenue: 11000 },
    { month: 'May', bookings: 85, revenue: 17000 },
    { month: 'Jun', bookings: 95, revenue: 19000 },
  ]

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Analytics & Reports</h1>
        <p className="text-gray-600 mt-2">Customer journey tracking and performance metrics</p>
      </div>

      {/* Conversion Funnel */}
      <div className="card mb-8">
        <h3 className="text-xl font-bold text-gray-900 mb-6">Conversion Funnel</h3>
        <div className="space-y-4">
          {conversionData.map((stage, index) => (
            <div key={index}>
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium text-gray-900">{stage.stage}</span>
                <div className="text-right">
                  <span className="font-bold text-gray-900">{stage.count}</span>
                  <span className="text-gray-600 ml-2">({stage.rate}%)</span>
                </div>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-4">
                <div
                  className="bg-gradient-to-r from-primary-600 to-purple-600 h-4 rounded-full transition-all"
                  style={{ width: `${stage.rate}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 p-4 bg-purple-50 rounded-lg">
          <h4 className="font-semibold text-gray-900 mb-2">Insights</h4>
          <ul className="space-y-1 text-sm text-gray-700">
            <li>• Overall conversion rate: 4% (200 bookings from 5,000 visitors)</li>
            <li>• Biggest drop-off: Quote Calculated → Booking Started (62.5% drop)</li>
            <li>• Recommendation: Add urgency messaging and time-limited offers</li>
          </ul>
        </div>
      </div>

      {/* Traffic Sources & Performance */}
      <div className="grid lg:grid-cols-2 gap-6 mb-8">
        {/* Traffic Sources */}
        <div className="card">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Traffic Sources</h3>
          <div className="flex items-center justify-center">
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={sourceData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {sourceData.map((_entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Monthly Performance */}
        <div className="card">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Bookings & Revenue Trend</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={performanceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis yAxisId="left" />
              <YAxis yAxisId="right" orientation="right" />
              <Tooltip />
              <Line yAxisId="left" type="monotone" dataKey="bookings" stroke="#8b5cf6" strokeWidth={2} />
              <Line yAxisId="right" type="monotone" dataKey="revenue" stroke="#10b981" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Customer Journey Details */}
      <div className="card">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Recent Customer Journeys</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 px-4 text-gray-700 font-semibold">Session ID</th>
                <th className="text-left py-3 px-4 text-gray-700 font-semibold">Source</th>
                <th className="text-left py-3 px-4 text-gray-700 font-semibold">Pages Visited</th>
                <th className="text-left py-3 px-4 text-gray-700 font-semibold">Time on Site</th>
                <th className="text-left py-3 px-4 text-gray-700 font-semibold">Outcome</th>
              </tr>
            </thead>
            <tbody>
              {[
                { id: 'A1B2C3', source: 'Google Organic', pages: 5, time: '8:32', outcome: 'Converted' },
                { id: 'D4E5F6', source: 'Direct', pages: 3, time: '4:15', outcome: 'Bounced' },
                { id: 'G7H8I9', source: 'Google Ads', pages: 7, time: '12:45', outcome: 'Converted' },
                { id: 'J1K2L3', source: 'Facebook', pages: 2, time: '1:30', outcome: 'Bounced' },
                { id: 'M4N5O6', source: 'Google Organic', pages: 6, time: '9:20', outcome: 'Quote Only' },
              ].map((journey) => (
                <tr key={journey.id} className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4 font-mono text-sm">{journey.id}</td>
                  <td className="py-3 px-4">{journey.source}</td>
                  <td className="py-3 px-4">{journey.pages} pages</td>
                  <td className="py-3 px-4">{journey.time}</td>
                  <td className="py-3 px-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      journey.outcome === 'Converted' ? 'bg-green-100 text-green-800' :
                      journey.outcome === 'Bounced' ? 'bg-red-100 text-red-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {journey.outcome}
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

export default Analytics
