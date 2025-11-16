import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { prettyJSON } from 'hono/pretty-json'
import { jwt } from 'hono/jwt'

// Types for Cloudflare Workers environment
type Bindings = {
  DB: D1Database
  JWT_SECRET: string
  STRIPE_SECRET_KEY: string
  CLIENT_URL: string
  ADMIN_URL: string
}

const app = new Hono<{ Bindings: Bindings }>()

// Middleware
app.use('*', prettyJSON())
app.use('*', cors({
  origin: (origin, c) => {
    const allowedOrigins = [c.env.CLIENT_URL, c.env.ADMIN_URL]
    return allowedOrigins.includes(origin) ? origin : allowedOrigins[0]
  },
  credentials: true,
}))

// Health check
app.get('/health', (c) => {
  return c.json({ status: 'ok', message: 'API is running on Cloudflare Workers' })
})

// Auth routes
app.post('/api/auth/register', async (c) => {
  const body = await c.req.json()
  // TODO: Implement registration logic with D1
  return c.json({ message: 'Registration endpoint' }, 501)
})

app.post('/api/auth/login', async (c) => {
  const body = await c.req.json()
  // TODO: Implement login logic with D1
  return c.json({ message: 'Login endpoint' }, 501)
})

// Protected routes (require JWT)
app.use('/api/bookings/*', jwt({ secret: async (c) => c.env.JWT_SECRET }))
app.use('/api/customers/*', jwt({ secret: async (c) => c.env.JWT_SECRET }))
app.use('/api/admin/*', jwt({ secret: async (c) => c.env.JWT_SECRET }))

// Booking routes
app.get('/api/bookings', async (c) => {
  const db = c.env.DB
  const bookings = await db.prepare('SELECT * FROM bookings').all()
  return c.json({ bookings: bookings.results })
})

app.post('/api/bookings', async (c) => {
  const body = await c.req.json()
  const db = c.env.DB
  
  // Insert booking into D1
  await db.prepare(`
    INSERT INTO bookings (customer_id, service_id, booking_date, status, total_amount)
    VALUES (?, ?, ?, ?, ?)
  `).bind(
    body.customer_id,
    body.service_id,
    body.booking_date,
    'pending',
    body.total_amount
  ).run()
  
  return c.json({ message: 'Booking created', success: true }, 201)
})

// Service routes (public)
app.get('/api/services', async (c) => {
  const db = c.env.DB
  const services = await db.prepare('SELECT * FROM services WHERE active = 1').all()
  return c.json({ services: services.results })
})

app.get('/api/services/:id', async (c) => {
  const id = c.req.param('id')
  const db = c.env.DB
  const service = await db.prepare('SELECT * FROM services WHERE id = ?').bind(id).first()
  
  if (!service) {
    return c.json({ error: 'Service not found' }, 404)
  }
  
  return c.json({ service })
})

// Payment routes
app.post('/api/payments/create-intent', async (c) => {
  const body = await c.req.json()
  
  // Initialize Stripe (Workers-compatible)
  const stripe = await import('stripe').then(m => new m.default(c.env.STRIPE_SECRET_KEY, {
    apiVersion: '2023-10-16',
  }))
  
  const paymentIntent = await stripe.paymentIntents.create({
    amount: Math.round(body.amount * 100),
    currency: 'gbp',
    automatic_payment_methods: { enabled: true },
  })
  
  return c.json({ clientSecret: paymentIntent.client_secret })
})

// Customer routes
app.get('/api/customers', async (c) => {
  const db = c.env.DB
  const customers = await db.prepare('SELECT * FROM customers').all()
  return c.json({ customers: customers.results })
})

// Admin routes
app.get('/api/admin/dashboard', async (c) => {
  const db = c.env.DB
  
  // Get stats
  const totalBookings = await db.prepare('SELECT COUNT(*) as count FROM bookings').first()
  const totalRevenue = await db.prepare('SELECT SUM(total_amount) as total FROM bookings WHERE status = ?').bind('completed').first()
  const totalCustomers = await db.prepare('SELECT COUNT(*) as count FROM customers').first()
  
  return c.json({
    stats: {
      totalBookings: totalBookings?.count || 0,
      totalRevenue: totalRevenue?.total || 0,
      totalCustomers: totalCustomers?.count || 0,
    }
  })
})

// 404 handler
app.notFound((c) => {
  return c.json({ error: 'Route not found' }, 404)
})

// Error handler
app.onError((err, c) => {
  console.error(err)
  return c.json({
    error: {
      message: err.message || 'Internal Server Error',
      status: 500
    }
  }, 500)
})

export default app
