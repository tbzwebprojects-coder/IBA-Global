import { Router } from 'express'
import pool from '../database/db'

const router = Router()

router.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM services WHERE is_active = true')
    res.json({ services: result.rows })
  } catch (error: any) {
    res.status(500).json({ error: error.message })
  }
})

router.get('/pricing', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM pricing_rules')
    res.json({ pricing: result.rows })
  } catch (error: any) {
    res.status(500).json({ error: error.message })
  }
})

export default router
