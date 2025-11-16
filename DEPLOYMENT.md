# Deployment Guide - IBA Cleaning Service

## Overview

This project consists of 3 applications:
- **Client** (Next.js) - Customer-facing website
- **Admin** (Vite/React) - Admin dashboard
- **API** (Express/Node.js) - Backend server

## ✅ Deployment Readiness Status

### Admin Dashboard
- ✅ Build successful (`npm run build` → `dist/`)
- ✅ Ready for Cloudflare Pages
- ✅ TypeScript errors fixed
- ✅ .gitignore configured

### Client Website  
- ✅ Build successful (`npm run build` → `.next/`)
- ⚠️ Needs Cloudflare Pages adapter for full compatibility
- ✅ TypeScript compilation successful
- ✅ .gitignore configured

### API Server
- ✅ Build successful (`npm run build` → `dist/`)
- ❌ **Cannot deploy to Cloudflare Workers** (Express.js not supported)
- ✅ TypeScript compilation successful
- ✅ .gitignore configured
- ⚠️ **Requires separate hosting** (see options below)

---

## Deployment Instructions

### 1. Admin Dashboard (Cloudflare Pages)

The admin dashboard is ready to deploy to Cloudflare Pages.

#### Steps:

1. **Login to Cloudflare Dashboard**
   ```bash
   # Install Wrangler CLI (optional)
   npm install -g wrangler
   wrangler login
   ```

2. **Create new Pages project**
   - Go to Cloudflare Dashboard → Pages
   - Click "Create a project"
   - Connect your Git repository
   - Select the `admin` directory

3. **Build Configuration:**
   - **Framework preset:** Vite
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Root directory:** `admin`

4. **Environment Variables:**
   ```
   VITE_API_URL=https://your-api-domain.com
   ```

5. **Deploy!**
   - Click "Save and Deploy"
   - Your admin dashboard will be available at `https://your-admin.pages.dev`

---

### 2. Client Website (Cloudflare Pages with Next.js)

The client website uses Next.js and requires the Cloudflare adapter.

#### Option A: Using @cloudflare/next-on-pages (Recommended)

1. **Install the adapter:**
   ```bash
   cd client
   npm install --save-dev @cloudflare/next-on-pages
   ```

2. **Update package.json:**
   ```json
   {
     "scripts": {
       "pages:build": "npx @cloudflare/next-on-pages",
       "pages:dev": "npx @cloudflare/next-on-pages --dev"
     }
   }
   ```

3. **Cloudflare Pages Configuration:**
   - **Build command:** `npm run pages:build`
   - **Build output directory:** `.vercel/output/static`
   - **Root directory:** `client`
   - **Node.js version:** 18 or higher

4. **Environment Variables:**
   ```
   NEXT_PUBLIC_API_URL=https://your-api-domain.com
   NEXT_PUBLIC_STRIPE_PUBLIC_KEY=pk_test_your_key
   NODE_VERSION=18
   ```

#### Option B: Use Vercel (Alternative)

If you encounter issues with Cloudflare Pages and Next.js:

```bash
cd client
npm install -g vercel
vercel
```

---

### 3. API Server (Separate Hosting Required)

⚠️ **IMPORTANT:** Express.js cannot run on Cloudflare Workers. You must deploy the API to a traditional hosting platform.

#### Recommended Options:

##### Option 1: Railway (Easiest)

1. **Install Railway CLI:**
   ```bash
   npm install -g railway
   ```

2. **Deploy:**
   ```bash
   cd api
   railway login
   railway init
   railway up
   ```

3. **Set Environment Variables in Railway Dashboard:**
   - All variables from `.env.example`
   - Add PostgreSQL database from Railway

##### Option 2: Render

1. Go to [render.com](https://render.com)
2. Connect your repository
3. Create a new Web Service
4. **Settings:**
   - **Root Directory:** `api`
   - **Build Command:** `npm install && npm run build`
   - **Start Command:** `npm start`
   - **Environment:** Node

##### Option 3: Fly.io

```bash
cd api
fly launch
fly deploy
```

##### Option 4: Self-host with Cloudflare Tunnel

If you have your own server, use Cloudflare Tunnel to expose it:

```bash
# On your server
npm install -g cloudflared
cloudflared tunnel login
cloudflared tunnel create api-tunnel
cloudflared tunnel route dns api-tunnel api.yourdomain.com
cloudflared tunnel run api-tunnel
```

---

## Environment Variables Configuration

### Admin (.env)
```env
VITE_API_URL=https://your-api-domain.com
```

### Client (.env)
```env
NEXT_PUBLIC_API_URL=https://your-api-domain.com
NEXT_PUBLIC_STRIPE_PUBLIC_KEY=pk_live_your_stripe_key
```

### API (.env)
```env
PORT=3001
NODE_ENV=production

# Database
DATABASE_URL=postgresql://user:password@host:5432/dbname

# JWT
JWT_SECRET=your_production_jwt_secret
JWT_EXPIRES_IN=7d

# Stripe
STRIPE_SECRET_KEY=sk_live_your_stripe_secret
STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret

# Twilio
TWILIO_ACCOUNT_SID=ACxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
TWILIO_AUTH_TOKEN=your_twilio_token
TWILIO_WHATSAPP_NUMBER=whatsapp:+1234567890

# Email
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password
EMAIL_FROM=IBA Global Service <noreply@ibacleaning.co.uk>

# URLs
CLIENT_URL=https://your-client-domain.com
ADMIN_URL=https://your-admin-domain.com
```

---

## Database Setup

The API requires PostgreSQL. Options:

1. **Railway PostgreSQL** (easiest)
   - Add PostgreSQL plugin in Railway
   - Database URL is auto-configured

2. **Supabase** (free tier available)
   - Create project at [supabase.com](https://supabase.com)
   - Use connection string in DATABASE_URL

3. **Neon** (serverless PostgreSQL)
   - Create database at [neon.tech](https://neon.tech)
   - Use connection string

4. **Cloudflare D1** (requires migration)
   - Convert from PostgreSQL to SQLite
   - Use Cloudflare Workers for API

---

## Post-Deployment Checklist

- [ ] All builds successful
- [ ] Environment variables configured
- [ ] Database migrated and connected
- [ ] API health check working (`/health` endpoint)
- [ ] Client can connect to API
- [ ] Admin can connect to API
- [ ] Stripe webhooks configured
- [ ] Custom domains configured (optional)
- [ ] SSL certificates active
- [ ] CORS configured correctly in API

---

## Testing Deployment

### Test Admin
```bash
curl https://your-admin.pages.dev
```

### Test Client
```bash
curl https://your-client.pages.dev
```

### Test API
```bash
curl https://your-api-domain.com/health
# Should return: {"status":"ok","message":"API is running"}
```

---

## Troubleshooting

### Build Failures
- Check Node.js version (use Node 18+)
- Clear build cache and retry
- Check TypeScript errors: `npm run build`

### API Connection Issues
- Verify API URL in environment variables
- Check CORS settings in API
- Ensure API is running and accessible

### Database Connection
- Verify DATABASE_URL format
- Check firewall/security group settings
- Test connection locally first

---

## Alternative: Convert API to Cloudflare Workers

If you want everything on Cloudflare, you'll need to:

1. Rewrite API using Hono framework (Cloudflare Workers compatible)
2. Migrate PostgreSQL to Cloudflare D1 (SQLite)
3. Adapt middleware and routes for Workers environment

This requires significant code changes and is not recommended unless necessary.

---

## Support

For deployment issues:
- Check Cloudflare Pages docs: https://developers.cloudflare.com/pages/
- Railway docs: https://docs.railway.app/
- Next.js on Cloudflare: https://github.com/cloudflare/next-on-pages
