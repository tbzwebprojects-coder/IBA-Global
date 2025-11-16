import { Routes, Route, Navigate } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import Layout from './components/Layout'
import Dashboard from './pages/Dashboard'
import Bookings from './pages/Bookings'
import Customers from './pages/Customers'
import Pricing from './pages/Pricing'
import Analytics from './pages/Analytics'
import Login from './pages/Login'

function App() {
  const isAuthenticated = true // TODO: Implement proper auth

  if (!isAuthenticated) {
    return <Login />
  }

  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/bookings" element={<Bookings />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
      <Toaster position="top-right" />
    </>
  )
}

export default App
