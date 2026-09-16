# Launch Checklist

Use this checklist before launching your Touch By Mina website to production.

## 📋 Pre-Launch Checklist

### Content

- [ ] Replace all placeholder images with actual photos
- [ ] Update WhatsApp number in `components/WhatsAppButton.tsx`
- [ ] Update phone number in `components/Footer.tsx` and `app/contact/page.tsx`
- [ ] Update business address in `app/contact/page.tsx` and `app/jsonld.tsx`
- [ ] Update Instagram handle in all files
- [ ] Update TikTok handle (if applicable)
- [ ] Add actual client testimonials
- [ ] Add real portfolio images
- [ ] Update course descriptions and pricing
- [ ] Verify all service descriptions are accurate
- [ ] Update business hours in `app/jsonld.tsx`
- [ ] Review and update all translation content (EN, AR, AM)

### Branding

- [ ] Add custom logo (if needed)
- [ ] Create and add favicon files:
  - `favicon.ico`
  - `icon-192.png`
  - `icon-512.png`
  - `apple-touch-icon.png`
- [ ] Create Open Graph image (`og-image.jpg`, 1200x630px)
- [ ] Verify brand colors match requirements
- [ ] Check font choices are approved

### SEO & Analytics

- [ ] Update site URL in `public/sitemap.xml`
- [ ] Update domain in `public/robots.txt`
- [ ] Set up Google Search Console
- [ ] Add and verify Google site verification code
- [ ] Set up Google Analytics (optional)
  - Add tracking ID to `.env.local`
  - Implement tracking code
- [ ] Set up Facebook Pixel (optional)
- [ ] Update meta descriptions for all pages
- [ ] Verify all page titles are optimized
- [ ] Check structured data with [Google Rich Results Test](https://search.google.com/test/rich-results)

### Technical

- [ ] Set up environment variables in `.env.local`
- [ ] Test all pages in development
- [ ] Run production build: `npm run build`
- [ ] Test production build locally: `npm start`
- [ ] Check for console errors
- [ ] Test all forms and interactions
- [ ] Verify WhatsApp button works correctly
- [ ] Test language switching (EN, AR, AM)
- [ ] Test theme toggle (dark/light)
- [ ] Verify all links work
- [ ] Check image optimization
- [ ] Test page load speed

### Responsive Design

- [ ] Test on iPhone (Safari)
- [ ] Test on Android (Chrome)
- [ ] Test on iPad/tablets
- [ ] Test on desktop (1920px+)
- [ ] Test on laptop (1366px)
- [ ] Verify mobile navigation works
- [ ] Check touch interactions
- [ ] Test landscape orientation
- [ ] Verify text is readable on all devices

### Browser Testing

- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Mobile Safari
- [ ] Chrome Mobile

### Accessibility

- [ ] Run Lighthouse accessibility audit (target: 95+)
- [ ] Test keyboard navigation
- [ ] Verify focus indicators are visible
- [ ] Check color contrast ratios
- [ ] Test with screen reader (optional but recommended)
- [ ] Verify all images have alt text
- [ ] Check heading hierarchy

### Performance

- [ ] Run Lighthouse performance audit (target: 90+)
- [ ] Optimize images (compress, use WebP where possible)
- [ ] Test with slow 3G connection
- [ ] Check Core Web Vitals
- [ ] Verify lazy loading works
- [ ] Test with slow network throttling

## 🚀 Deployment

- [ ] Choose hosting platform (Vercel recommended)
- [ ] Set up production environment
- [ ] Add environment variables to hosting platform
- [ ] Deploy to production
- [ ] Verify deployment successful
- [ ] Test production URL
- [ ] Set up custom domain
- [ ] Configure SSL certificate (should be automatic)
- [ ] Update DNS records
- [ ] Wait for DNS propagation (can take 24-48 hours)
- [ ] Test www and non-www versions
- [ ] Set up URL redirects if needed

## 📊 Post-Launch

### Immediate (Day 1)

- [ ] Submit sitemap to Google Search Console
- [ ] Test all functionality on live site
- [ ] Check all pages load correctly
- [ ] Verify forms work and receive submissions
- [ ] Test WhatsApp integration
- [ ] Share website with team for review
- [ ] Monitor error logs

### First Week

- [ ] Monitor Google Search Console for errors
- [ ] Check Google Analytics data (if set up)
- [ ] Review page load times
- [ ] Gather feedback from users
- [ ] Fix any reported issues
- [ ] Monitor mobile vs desktop traffic
- [ ] Check bounce rates

### First Month

- [ ] Review search console performance
- [ ] Analyze most visited pages
- [ ] Check for 404 errors
- [ ] Review user behavior
- [ ] Optimize underperforming pages
- [ ] Update content based on analytics
- [ ] Create content strategy

## 🔧 Maintenance Tasks

### Weekly

- [ ] Check website is loading properly
- [ ] Monitor uptime
- [ ] Review contact form submissions
- [ ] Check for broken links

### Monthly

- [ ] Update portfolio with new work
- [ ] Add new testimonials
- [ ] Review and update service pricing
- [ ] Check and update dependencies: `npm update`
- [ ] Review analytics data
- [ ] Backup website files

### Quarterly

- [ ] Security audit: `npm audit`
- [ ] Review and optimize SEO
- [ ] Update content strategy
- [ ] Review and update translations
- [ ] Check for Next.js updates
- [ ] Performance review and optimization

## 📝 Marketing Checklist

### Social Media

- [ ] Update Instagram bio with website link
- [ ] Update TikTok bio with website link
- [ ] Create announcement post about new website
- [ ] Share portfolio pieces from website
- [ ] Promote booking through website
- [ ] Add "Link in bio" to posts

### Business Materials

- [ ] Update business cards with website
- [ ] Update email signature
- [ ] Update WhatsApp status/about
- [ ] Update Google My Business listing
- [ ] Update directory listings
- [ ] Inform existing clients of new website

### Content Marketing

- [ ] Create blog posts (if blog added)
- [ ] Share before/after photos
- [ ] Create tutorials or tips
- [ ] Showcase client transformations
- [ ] Promote courses/training
- [ ] Share testimonials

## ⚠️ Common Issues & Solutions

### Images Not Loading
- Check image paths are correct
- Verify `next.config.js` has correct domains
- Ensure images are in `public/` folder

### Forms Not Working
- Check email service configuration
- Verify API endpoints
- Test with different email addresses

### Slow Loading
- Optimize images (use WebP, compress)
- Check for large files
- Review third-party scripts
- Enable caching

### Mobile Display Issues
- Test on actual devices
- Check responsive breakpoints
- Verify touch targets are large enough

### Translation Problems
- Clear browser cache and localStorage
- Check translation file syntax
- Verify language codes

## 📞 Support Contacts

- **Technical Issues**: [Your developer contact]
- **Content Updates**: [Content manager contact]
- **Hosting Support**: [Hosting platform support]

## ✅ Final Sign-Off

Once all items are checked:

- [ ] Website owner approval
- [ ] Developer sign-off
- [ ] Designer approval (if separate)
- [ ] Content review complete
- [ ] Legal/compliance check (if applicable)
- [ ] Ready for public announcement

---

**Date Completed**: ___________

**Completed By**: ___________

**Notes**: 
_______________________________________
_______________________________________
_______________________________________
