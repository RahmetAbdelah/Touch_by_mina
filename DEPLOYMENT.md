# Deployment Guide

## Prerequisites

- Node.js 18.17 or higher
- npm or yarn package manager
- Git installed on your machine
- A Vercel, Netlify, or similar hosting account

## Environment Setup

1. Copy `.env.example` to `.env.local`:
```bash
cp .env.example .env.local
```

2. Set these values in the hosting provider. The site works without the optional phone and WhatsApp values, but those actions remain hidden until configured:
   - `NEXT_PUBLIC_SITE_URL`: production URL, for example `https://touchbymina.com`
   - `NEXT_PUBLIC_WHATSAPP_NUMBER`: digits only with country code
   - `NEXT_PUBLIC_PHONE_NUMBER`: public phone number
   - `NEXT_PUBLIC_EMAIL`: booking email address
   - `NEXT_PUBLIC_INSTAGRAM_HANDLE` and `NEXT_PUBLIC_TIKTOK_HANDLE`: handles without `@`
   - `NEXT_PUBLIC_BUSINESS_ADDRESS`, `NEXT_PUBLIC_LATITUDE`, and `NEXT_PUBLIC_LONGITUDE`
   - `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` and optional analytics IDs

The contact form opens a prefilled WhatsApp message when WhatsApp is configured, otherwise it opens a prefilled email. The newsletter form uses the same email fallback, so no submissions are silently discarded.

## Deploy to Vercel (Recommended)

### Option 1: Using Vercel CLI

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy:
```bash
cd Touch_by_mina
vercel
```

4. When prompted for the project root, select the folder containing `package.json` (`Touch_by_mina` in this repository).

5. For production deployment:
```bash
vercel --prod
```

### Option 2: Using GitHub Integration

1. Push your code to GitHub:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin your-repo-url
git push -u origin main
```

2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Configure:
   - Framework Preset: Next.js
   - Build Command: `npm run build`
   - Output Directory: leave the default for Next.js
6. Add environment variables from `.env.local`
7. Click "Deploy"

## Deploy to Netlify

1. Build your project:
```bash
npm run build
```

2. Install Netlify CLI:
```bash
npm install -g netlify-cli
```

3. Login to Netlify:
```bash
netlify login
```

4. Deploy:
```bash
netlify deploy --prod
```

Or use the Netlify web interface:
1. Go to [netlify.com](https://netlify.com)
2. Drag and drop your `.next` folder
3. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`

## Custom Domain Setup

### Vercel

1. Go to your project settings
2. Navigate to "Domains"
3. Add your custom domain
4. Update DNS records as instructed:
   - Type: A
   - Name: @
   - Value: 76.76.21.21
   - Type: CNAME
   - Name: www
   - Value: cname.vercel-dns.com

### Netlify

1. Go to "Domain settings"
2. Add custom domain
3. Update DNS records as instructed

## Post-Deployment Checklist

- [ ] Test all pages and navigation
- [ ] Verify contact forms work
- [ ] Check WhatsApp button functionality
- [ ] Confirm social media links
- [ ] Test on mobile devices
- [ ] Verify Google Search Console integration
- [ ] Check Google Analytics (if configured)
- [ ] Update sitemap.xml with your domain
- [ ] Submit sitemap to Google Search Console
- [ ] Test different languages (EN, AR, AM)
- [ ] Verify dark/light theme toggle
- [ ] Check image loading and optimization
- [ ] Test page load speed with Lighthouse
- [ ] Verify meta tags with social media debuggers:
  - [Facebook Debugger](https://developers.facebook.com/tools/debug/)
  - [Twitter Card Validator](https://cards-dev.twitter.com/validator)

## Performance Optimization

1. Enable Image Optimization in your hosting platform
2. Configure caching headers
3. Enable compression (gzip/brotli)
4. Use a CDN for static assets
5. Monitor with:
   - [Google PageSpeed Insights](https://pagespeed.web.dev/)
   - [GTmetrix](https://gtmetrix.com/)
   - [WebPageTest](https://www.webpagetest.org/)

## Monitoring & Analytics

1. Set up Google Analytics:
   - Add tracking ID to `.env.local`
   - Redeploy

2. Configure Google Search Console:
   - Verify ownership
   - Submit sitemap
   - Monitor search performance

3. Set up error monitoring (optional):
   - [Sentry](https://sentry.io/)
   - [LogRocket](https://logrocket.com/)

## Backup & Updates

1. Keep your repository updated
2. Regularly backup your content
3. Monitor dependencies for security updates:
```bash
npm audit
npm update
```

4. Test updates in a staging environment before deploying to production

## Troubleshooting

### Build Failures

- Check Node.js version compatibility
- Verify all dependencies are installed
- Review build logs for specific errors
- Clear cache: `rm -rf .next node_modules && npm install`

### Image Loading Issues

- Verify image domains in `next.config.js`
- Check file paths are correct
- Ensure images are optimized and not too large

### Environment Variables Not Working

- Make sure `.env.local` is not committed to Git
- Redeploy after updating environment variables
- Check variable names match exactly (including NEXT_PUBLIC_ prefix)

## Support

For issues or questions:
- Check Next.js documentation: [nextjs.org/docs](https://nextjs.org/docs)
- Vercel support: [vercel.com/support](https://vercel.com/support)
- GitHub Issues: Create an issue in your repository
