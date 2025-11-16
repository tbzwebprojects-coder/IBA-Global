import twilio from 'twilio'
import pool from '../database/db'

const client = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
)

export const sendWhatsAppNotification = async (to: string, message: string, bookingId?: number, userId?: number) => {
  try {
    // Format phone number for WhatsApp
    const whatsappNumber = to.startsWith('+') ? `whatsapp:${to}` : `whatsapp:+${to}`
    
    const result = await client.messages.create({
      from: process.env.TWILIO_WHATSAPP_NUMBER,
      to: whatsappNumber,
      body: message
    })

    // Log to database
    await pool.query(
      'INSERT INTO whatsapp_messages (booking_id, user_id, phone_number, message, message_sid, status) VALUES ($1, $2, $3, $4, $5, $6)',
      [bookingId || null, userId || null, to, message, result.sid, 'sent']
    )

    console.log('✅ WhatsApp message sent:', result.sid)
    return result
  } catch (error) {
    console.error('❌ WhatsApp send error:', error)
    
    // Log failure
    if (bookingId || userId) {
      await pool.query(
        'INSERT INTO whatsapp_messages (booking_id, user_id, phone_number, message, status) VALUES ($1, $2, $3, $4, $5)',
        [bookingId || null, userId || null, to, message, 'failed']
      )
    }
    
    throw error
  }
}
