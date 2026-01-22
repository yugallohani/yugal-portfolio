# 🚀 Deployment Guide

## Quick Setup

### 1. Install Dependencies
```bash
npm install
```

### 2. Environment Variables
Create `.env.local` file:
```env
RESEND_API_KEY=your_resend_api_key_here
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

### 3. Update Resume Link
In `src/components/sections/hero.tsx`, replace:
```
"https://drive.google.com/file/d/your-resume-id/view?usp=sharing"
```
With your actual Google Drive resume link.

### 4. Run Development Server
```bash
npm run dev
```

## 🌐 Deploy to Vercel

1. Push to GitHub (already done ✅)
2. Go to [vercel.com](https://vercel.com)
3. Import your GitHub repository: `yugallohani/yugal-portfolio`
4. Add environment variables in Vercel dashboard
5. Deploy!

## 📧 Email Setup (Resend)

1. Sign up at [resend.com](https://resend.com)
2. Get your API key
3. Add to environment variables
4. Contact form will work automatically

## 🎯 Final Checklist

- [ ] Update resume link
- [ ] Add Resend API key
- [ ] Replace project screenshots
- [ ] Test contact form
- [ ] Deploy to Vercel

Your portfolio is ready! 🎉