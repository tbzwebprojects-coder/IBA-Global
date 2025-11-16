# IBA Global Service LTD - API Server

Node.js/Express API server with PostgreSQL, Stripe payments, and WhatsApp integration.

## Features

- 🔐 JWT authentication
- 💳 Stripe payment integration
- 📱 WhatsApp notifications (Twilio)
- 📧 Email notifications
- 🗄️ PostgreSQL database
- 🛡️ Security with Helmet & Rate Limiting
- 📊 Analytics & customer journey tracking

## Tech Stack

- **Runtime:** Node.js with TypeScript
- **Framework:** Express.js
- **Database:** PostgreSQL
- **Payment:** Stripe
- **Messaging:** Twilio (WhatsApp), Nodemailer (Email)
- **Auth:** JWT

## Getting Started

### Prerequisites

- Node.js 18+
- PostgreSQL 14+

### Installation

```bash
# Install dependencies
npm install

# Copy environment variables
cp .env.example .env

# Update .env with your values
```

### Database Setup

```bash
# Create database
createdb iba_cleaning

# Run schema
psql iba_cleaning < src/database/schema.sql
```

### Development

```bash
# Run dev server with auto-reload
npm run dev
```

### Build & Production

```bash
# Build TypeScript
npm run build

# Run production server
npm start
```

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `POST /api/auth/refresh` - Refresh JWT token

### Bookings
- `POST /api/bookings` - Create booking
- `GET /api/bookings` - Get user bookings
- `GET /api/bookings/:id` - Get booking by ID
- `PATCH /api/bookings/:id/status` - Update status (admin)
- `POST /api/bookings/:id/cancel` - Cancel booking

### Services
- `GET /api/services` - Get all services
- `GET /api/services/pricing` - Get pricing rules

### Payments
- `POST /api/payments/create-intent` - Create Stripe payment intent
- `POST /api/payments/webhook` - Stripe webhook handler

### Admin
- `GET /api/admin/bookings` - Get all bookings
- `PUT /api/admin/pricing/:id` - Update pricing
- `GET /api/admin/analytics` - Get dashboard stats

### Customers
- `GET /api/customers/profile` - Get customer profile
- `PATCH /api/customers/profile` - Update profile

## Database Schema

### Tables
- **users** - Customer and admin accounts
- **bookings** - Cleaning bookings
- **services** - Available services
- **pricing_rules** - Dynamic pricing by property type
- **payments** - Payment records
- **reviews** - Customer reviews
- **whatsapp_messages** - WhatsApp message log
- **customer_journey** - Analytics tracking

## Environment Variables

```env
PORT=5000
NODE_ENV=development
DATABASE_URL=postgresql://user:password@localhost:5432/iba_cleaning
JWT_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=sk_test_...
TWILIO_ACCOUNT_SID=AC...
TWILIO_AUTH_TOKEN=...
TWILIO_WHATSAPP_NUMBER=whatsapp:+14155238886
EMAIL_HOST=smtp.gmail.com
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_password
CLIENT_URL=http://localhost:3000
ADMIN_URL=http://localhost:3001
```

## WhatsApp Integration

The API uses Twilio WhatsApp Business API to send booking confirmations and updates:

1. Sign up for Twilio WhatsApp Business
2. Add your credentials to `.env`
3. Test with Twilio sandbox number

## Stripe Integration

Payment flow:
1. Client creates booking and gets payment intent
2. Client completes payment with Stripe.js
3. Webhook confirms payment
4. Booking status updated to 'paid'

## Deployment

### Heroku

```bash
heroku create iba-cleaning-api
heroku addons:create heroku-postgresql:hobby-dev
git push heroku main
```

### Railway/Render

1. Connect GitHub repository
2. Add environment variables
3. Deploy

## License

© 2024 IBA Global Service LTD. All rights reserved.
