import { Router } from 'express'
const router = Router()

router.post('/register', (req, res) => {
  res.json({ message: 'Register endpoint' })
})

router.post('/login', (req, res) => {
  res.json({ message: 'Login endpoint' })
})

router.post('/refresh', (req, res) => {
  res.json({ message: 'Token refresh endpoint' })
})

export default router
