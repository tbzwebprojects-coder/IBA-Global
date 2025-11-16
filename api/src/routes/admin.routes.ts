import { Router } from 'express'
import { authenticateAdmin } from '../middleware/auth.middleware'
import pool from '../database/db'

const router = Router()

// Get all bookings (admin)
router.get('/bookings', authenticateAdmin, async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT b.*, u.email, u.first_name, u.last_name, u.phone 
      FROM bookings b 
      JOIN users u ON b.user_id = u.id 
      ORDER BY b.created_at DESC
    `)
    res.json({ bookings: result.rows })
  } catch (error: any) {
    res.status(500).json({ error: error.message })
  }
})

// Update pricing
router.put('/pricing/:id', authenticateAdmin, async (req, res) => {
  try {
    const { id } = req.params
    const { base_price, bedroom_price, bathroom_price } = req.body
    
    const result = await pool.query(
      'UPDATE pricing_rules SET base_price = $1, bedroom_price = $2, bathroom_price = $3, updated_at = CURRENT_TIMESTAMP WHERE id = $4 RETURNING *',
      [base_price, bedroom_price, bathroom_price, id]
    )
    
    res.json({ pricing: result.rows[0] })
  } catch (error: any) {
    res.status(500).json({ error: error.message })
  }
})

// Analytics dashboard
router.get('/analytics', authenticateAdmin, async (req, res) => {
  try {
    const stats = await pool.query(`
      SELECT 
        COUNT(*) as total_bookings,
        SUM(CASE WHEN status = 'completed' THEN 1 ELSE 0 END) as completed,
        SUM(CASE WHEN payment_status = 'paid' THEN total_price ELSE 0 END) as total_revenue
      FROM bookings
    `)
    
    res.json({ stats: stats.rows[0] })
  } catch (error: any) {
    res.status(500).json({ error: error.message })
  }
})

export default router
