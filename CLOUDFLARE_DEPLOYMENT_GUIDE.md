# 🚀 Deploy ALL 3 Repos to Cloudflare - Complete Guide

This guide will help you deploy the **Admin**, **Client**, and **API** (now converted to Workers) all on Cloudflare.

---

## ⚠️ IMPORTANT CHANGES MADE

I've converted your Express.js API to work on Cloudflare Workers:
- ✅ **Express.js → Hono** (Workers-compatible framework)
- ✅ **PostgreSQL → Cloudflare D1** (SQLite database)
- ✅ New `api/src/index.ts` with Hono routes
- ✅ Added `wrangler.toml` configs for all repos
- ✅ Created D1 database schema (`api/schema.sql`)

---

## 📋 Prerequisites

1. **Cloudflare Account** - Sign up at [cloudflare.com](https://cloudflare.com)
2. **Wrangler CLI** - Cloudflare's deployment tool
3. **Node.js 18+** installed

---

## 🔧 Step 1: Install Wrangler & Login

```bash
# Install Wrangler globally
npm install -g wrangler

# Login to Cloudflare
wrangler login
```

This will open your browser to authorize Wrangler.

---

## 📦 Step 2: Install New Dependencies

### API (Updated to Workers)
```bash
cd C:\Users\mhdtb\OneDrive\Desktop\enfoftenancy\iba-cleaning-service\api

# Remove old node_modules
Remove-Item -Recurse -Force node_modules
Remove-Item package-lock.json

# Install new dependencies
npm install
```

### Client (Add Cloudflare adapter)
```bash
cd C:\Users\mhdtb\OneDrive\Desktop\enfoftenancy\iba-cleaning-service\client

npm install --save-dev @cloudflare/next-on-pages wrangler
```

### Admin (No changes needed)
```bash
cd C:\Users\mhdtb\OneDrive\Desktop\enfoftenancy\iba-cleaning-service\admin

# Just ensure deps are installed
npm install
```

---

## 🗄️ Step 3: Create & Setup D1 Database

The API now uses Cloudflare D1 (SQLite) instead of PostgreSQL.

```bash
cd C:\Users\mhdtb\OneDrive\Desktop\enfoftenancy\iba-cleaning-service\api

# Create D1 database
wrangler d1 create iba-cleaning-db
```

**IMPORTANT:** Copy the output! You'll see something like:
```
database_id = "xxxx-xxxx-xxxx-xxxx"
```

Edit `api/wrangler.toml` and add this ID:
```toml
[[d1_databases]]
binding = "DB"
database_name = "iba-cleaning-db"
database_id = "xxxx-xxxx-xxxx-xxxx"  # <-- Paste your ID here
```

### Run Database Migration
```bash
# Still in api directory
wrangler d1 execute iba-cleaning-db --file=./schema.sql
```

This creates all tables and inserts sample data.

---

## 🔐 Step 4: Set API Secrets

Set environment variables as secrets (they won't be in git):

```bash
cd C:\Users\mhdtb\OneDrive\Desktop\enfoftenancy\iba-cleaning-service\api

# JWT Secret (generate a random string)
wrangler secret put JWT_SECRET
# When prompted, enter a strong random secret

# Stripe Secret Key
wrangler secret put STRIPE_SECRET_KEY
# Enter: sk_test_... or sk_live_...

# Client URL (we'll update this after deployment)
wrangler secret put CLIENT_URL
# Enter: http://localhost:3000 (for now)

# Admin URL
wrangler secret put ADMIN_URL
# Enter: http://localhost:5173 (for now)
```

---

## 🚀 Step 5: Deploy API to Cloudflare Workers

```bash
cd C:\Users\mhdtb\OneDrive\Desktop\enfoftenancy\iba-cleaning-service\api

# Deploy API
wrangler deploy
```

You'll see output like:
```
Published iba-cleaning-api
  https://iba-cleaning-api.your-account.workers.dev
```

**📝 SAVE THIS URL!** You'll need it for the next steps.

### Test API
```bash
curl https://iba-cleaning-api.your-account.workers.dev/health
```

Should return: `{"status":"ok","message":"API is running on Cloudflare Workers"}`

---

## 🎨 Step 6: Deploy Admin Dashboard

```bash
cd C:\Users\mhdtb\OneDrive\Desktop\enfoftenancy\iba-cleaning-service\admin

# Build the admin dashboard
npm run build

# Deploy to Cloudflare Pages
wrangler pages deploy dist --project-name=iba-cleaning-admin
```

**OR** use Cloudflare Dashboard:
1. Go to [dash.cloudflare.com](https://dash.cloudflare.com) → Pages
2. Create a project → Connect to Git
3. Select `admin` folder
4. Build command: `npm run build`
5. Build output: `dist`
6. Environment variables:
   - `VITE_API_URL` = `https://iba-cleaning-api.your-account.workers.dev`

Your admin will be at: `https://iba-cleaning-admin.pages.dev`

---

## 🌐 Step 7: Deploy Client Website

The client uses Next.js with Cloudflare adapter:

```bash
cd C:\Users\mhdtb\OneDrive\Desktop\enfoftenancy\iba-cleaning-service\client

# Build for Cloudflare Pages
npm run pages:build

# Deploy
wrangler pages deploy .vercel/output/static --project-name=iba-cleaning-client
```

**OR** use Cloudflare Dashboard:
1. Pages → Create a project → Connect to Git
2. Select `client` folder
3. Framework preset: Next.js
4. Build command: `npx @cloudflare/next-on-pages`
5. Build output: `.vercel/output/static`
6. Environment variables:
   - `NEXT_PUBLIC_API_URL` = `https://iba-cleaning-api.your-account.workers.dev`
   - `NEXT_PUBLIC_STRIPE_PUBLIC_KEY` = `pk_test_...`

Your client will be at: `https://iba-cleaning-client.pages.dev`

---

## 🔄 Step 8: Update CORS URLs

Now that everything is deployed, update the API secrets with real URLs:

```bash
cd C:\Users\mhdtb\OneDrive\Desktop\enfoftenancy\iba-cleaning-service\api

# Update Client URL
wrangler secret put CLIENT_URL
# Enter: https://iba-cleaning-client.pages.dev

# Update Admin URL
wrangler secret put ADMIN_URL
# Enter: https://iba-cleaning-admin.pages.dev

# Redeploy API
wrangler deploy
```

---

## ✅ Step 9: Verify Deployment

Test each deployment:

### API Health Check
```bash
curl https://iba-cleaning-api.your-account.workers.dev/health
```

### Test Services Endpoint
```bash
curl https://iba-cleaning-api.your-account.workers.dev/api/services
```
Should return list of services from D1 database.

### Admin Dashboard
Visit: `https://iba-cleaning-admin.pages.dev`

### Client Website
Visit: `https://iba-cleaning-client.pages.dev`

---

## 📊 Deployment Summary

After following this guide, you'll have:

| Service | Type | URL | Database |
|---------|------|-----|----------|
| **API** | Cloudflare Workers | `iba-cleaning-api.workers.dev` | D1 (SQLite) |
| **Admin** | Cloudflare Pages | `iba-cleaning-admin.pages.dev` | - |
| **Client** | Cloudflare Pages | `iba-cleaning-client.pages.dev` | - |

---

## 🔧 Environment Variables Summary

### API (Workers Secrets)
```bash
JWT_SECRET=your_random_secret_32chars
STRIPE_SECRET_KEY=sk_live_...
CLIENT_URL=https://iba-cleaning-client.pages.dev
ADMIN_URL=https://iba-cleaning-admin.pages.dev
```

### Admin (Pages Environment Variables)
```
VITE_API_URL=https://iba-cleaning-api.workers.dev
```

### Client (Pages Environment Variables)
```
NEXT_PUBLIC_API_URL=https://iba-cleaning-api.workers.dev
NEXT_PUBLIC_STRIPE_PUBLIC_KEY=pk_live_...
```

---

## 🛠️ Development Workflow

### Local Development

**API:**
```bash
cd api
npm run dev
# Runs at http://localhost:8787
```

**Admin:**
```bash
cd admin
npm run dev
# Runs at http://localhost:5173
```

**Client:**
```bash
cd client
npm run dev
# Runs at http://localhost:3000
```

### Deploying Updates

**API:**
```bash
cd api
wrangler deploy
```

**Admin:**
```bash
cd admin
npm run build
wrangler pages deploy dist --project-name=iba-cleaning-admin
```

**Client:**
```bash
cd client
npm run pages:build
wrangler pages deploy .vercel/output/static --project-name=iba-cleaning-client
```

---

## 🔄 Automatic Git Deployment (Recommended)

Instead of manual deploys, connect to GitHub:

1. Push your code to GitHub
2. Cloudflare Dashboard → Pages → Create a project → Connect to Git
3. Select your repository
4. Cloudflare will auto-deploy on every git push!

---

## 📝 Important Notes

### D1 Database Limitations
- SQLite-based (not PostgreSQL)
- No support for some PostgreSQL-specific features
- Free tier: 5GB storage, 5 million reads/day

### Workers Limitations
- No access to Node.js APIs like `fs`, `process`, etc.
- No bcrypt (use Web Crypto API instead for password hashing)
- No nodemailer (use Cloudflare Email Workers or SendGrid API)

### API Conversion Notes
- I created a simplified version with core endpoints
- Full auth implementation needs Web Crypto API
- Email/WhatsApp features need Workers-compatible alternatives:
  - Email: Use Mailchannels, SendGrid, or Cloudflare Email Workers
  - WhatsApp: Use Twilio REST API (Workers-compatible)

---

## 🐛 Troubleshooting

### API Deploy Fails
- Check `wrangler.toml` has correct `database_id`
- Ensure secrets are set: `wrangler secret list`
- Check logs: `wrangler tail`

### Admin/Client Build Fails
- Clear node_modules: `Remove-Item -Recurse -Force node_modules`
- Reinstall: `npm install`
- Check build locally: `npm run build`

### Database Errors
- Verify D1 database exists: `wrangler d1 list`
- Check schema applied: `wrangler d1 execute iba-cleaning-db --command="SELECT * FROM services"`

### CORS Errors
- Update `CLIENT_URL` and `ADMIN_URL` secrets
- Redeploy API after updating secrets

---

## 🎉 Success Checklist

- [ ] Wrangler installed and logged in
- [ ] D1 database created and migrated
- [ ] API deployed to Workers
- [ ] Admin deployed to Pages
- [ ] Client deployed to Pages
- [ ] All environment variables set
- [ ] CORS URLs updated
- [ ] Health check returns OK
- [ ] Services endpoint returns data
- [ ] Admin dashboard loads
- [ ] Client website loads

---

## 🚀 Next Steps

1. **Custom Domains**: Add custom domains in Cloudflare Dashboard
2. **Complete Auth**: Implement full authentication with Web Crypto API
3. **Email Integration**: Set up Mailchannels or SendGrid
4. **WhatsApp**: Integrate Twilio REST API
5. **Monitoring**: Set up Cloudflare Analytics
6. **Backups**: Regular D1 database backups

---

## 📚 Additional Resources

- [Cloudflare Workers Docs](https://developers.cloudflare.com/workers/)
- [Cloudflare Pages Docs](https://developers.cloudflare.com/pages/)
- [D1 Database Docs](https://developers.cloudflare.com/d1/)
- [Hono Framework](https://hono.dev/)
- [Next.js on Cloudflare](https://github.com/cloudflare/next-on-pages)

---

**🎊 Congratulations! All 3 repos are now running on Cloudflare!**
