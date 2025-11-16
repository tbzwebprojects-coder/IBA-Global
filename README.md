# IBA Global Service LTD - End of Tenancy Cleaning Platform

Complete web application for professional end-of-tenancy cleaning services in Greater Manchester.

## 🎯 Project Overview

This is a complete, production-ready cleaning service platform consisting of three repositories:

1. **Client** - Customer-facing website with instant quote calculator
2. **API** - Backend server with PostgreSQL, Stripe, and WhatsApp integration
3. **Admin** - Dashboard for booking management, CRM, pricing control, and analytics

## ✨ Key Features

### Client Website
- 🎨 Modern, professional design with soft purple accents
- 💰 **Instant Quote Calculator** with transparent price breakdown
- 📅 24/7 online booking system
- 💳 Complete Stripe payment integration
- 📱 WhatsApp instant notifications
- 🗺️ Interactive service area map
- ⭐ Customer reviews and testimonials
- 📱 Fully responsive (mobile, tablet, desktop)

### API Server
- 🔐 JWT authentication
- 💳 Stripe payment processing
- 📱 Twilio WhatsApp API integration
- 📧 Automated email notifications
- 🗄️ PostgreSQL database
- 🛡️ Security with Helmet & Rate Limiting
- 📊 Customer journey tracking

### Admin Dashboard
- 📊 Real-time analytics and reporting
- 📅 Complete booking management
- 👥 Customer CRM with lifetime value
- 💰 Dynamic pricing control
- 📈 Conversion funnel visualization
- 📱 Responsive admin interface

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- PostgreSQL 14+
- npm or yarn

### Installation

```bash
# Clone or navigate to project
cd iba-cleaning-service

# Install all dependencies
cd client && npm install
cd ../api && npm install
cd ../admin && npm install
```

### Environment Setup

Copy `.env.example` to `.env` in each folder and configure:

**Client** (`client/.env`):
```env
NEXT_PUBLIC_API_URL=http://localhost:5000
NEXT_PUBLIC_STRIPE_PUBLIC_KEY=pk_test_...
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=...
```

**API** (`api/.env`):
```env
DATABASE_URL=postgresql://user:password@localhost:5432/iba_cleaning
JWT_SECRET=your_secret
STRIPE_SECRET_KEY=sk_test_...
TWILIO_ACCOUNT_SID=...
TWILIO_AUTH_TOKEN=...
TWILIO_WHATSAPP_NUMBER=whatsapp:+14155238886
EMAIL_HOST=smtp.gmail.com
EMAIL_USER=...
EMAIL_PASS=...
```

**Admin** (`admin/.env`):
```env
VITE_API_URL=http://localhost:5000
```

### Database Setup

```bash
# Create database
createdb iba_cleaning

# Run schema
cd api
psql iba_cleaning < src/database/schema.sql
```

### Running the Application

Open three terminal windows:

```bash
# Terminal 1 - API Server
cd api
npm run dev
# Runs on http://localhost:3001

# Terminal 2 - Client Website
cd client
npm run dev
# Runs on http://localhost:3000

# Terminal 3 - Admin Dashboard
cd admin
npm run dev
# Runs on http://localhost:5173
```

## 📁 Project Structure

```
iba-cleaning-service/
├── client/              # Next.js customer website
│   ├── src/
│   │   ├── app/         # Pages and routing
│   │   └── components/  # Reusable components
│   ├── package.json
│   └── README.md
│
├── api/                 # Express API server
│   ├── src/
│   │   ├── routes/      # API endpoints
│   │   ├── controllers/ # Business logic
│   │   ├── services/    # External services (WhatsApp, Email)
│   │   ├── middleware/  # Auth, validation
│   │   └── database/    # Database connection and schema
│   ├── package.json
│   └── README.md
│
├── admin/               # React admin dashboard
│   ├── src/
│   │   ├── pages/       # Dashboard pages
│   │   └── components/  # UI components
│   ├── package.json
│   └── README.md
│
└── README.md            # This file
```

## 🎨 Brand Identity

**Company Name:** IBA Global Service LTD

**Color Palette:**
- Primary Purple: #8b5cf6 (Soft, professional)
- Secondary Purple: #a855f7
- Accent Yellow: #fbbf24 (CTAs)
- Success Green: #10b981 (WhatsApp)

**Design Philosophy:**
- Professional and trustworthy
- Not scammy or cheap-looking
- Transparent pricing emphasis
- Clean, modern UI

## 🌟 Competitive Advantages

1. **Instant Quote with Breakdown** - Transparent pricing showing exactly what customers pay for
2. **24/7 Online Booking** - No phone calls needed, book anytime
3. **Complete Payment Collection** - Full payment online via Stripe
4. **WhatsApp Integration** - Instant notifications via customer's preferred channel
5. **Customer Dashboard** - View booking history, invoices, rebook easily
6. **Admin Control** - Dynamic pricing, booking management, CRM, analytics

## 📊 Technology Stack

### Frontend
- **Client:** Next.js 14, TypeScript, Tailwind CSS, Framer Motion
- **Admin:** React 18, Vite, TypeScript, Tailwind CSS, Recharts

### Backend
- **Runtime:** Node.js with TypeScript
- **Framework:** Express.js
- **Database:** PostgreSQL
- **Payment:** Stripe
- **Messaging:** Twilio (WhatsApp), Nodemailer (Email)
- **Auth:** JWT

## 🚢 Deployment

✅ **All repos are deployment-ready!**

- ✅ .gitignore configured for all repos
- ✅ Build scripts verified and working
- ✅ TypeScript compilation successful
- ✅ Environment variable templates provided

📖 **See [DEPLOYMENT.md](./DEPLOYMENT.md) for complete deployment guide**

### Quick Deploy Options:

- **Admin** → Cloudflare Pages (Vite)
- **Client** → Cloudflare Pages (Next.js with adapter) or Vercel
- **API** → Railway, Render, or Fly.io (Express.js)

## 📖 Documentation

Each repository has detailed documentation:
- [Client README](./client/README.md)
- [API README](./api/README.md)
- [Admin README](./admin/README.md)

## 🔒 Security

- HTTPS/SSL encryption
- JWT authentication
- Helmet.js security headers
- Rate limiting on API endpoints
- GDPR compliant
- PCI DSS compliant (Stripe)

## 📞 Support

For questions or issues:
- Email: info@ibacleaning.co.uk
- WhatsApp: +44 7000 000000

## 📄 License

© 2024 IBA Global Service LTD. All rights reserved.

---

Built with ❤️ for professional cleaning services in Greater Manchester
