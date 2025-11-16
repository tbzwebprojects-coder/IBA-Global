# IBA Global Service LTD - Client Application

Professional end-of-tenancy cleaning service website for Greater Manchester.

## Features

- 🎨 Modern, responsive design with purple accents
- 💰 **Instant Quote Calculator** with transparent price breakdown
- 📅 Online booking system
- 💳 Stripe payment integration
- 📱 WhatsApp integration
- 🗺️ Service area map
- ⭐ Customer reviews and testimonials
- 👤 Customer dashboard for booking management

## Tech Stack

- **Framework:** Next.js 14 with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Forms:** React Hook Form
- **HTTP Client:** Axios
- **Payment:** Stripe
- **State Management:** Zustand

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local

# Update .env.local with your values:
# - NEXT_PUBLIC_API_URL
# - NEXT_PUBLIC_STRIPE_PUBLIC_KEY
# - NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
```

### Development

```bash
# Run development server
npm run dev

# Open http://localhost:3000
```

### Build

```bash
# Create production build
npm run build

# Start production server
npm start
```

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with navbar and footer
│   ├── page.tsx            # Homepage
│   └── globals.css         # Global styles
├── components/
│   ├── home/               # Homepage components
│   │   ├── Hero.tsx
│   │   ├── Services.tsx
│   │   ├── WhyChooseUs.tsx
│   │   ├── ServiceArea.tsx
│   │   ├── Testimonials.tsx
│   │   └── CTASection.tsx
│   ├── quote/              # Quote calculator
│   │   └── QuoteCalculator.tsx
│   └── layout/             # Layout components
│       ├── Navbar.tsx
│       └── Footer.tsx
```

## Color Scheme

- **Primary Purple:** #8b5cf6 (Soft purple accent)
- **Secondary Purple:** #a855f7
- **Accent Yellow:** #fbbf24 (For CTAs)
- **Success Green:** #10b981 (WhatsApp)

## Key Components

### QuoteCalculator
Real-time pricing calculator with transparent breakdown showing:
- Base price by property type
- Additional bedroom/bathroom costs
- Extra services (oven, carpet, windows)
- Total with no hidden fees

### Hero Section
Eye-catching hero with:
- Compelling headline
- Trust badges (500+ clients, 4.9★ rating)
- Instant quote CTA
- WhatsApp contact button

### Services
Service cards with:
- Icon and description
- Pricing
- Feature list
- Get Quote button

## Environment Variables

```
NEXT_PUBLIC_API_URL=http://localhost:5000
NEXT_PUBLIC_STRIPE_PUBLIC_KEY=pk_test_...
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=AIza...
```

## Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Other Platforms

Build the application and deploy the `.next` folder with Node.js server.

##License

© 2024 IBA Global Service LTD. All rights reserved.
