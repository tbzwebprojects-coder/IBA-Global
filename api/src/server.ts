import express, { Application } from 'express'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
import dotenv from 'dotenv'
import rateLimit from 'express-rate-limit'

// Load environment variables
dotenv.config()

// Import routes
import authRoutes from './routes/auth.routes'
import bookingRoutes from './routes/booking.routes'
import serviceRoutes from './routes/service.routes'
import customerRoutes from './routes/customer.routes'
import paymentRoutes from './routes/payment.routes'
import adminRoutes from './routes/admin.routes'

// Initialize express app
const app: Application = express()
const PORT = process.env.PORT || 5000

// Security middleware
app.use(helmet())
app.use(cors({
  origin: [process.env.CLIENT_URL!, process.env.ADMIN_URL!],
  credentials: true
}))

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
})
app.use('/api/', limiter)

// Body parser middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Logging middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

// Health check route
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok', message: 'API is running' })
})

// API routes
app.use('/api/auth', authRoutes)
app.use('/api/bookings', bookingRoutes)
app.use('/api/services', serviceRoutes)
app.use('/api/customers', customerRoutes)
app.use('/api/payments', paymentRoutes)
app.use('/api/admin', adminRoutes)

// Error handling middleware
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err.stack)
  res.status(err.status || 500).json({
    error: {
      message: err.message || 'Internal Server Error',
      status: err.status || 500
    }
  })
})

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' })
})

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`)
  console.log(`📍 Environment: ${process.env.NODE_ENV}`)
  console.log(`🔗 Health check: http://localhost:${PORT}/health`)
})

export default app
