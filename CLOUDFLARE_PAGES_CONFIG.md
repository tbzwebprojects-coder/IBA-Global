# Cloudflare Pages Configuration Guide

## ⚠️ IMPORTANT: Current Deployment Issues Fixed

Your deployments failed because of incorrect build/deploy commands. Here are the CORRECT configurations:

---

## Admin Dashboard - FIXED Configuration

### Cloudflare Pages Settings:

```
Framework preset: None (or Vite)
Build command: npm run build
Build output directory: dist
Root directory: admin
```

### Environment Variables:
```
VITE_API_URL=https://your-api-domain.com
```

### ⚠️ Common Mistakes to Avoid:
- ❌ DO NOT set deploy command to `npx wrangler deploy`
- ❌ DO NOT use `npm run dev` in build command
- ✅ Cloudflare Pages auto-deploys after successful build

---

## Client Website - FIXED Configuration

### Cloudflare Pages Settings:

```
Framework preset: Next.js
Build command: npm run build
Build output directory: .next
Root directory: client
```

### Environment Variables:
```
NEXT_PUBLIC_API_URL=https://your-api-domain.com
NEXT_PUBLIC_STRIPE_PUBLIC_KEY=pk_live_...
NODE_VERSION=18
```

### ⚠️ Issue: Your Build Command Was Wrong
**Current (WRONG):** `npm install & npm run dev`
- This starts dev server and gets stuck forever
  
**Should Be:** `npm run build`
- This creates production build

### Next.js on Cloudflare Pages

Option 1: Use the adapter (Recommended for Cloudflare)
```bash
cd client
npm install --save-dev @cloudflare/next-on-pages
```

Then update build command to:
```
npx @cloudflare/next-on-pages
```

Build output directory: `.vercel/output/static`

Option 2: Deploy to Vercel Instead
```bash
cd client
npm install -g vercel
vercel
```

---

## API Server - CANNOT Deploy to Cloudflare

### ❌ The Problem:
Express.js applications **cannot run on Cloudflare Workers or Pages**. This is why you're getting the wrangler error.

### ✅ The Solution:
Deploy API to a different platform:

#### Option 1: Railway (Easiest - Recommended)

1. Go to [railway.app](https://railway.app)
2. Click "Start a New Project" → "Deploy from GitHub repo"
3. Select your repo
4. Settings:
   - **Root Directory:** `api`
   - **Build Command:** `npm install && npm run build`
   - **Start Command:** `npm start`
5. Add PostgreSQL database from Railway dashboard
6. Set environment variables from `.env.example`

#### Option 2: Render

1. Go to [render.com](https://render.com)
2. New → Web Service
3. Connect your GitHub repo
4. Settings:
   - **Root Directory:** `api`
   - **Build Command:** `npm install && npm run build`
   - **Start Command:** `npm start`
   - **Environment:** Node
5. Add PostgreSQL database
6. Set environment variables

#### Option 3: Fly.io

```bash
cd api
fly launch
# Follow prompts
fly deploy
```

---

## Step-by-Step: Fix Your Deployments

### Fix Admin Deployment

1. Go to your Cloudflare Pages project for admin
2. Settings → Builds & deployments
3. Update settings:
   - **Build command:** `npm run build` (remove any deploy command)
   - **Build output directory:** `dist`
   - **Root directory:** `admin`
4. Remove any "Deploy command" field (leave it empty)
5. Retry deployment

### Fix Client Deployment

1. Go to your Cloudflare Pages project for client
2. Settings → Builds & deployments
3. Update settings:
   - **Build command:** `npm run build` (NOT `npm run dev`)
   - **Build output directory:** `.next`
   - **Root directory:** `client`
4. Remove any "Deploy command" field
5. For Next.js compatibility, consider using Vercel instead

### Fix API "Deployment"

1. **STOP trying to deploy API to Cloudflare** - it won't work
2. Choose Railway, Render, or Fly.io
3. Follow the respective platform's guide above
4. Once API is deployed, update the API URL in admin and client environment variables

---

## Why These Errors Happened

### Admin & API Error: "Missing entry-point to Worker script"
- You set deploy command to `npx wrangler deploy`
- Wrangler is for Cloudflare Workers (serverless functions), not static sites
- **Solution:** Remove deploy command entirely - Cloudflare Pages auto-deploys

### Client Error: "Ready in 2.6s" (stuck forever)
- Build command was `npm run dev`
- This starts the dev server which runs forever
- **Solution:** Change to `npm run build` for production build

### API: Cannot Deploy at All
- Express.js doesn't work on Cloudflare Workers/Pages
- **Solution:** Use Railway, Render, or Fly.io instead

---

## Correct Deployment Flow

### For Admin (Cloudflare Pages):
1. Push code to GitHub
2. Cloudflare detects changes
3. Runs `npm install`
4. Runs `npm run build` → creates `dist/`
5. Cloudflare automatically deploys `dist/` folder
6. Site is live! ✅

### For Client (Vercel - Easier):
1. Install Vercel CLI: `npm install -g vercel`
2. In client directory: `vercel`
3. Follow prompts
4. Site is live! ✅

### For API (Railway):
1. Connect GitHub repo to Railway
2. Railway auto-detects Node.js app
3. Add PostgreSQL plugin
4. Set environment variables
5. Railway auto-deploys on git push
6. API is live! ✅

---

## Testing After Deployment

### Test Admin:
```bash
curl https://your-admin.pages.dev
```

### Test Client:
```bash
curl https://your-client.pages.dev
# or
curl https://your-client.vercel.app
```

### Test API:
```bash
curl https://your-api.railway.app/health
# Should return: {"status":"ok","message":"API is running"}
```

---

## Quick Fix Checklist

- [ ] Admin: Change build command to `npm run build`, remove deploy command
- [ ] Client: Change build command to `npm run build` OR deploy to Vercel
- [ ] API: Deploy to Railway, Render, or Fly.io (NOT Cloudflare)
- [ ] Update environment variables in admin/client with deployed API URL
- [ ] Test all endpoints

---

## Need Help?

If you're still stuck:
1. Check Cloudflare Pages build logs
2. Ensure no "Deploy command" is set (it should be empty)
3. Build command should only build, not deploy or run dev server
4. For API, use Railway - it's the easiest option

---

**The key takeaway: Cloudflare Pages automatically deploys after build. You don't need a separate deploy command!**
