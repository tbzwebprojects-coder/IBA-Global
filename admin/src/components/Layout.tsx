import { ReactNode, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FiHome, FiCalendar, FiUsers, FiDollarSign, FiBarChart2, FiMenu, FiX } from 'react-icons/fi'
import { useState } from 'react'

interface LayoutProps {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation()
  const [sidebarOpen, setSidebarOpen] = useState(false)

  useEffect(() => {
    const isDesktop = window.innerWidth >= 640
    setSidebarOpen(isDesktop)
  }, [])

  const navigation = [
    { name: 'Dashboard', href: '/', icon: FiHome },
    { name: 'Bookings', href: '/bookings', icon: FiCalendar },
    { name: 'Customers', href: '/customers', icon: FiUsers },
    { name: 'Pricing', href: '/pricing', icon: FiDollarSign },
    { name: 'Analytics', href: '/analytics', icon: FiBarChart2 },
  ]

  return (
    <div className="min-h-screen bg-gray-50" style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}>
      {/* Sidebar */}
      <aside className={`fixed top-0 left-0 z-40 h-screen transition-transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} sm:translate-x-0 w-72 sm:w-64 bg-gradient-to-b from-primary-600 to-purple-700 shadow-xl sm:shadow-none`}>
        <div className="relative h-full px-3 py-4 overflow-y-auto">
          <button
            onClick={() => setSidebarOpen(false)}
            className="sm:hidden absolute top-3 right-3 text-white/80 hover:text-white"
            aria-label="Close menu"
          >
            <FiX className="text-2xl" />
          </button>
          <div className="flex items-center mb-8 px-4">
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center mr-3">
              <span className="text-primary-600 font-bold text-xl">IBA</span>
            </div>
            <div>
              <h1 className="text-white font-bold text-lg">IBA Global</h1>
              <p className="text-purple-200 text-xs">Admin Dashboard</p>
            </div>
          </div>

          <ul className="space-y-2">
            {navigation.map((item) => {
              const Icon = item.icon
              const isActive = location.pathname === item.href
              return (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className={`flex items-center p-3 rounded-lg transition-colors ${
                      isActive
                        ? 'bg-white text-primary-600'
                        : 'text-white hover:bg-white/10'
                    }`}
                    onClick={() => setSidebarOpen(false)}
                  >
                    <Icon className="text-xl mr-3" />
                    <span className="font-medium">{item.name}</span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </aside>

      <div
        className={sidebarOpen ? 'fixed inset-0 bg-black/30 backdrop-blur-sm z-30 sm:hidden' : 'hidden'}
        onClick={() => setSidebarOpen(false)}
      />

      {/* Main Content */}
      <div className="sm:ml-64">
        {/* Top Bar */}
        <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-30">
          <div className="flex items-center justify-between px-6 py-4">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="sm:hidden text-gray-600 hover:text-gray-900"
            >
              <FiMenu className="text-2xl" />
            </button>
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <p className="text-sm font-semibold text-gray-900">Admin User</p>
                <p className="text-xs text-gray-600">admin@ibacleaning.co.uk</p>
              </div>
              <div className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold">
                A
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  )
}

export default Layout
