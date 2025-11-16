import { Request, Response } from 'express'
import { validationResult } from 'express-validator'
import pool from '../database/db'
import { sendWhatsAppNotification } from '../services/whatsapp.service'
import { sendBookingConfirmationEmail } from '../services/email.service'

export const createBooking = async (req: Request, res: Response) => {
  try {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }

    const {
      propertyType,
      bedrooms,
      bathrooms,
      address,
      postcode,
      city,
      scheduledDate,
      scheduledTime,
      extraServices,
      totalPrice,
      email,
      firstName,
      lastName,
      phone,
      specialInstructions
    } = req.body

    // Create or find user
    let userId
    const userResult = await pool.query(
      'SELECT id FROM users WHERE email = $1',
      [email]
    )

    if (userResult.rows.length > 0) {
      userId = userResult.rows[0].id
    } else {
      // Create new customer account
      const newUser = await pool.query(
        'INSERT INTO users (email, first_name, last_name, phone, password_hash, role) VALUES ($1, $2, $3, $4, $5, $6) RETURNING id',
        [email, firstName, lastName, phone, 'temp_password_hash', 'customer']
      )
      userId = newUser.rows[0].id
    }

    // Calculate base price
    const pricingResult = await pool.query(
      'SELECT base_price, bedroom_price, bathroom_price FROM pricing_rules WHERE property_type = $1',
      [propertyType]
    )
    
    const pricing = pricingResult.rows[0]
    const basePrice = pricing.base_price + 
                      (Math.max(0, bedrooms - 1) * pricing.bedroom_price) + 
                      (Math.max(0, bathrooms - 1) * pricing.bathroom_price)

    // Create booking
    const bookingResult = await pool.query(
      `INSERT INTO bookings 
       (user_id, property_type, bedrooms, bathrooms, address, postcode, city, 
        scheduled_date, scheduled_time, base_price, extra_services, total_price, 
        special_instructions, status) 
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14) 
       RETURNING *`,
      [userId, propertyType, bedrooms, bathrooms, address, postcode, city,
       scheduledDate, scheduledTime, basePrice, JSON.stringify(extraServices || {}), 
       totalPrice, specialInstructions, 'pending']
    )

    const booking = bookingResult.rows[0]

    // Send WhatsApp notification
    await sendWhatsAppNotification(phone, `
Hello ${firstName}! 🎉

Your cleaning booking has been received!

📅 Date: ${scheduledDate}
⏰ Time: ${scheduledTime}
📍 Address: ${address}, ${city}
💰 Total: £${totalPrice}

Booking ID: #${booking.id}

We'll send you a confirmation soon. Thank you for choosing IBA Global Service!
    `)

    // Send email confirmation
    await sendBookingConfirmationEmail({
      email,
      firstName,
      booking: {
        id: booking.id,
        date: scheduledDate,
        time: scheduledTime,
        address,
        city,
        postcode,
        totalPrice
      }
    })

    res.status(201).json({
      success: true,
      booking,
      message: 'Booking created successfully'
    })

  } catch (error: any) {
    console.error('Booking creation error:', error)
    res.status(500).json({ error: error.message })
  }
}

export const getBookings = async (req: Request, res: Response) => {
  try {
    const userId = (req as any).user.id
    
    const result = await pool.query(
      `SELECT b.*, u.email, u.first_name, u.last_name, u.phone 
       FROM bookings b 
       JOIN users u ON b.user_id = u.id 
       WHERE b.user_id = $1 
       ORDER BY b.created_at DESC`,
      [userId]
    )

    res.json({ bookings: result.rows })
  } catch (error: any) {
    console.error('Get bookings error:', error)
    res.status(500).json({ error: error.message })
  }
}

export const getBookingById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    
    const result = await pool.query(
      `SELECT b.*, u.email, u.first_name, u.last_name, u.phone 
       FROM bookings b 
       JOIN users u ON b.user_id = u.id 
       WHERE b.id = $1`,
      [id]
    )

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Booking not found' })
    }

    res.json({ booking: result.rows[0] })
  } catch (error: any) {
    console.error('Get booking error:', error)
    res.status(500).json({ error: error.message })
  }
}

export const updateBookingStatus = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const { status } = req.body

    const result = await pool.query(
      'UPDATE bookings SET status = $1, updated_at = CURRENT_TIMESTAMP WHERE id = $2 RETURNING *',
      [status, id]
    )

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Booking not found' })
    }

    res.json({ booking: result.rows[0], message: 'Booking updated successfully' })
  } catch (error: any) {
    console.error('Update booking error:', error)
    res.status(500).json({ error: error.message })
  }
}

export const cancelBooking = async (req: Request, res: Response) => {
  try {
    const { id } = req.params

    const result = await pool.query(
      'UPDATE bookings SET status = $1, updated_at = CURRENT_TIMESTAMP WHERE id = $2 RETURNING *',
      ['cancelled', id]
    )

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Booking not found' })
    }

    res.json({ booking: result.rows[0], message: 'Booking cancelled successfully' })
  } catch (error: any) {
    console.error('Cancel booking error:', error)
    res.status(500).json({ error: error.message })
  }
}
