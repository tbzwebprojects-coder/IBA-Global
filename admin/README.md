# IBA Global Service LTD - Admin Dashboard

React-based admin dashboard with CRM, booking management, dynamic pricing control, and analytics.

## Features

- 📊 **Dashboard** - Real-time stats, revenue charts, and recent bookings
- 📅 **Booking Management** - View, filter, and manage all customer bookings
- 👥 **CRM** - Complete customer relationship management with lifetime value tracking
- 💰 **Dynamic Pricing Control** - Update pricing rules and extra services in real-time
- 📈 **Analytics** - Conversion funnel, traffic sources, and customer journey tracking
- 🎨 Modern UI with purple accents matching brand identity

## Tech Stack

- **Framework:** React 18 with TypeScript
- **Build Tool:** Vite
- **Routing:** React Router DOM
- **Styling:** Tailwind CSS
- **Charts:** Recharts
- **Forms:** React Hook Form
- **HTTP Client:** Axios
- **State Management:** Zustand
- **Notifications:** React Hot Toast

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
# Install dependencies
npm install

# Copy environment variables
cp .env.example .env

# Update .env with your API URL
```

### Development

```bash
# Run development server
npm run dev

# Open http://localhost:3001
```

### Build

```bash
# Create production build
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── App.tsx              # Main app with routing
├── main.tsx             # Entry point
├── index.css            # Global styles
├── components/
│   └── Layout.tsx       # Dashboard layout with sidebar
└── pages/
    ├── Dashboard.tsx    # Overview with stats and charts
    ├── Bookings.tsx     # Booking management
    ├── Customers.tsx    # CRM and customer list
    ├── Pricing.tsx      # Pricing control
    ├── Analytics.tsx    # Analytics and customer journey
    └── Login.tsx        # Admin login page
```

## Key Features

### Dashboard
- Real-time statistics cards (bookings, revenue, customers, avg. value)
- Revenue trend line chart
- Weekly bookings bar chart
- Recent bookings table

### Booking Management
- Search and filter bookings
- View booking details (customer, property, pricing)
- Update booking status
- Filter by status (pending, confirmed, completed, cancelled)

### Customer CRM
- Complete customer database
- Contact information (email, phone)
- Booking history and total spent
- Customer lifetime value tracking
- Join date and last booking date
- Search functionality

### Pricing Control
- Update base prices by property type (Studio, Apartment, House)
- Configure per-bedroom and per-bathroom pricing
- Manage extra services (Oven, Carpet, Windows, etc.)
- Toggle service active/inactive status
- Real-time pricing calculator preview
- Save changes with instant feedback

### Analytics & Reporting
- **Conversion Funnel:**
  - Website Visitors
  - Quote Calculated
  - Booking Started
  - Payment Completed
- **Traffic Sources:** Pie chart showing visitor origin
- **Performance Trends:** Monthly bookings and revenue charts
- **Customer Journey Tracking:** Session-level data with outcomes

## Color Scheme

- **Primary Purple:** #8b5cf6
- **Secondary Purple:** #a855f7
- **Accent Colors:** Blue, Green, Yellow for stats

## API Integration

The admin dashboard connects to the API server at `VITE_API_URL`:

- `GET /api/admin/bookings` - Fetch all bookings
- `GET /api/admin/analytics` - Fetch analytics data
- `PUT /api/admin/pricing/:id` - Update pricing rules
- `GET /api/admin/customers` - Fetch customer data

## Authentication

Currently using placeholder authentication. To implement:

1. Create login API endpoint
2. Store JWT token in localStorage
3. Add token to Axios requests
4. Implement protected routes
5. Add logout functionality

## Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Other Platforms

Build the application and deploy the `dist` folder:

```bash
npm run build
# Upload dist/ folder to your hosting provider
```

## Environment Variables

```
VITE_API_URL=http://localhost:5000
```

## License

© 2024 IBA Global Service LTD. All rights reserved.
