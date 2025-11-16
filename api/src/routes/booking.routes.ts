import { Router } from 'express'
import { body } from 'express-validator'
import {
  createBooking,
  getBookings,
  getBookingById,
  updateBookingStatus,
  cancelBooking
} from '../controllers/booking.controller'
import { authenticateToken } from '../middleware/auth.middleware'

const router = Router()

// Create new booking
router.post(
  '/',
  [
    body('propertyType').isIn(['studio', 'apartment', 'house']),
    body('bedrooms').isInt({ min: 0, max: 10 }),
    body('bathrooms').isInt({ min: 1, max: 10 }),
    body('address').notEmpty(),
    body('postcode').notEmpty(),
    body('city').notEmpty(),
    body('scheduledDate').isDate(),
    body('scheduledTime').matches(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/),
    body('email').isEmail(),
    body('firstName').notEmpty(),
    body('lastName').notEmpty(),
    body('phone').notEmpty()
  ],
  createBooking
)

// Get all bookings for user (protected)
router.get('/', authenticateToken, getBookings)

// Get single booking by ID
router.get('/:id', getBookingById)

// Update booking status (admin only)
router.patch('/:id/status', authenticateToken, updateBookingStatus)

// Cancel booking
router.post('/:id/cancel', authenticateToken, cancelBooking)

export default router
