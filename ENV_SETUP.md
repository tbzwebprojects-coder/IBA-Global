# Environment Variables Setup Guide

This document explains all environment variables needed for the IBA Cleaning Service platform.

## Quick Setup

Each repository has a `.env.example` file. Copy and configure:

```bash
# In each directory (admin, api, client)
cp .env.example .env
```

Then edit the `.env` file with your actual values.

---

## Admin Dashboard

**File:** `admin/.env`

```env
VITE_API_URL=http://localhost:3001
```

### Variables:

- `VITE_API_URL` - URL of the API server
  - **Development:** `http://localhost:3001`
  - **Production:** Your deployed API URL (e.g., `https://api.yourdomain.com`)

---

## Client Website

**File:** `client/.env`

```env
NEXT_PUBLIC_API_URL=http://localhost:3001
NEXT_PUBLIC_STRIPE_PUBLIC_KEY=pk_test_...
```

### Variables:

- `NEXT_PUBLIC_API_URL` - URL of the API server
  - **Development:** `http://localhost:3001`
  - **Production:** Your deployed API URL

- `NEXT_PUBLIC_STRIPE_PUBLIC_KEY` - Stripe publishable key
  - Get from: [Stripe Dashboard](https://dashboard.stripe.com/test/apikeys)
  - **Test mode:** Starts with `pk_test_`
  - **Live mode:** Starts with `pk_live_`

---

## API Server

**File:** `api/.env`

### Complete Configuration:

```env
# Server
PORT=3001
NODE_ENV=development

# Database
DATABASE_URL=postgresql://user:password@localhost:5432/iba_cleaning

# JWT Authentication
JWT_SECRET=your_super_secret_jwt_key_change_this_in_production
JWT_EXPIRES_IN=7d

# Stripe Payment
STRIPE_SECRET_KEY=sk_test_your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret

# Twilio WhatsApp
TWILIO_ACCOUNT_SID=ACxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
TWILIO_AUTH_TOKEN=your_twilio_auth_token
TWILIO_WHATSAPP_NUMBER=whatsapp:+14155238886

# Email (Nodemailer)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_specific_password
EMAIL_FROM=IBA Global Service <noreply@ibacleaning.co.uk>

# Frontend URLs (for CORS)
CLIENT_URL=http://localhost:3000
ADMIN_URL=http://localhost:5173
```

### Variable Details:

#### Server Configuration

- `PORT` - Port number for API server (default: 3001)
- `NODE_ENV` - Environment mode
  - `development` - Local development
  - `production` - Live deployment

#### Database

- `DATABASE_URL` - PostgreSQL connection string
  - Format: `postgresql://username:password@host:port/database`
  - **Local:** `postgresql://postgres:password@localhost:5432/iba_cleaning`
  - **Hosted:** Get from Railway, Supabase, Neon, etc.

#### JWT Authentication

- `JWT_SECRET` - Secret key for signing JWT tokens
  - Generate: `node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"`
  - **IMPORTANT:** Use different secrets for dev and production

- `JWT_EXPIRES_IN` - Token expiration time
  - `7d` = 7 days
  - `1h` = 1 hour
  - `30m` = 30 minutes

#### Stripe Payment

- `STRIPE_SECRET_KEY` - Stripe secret API key
  - Get from: [Stripe Dashboard → API Keys](https://dashboard.stripe.com/test/apikeys)
  - **Test mode:** `sk_test_...`
  - **Live mode:** `sk_live_...`

- `STRIPE_WEBHOOK_SECRET` - Webhook signing secret
  - Get from: [Stripe Dashboard → Webhooks](https://dashboard.stripe.com/test/webhooks)
  - Create endpoint: `https://your-api.com/api/payments/webhook`
  - Format: `whsec_...`

#### Twilio WhatsApp

- `TWILIO_ACCOUNT_SID` - Twilio Account SID
  - Get from: [Twilio Console](https://console.twilio.com/)
  - Format: `ACxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`

- `TWILIO_AUTH_TOKEN` - Twilio Auth Token
  - Get from: [Twilio Console](https://console.twilio.com/)

- `TWILIO_WHATSAPP_NUMBER` - WhatsApp Business number
  - Format: `whatsapp:+14155238886`
  - For testing: Use Twilio sandbox number
  - For production: Apply for WhatsApp Business API

#### Email Configuration

- `EMAIL_HOST` - SMTP server hostname
  - Gmail: `smtp.gmail.com`
  - Outlook: `smtp-mail.outlook.com`
  - Custom: Your email provider's SMTP host

- `EMAIL_PORT` - SMTP port
  - `587` - TLS (recommended)
  - `465` - SSL

- `EMAIL_USER` - Email account username
  - Usually your full email address

- `EMAIL_PASS` - Email password
  - **Gmail:** Use [App Password](https://support.google.com/accounts/answer/185833)
  - **Not** your regular email password!

- `EMAIL_FROM` - Sender name and email
  - Format: `Name <email@example.com>`

#### Frontend URLs

- `CLIENT_URL` - Client website URL (for CORS)
  - **Development:** `http://localhost:3000`
  - **Production:** Your client domain

- `ADMIN_URL` - Admin dashboard URL (for CORS)
  - **Development:** `http://localhost:5173`
  - **Production:** Your admin domain

---

## Getting API Keys

### Stripe

1. Go to [stripe.com](https://stripe.com)
2. Create account or login
3. Go to Developers → API Keys
4. Copy publishable key (pk_test_...) and secret key (sk_test_...)
5. For webhooks: Developers → Webhooks → Add endpoint

### Twilio WhatsApp

1. Go to [twilio.com](https://twilio.com)
2. Create account or login
3. Get Account SID and Auth Token from Console
4. For testing: Use WhatsApp sandbox
5. For production: Apply for WhatsApp Business API

### Gmail App Password

1. Enable 2-Factor Authentication on Gmail
2. Go to Google Account → Security
3. Under "2-Step Verification" → App passwords
4. Generate new app password
5. Use this password (not your Gmail password)

---

## Security Best Practices

✅ **DO:**
- Use different secrets for development and production
- Use strong, random JWT secrets (32+ characters)
- Store production secrets in secure vault (not in code)
- Use environment variables in deployment platforms
- Rotate secrets periodically

❌ **DON'T:**
- Commit `.env` files to Git (they're in `.gitignore`)
- Share API keys or secrets publicly
- Use test keys in production
- Reuse secrets across different projects
- Store secrets in code or comments

---

## Database Setup

### Local PostgreSQL

```bash
# Install PostgreSQL
# macOS: brew install postgresql
# Ubuntu: sudo apt-get install postgresql
# Windows: Download from postgresql.org

# Create database
createdb iba_cleaning

# Update DATABASE_URL in .env
DATABASE_URL=postgresql://postgres:password@localhost:5432/iba_cleaning
```

### Hosted Database Options

**Railway** (Easiest)
- Free tier available
- PostgreSQL plugin auto-configured
- Copy connection string to DATABASE_URL

**Supabase** (Free tier)
- Go to [supabase.com](https://supabase.com)
- Create project
- Get connection string from Settings → Database

**Neon** (Serverless)
- Go to [neon.tech](https://neon.tech)
- Create database
- Copy connection string

---

## Troubleshooting

### "Cannot connect to database"
- Check DATABASE_URL format
- Ensure PostgreSQL is running
- Verify credentials and port

### "Invalid Stripe key"
- Check key starts with `pk_test_` or `sk_test_`
- Verify no extra spaces
- Ensure using correct environment (test vs live)

### "Twilio error"
- Verify Account SID starts with `AC`
- Check Auth Token is correct
- For WhatsApp, ensure number format is correct

### "Email not sending"
- Check Gmail App Password (not regular password)
- Verify 2FA is enabled on Gmail
- Check port (587 for TLS)

---

## Production Deployment

When deploying to production:

1. **Generate new secrets:**
   ```bash
   # JWT Secret
   node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
   ```

2. **Use production API keys:**
   - Stripe: Switch to live mode keys (`pk_live_`, `sk_live_`)
   - Twilio: Use production WhatsApp number

3. **Update URLs:**
   - Set CLIENT_URL and ADMIN_URL to production domains
   - Update VITE_API_URL and NEXT_PUBLIC_API_URL

4. **Set NODE_ENV:**
   ```env
   NODE_ENV=production
   ```

5. **Configure in hosting platform:**
   - Railway: Settings → Variables
   - Render: Environment → Environment Variables
   - Cloudflare Pages: Settings → Environment Variables

---

## Quick Reference

| Variable | Required | Get From | Example |
|----------|----------|----------|---------|
| DATABASE_URL | Yes | PostgreSQL host | `postgresql://user:pass@host:5432/db` |
| JWT_SECRET | Yes | Generate random | `abc123...` (32+ chars) |
| STRIPE_SECRET_KEY | Yes | Stripe Dashboard | `sk_test_...` |
| TWILIO_ACCOUNT_SID | Yes | Twilio Console | `ACxxxxxxxx...` |
| EMAIL_PASS | Yes | Gmail App Password | `xxxx xxxx xxxx xxxx` |

---

Need help? Check [DEPLOYMENT.md](./DEPLOYMENT.md) for full deployment guide.
