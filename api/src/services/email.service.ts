import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: parseInt(process.env.EMAIL_PORT || '587'),
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
})

export const sendBookingConfirmationEmail = async (data: {
  email: string
  firstName: string
  booking: {
    id: number
    date: string
    time: string
    address: string
    city: string
    postcode: string
    totalPrice: number
  }
}) => {
  try {
    const { email, firstName, booking } = data

    const mailOptions = {
      from: process.env.EMAIL_FROM,
      to: email,
      subject: 'Booking Confirmation - IBA Global Service',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
            .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
            .booking-details { background: white; padding: 20px; border-radius: 8px; margin: 20px 0; }
            .detail-row { padding: 10px 0; border-bottom: 1px solid #eee; }
            .detail-label { font-weight: bold; color: #667eea; }
            .button { background: #667eea; color: white; padding: 15px 30px; text-decoration: none; border-radius: 50px; display: inline-block; margin: 20px 0; }
            .footer { text-align: center; color: #999; font-size: 12px; margin-top: 30px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Booking Confirmed! 🎉</h1>
            </div>
            <div class="content">
              <p>Dear ${firstName},</p>
              <p>Thank you for choosing <strong>IBA Global Service</strong>! Your booking has been confirmed.</p>
              
              <div class="booking-details">
                <h3>Booking Details:</h3>
                <div class="detail-row">
                  <span class="detail-label">Booking ID:</span> #${booking.id}
                </div>
                <div class="detail-row">
                  <span class="detail-label">Date:</span> ${booking.date}
                </div>
                <div class="detail-row">
                  <span class="detail-label">Time:</span> ${booking.time}
                </div>
                <div class="detail-row">
                  <span class="detail-label">Address:</span> ${booking.address}, ${booking.city}, ${booking.postcode}
                </div>
                <div class="detail-row">
                  <span class="detail-label">Total Amount:</span> £${booking.totalPrice}
                </div>
              </div>

              <p>We've also sent you a WhatsApp message with your booking details.</p>
              
              <p><strong>What's Next?</strong></p>
              <ul>
                <li>Our team will contact you 24 hours before your appointment</li>
                <li>Please ensure access to the property at the scheduled time</li>
                <li>If you need to reschedule, contact us at least 48 hours in advance</li>
              </ul>

              <div style="text-align: center;">
                <a href="${process.env.CLIENT_URL}/bookings/${booking.id}" class="button">View Booking</a>
              </div>

              <p>If you have any questions, feel free to reach out via WhatsApp or email.</p>
              
              <p>Best regards,<br><strong>IBA Global Service Team</strong></p>
            </div>
            <div class="footer">
              <p>&copy; 2024 IBA Global Service LTD. All rights reserved.</p>
              <p>Greater Manchester, United Kingdom</p>
            </div>
          </div>
        </body>
        </html>
      `
    }

    const result = await transporter.sendMail(mailOptions)
    console.log('✅ Email sent:', result.messageId)
    return result
  } catch (error) {
    console.error('❌ Email send error:', error)
    throw error
  }
}

export const sendEmail = async (to: string, subject: string, html: string) => {
  try {
    const result = await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to,
      subject,
      html
    })
    console.log('✅ Email sent:', result.messageId)
    return result
  } catch (error) {
    console.error('❌ Email send error:', error)
    throw error
  }
}
