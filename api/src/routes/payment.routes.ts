import { Router } from 'express'
import Stripe from 'stripe'

const router = Router()
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-10-16'
})

router.post('/create-intent', async (req, res) => {
  try {
    const { amount } = req.body

    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(amount * 100), // Convert to cents
      currency: 'gbp',
      automatic_payment_methods: { enabled: true }
    })

    res.json({ clientSecret: paymentIntent.client_secret })
  } catch (error: any) {
    res.status(500).json({ error: error.message })
  }
})

router.post('/webhook', async (req, res) => {
  res.json({ received: true })
})

export default router
