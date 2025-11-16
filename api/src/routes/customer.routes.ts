import { Router } from 'express'
import { authenticateToken } from '../middleware/auth.middleware'

const router = Router()

router.get('/profile', authenticateToken, (req, res) => {
  res.json({ message: 'Customer profile endpoint' })
})

router.patch('/profile', authenticateToken, (req, res) => {
  res.json({ message: 'Update profile endpoint' })
})

export default router
