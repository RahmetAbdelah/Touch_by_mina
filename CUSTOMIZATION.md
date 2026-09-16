# Customization Guide

This guide will help you customize Touch By Mina website for your needs.

## 📞 Contact Information

### WhatsApp Button
Edit `components/WhatsAppButton.tsx`:
```typescript
const whatsappNumber = '251XXXXXXXXX'  // Replace with your number
const message = 'Your custom message here'
```

### Footer Contact Details
Edit `components/Footer.tsx`:
- Phone number (around line 52)
- Instagram handle (around line 59)
- Business address (around line 64)

### Contact Page
Edit `app/contact/page.tsx`:
- Phone number (contactMethods array)
- WhatsApp link
- Instagram handle
- Business address
- Google Maps embed URL

### JSON-LD Structured Data
Edit `app/jsonld.tsx`:
- Business name
- Phone number
- Address
- Social media URLs
- Opening hours

## 🎨 Colors & Branding

### Brand Colors
Edit `tailwind.config.ts`:
```typescript
colors: {
  'brand-green': '#1a4d2e',        // Primary dark green
  'brand-dark-green': '#0B1F1A',   // Background dark green
  'brand-surface': '#112A24',       // Card backgrounds
  'brand-gold': '#d4af37',         // Gold accent
  'brand-light-gold': '#f4e4b4',   // Light gold
}
```

### Global CSS Variables
Edit `app/globals.css`:
```css
:root {
  --bg-primary: #f8f5f0;           /* Light mode background */
  --bg-surface: #ffffff;           /* Light mode cards */
  --text-primary: #1a1a1a;         /* Light mode text */
  /* ... more variables */
}

.dark {
  --bg-primary: #0B1F1A;           /* Dark mode background */
  --bg-surface: #112A24;           /* Dark mode cards */
  --text-primary: #F5F5F5;         /* Dark mode text */
  /* ... more variables */
}
```

## 🖼️ Images & Media

### Replace Placeholder Images

1. Add your images to `public/images/` folder
2. Update image sources in:

**Home Page** (`app/page.tsx`):
- Hero background image (line ~28)
- Service section images (if you add them)

**About Page** (`app/about/page.tsx`):
- Header background (line ~19)

**Portfolio** (`app/portfolio/page.tsx`):
- Gallery images (portfolioItems array, line ~16)
- Before/after comparison images (line ~117)

### Add Favicons

1. Create favicons using [favicon.io](https://favicon.io) or [realfavicongenerator.net](https://realfavicongenerator.net/)

2. Add to `public/`:
   - `favicon.ico`
   - `icon-192.png`
   - `icon-512.png`
   - `apple-touch-icon.png`

3. Update `app/layout.tsx` head section:
```tsx
<link rel="icon" href="/favicon.ico" />
<link rel="apple-touch-icon" href="/apple-touch-icon.png" />
```

### Open Graph Images

Create an OG image (1200x630px) and save as `public/og-image.jpg`

## 🌐 Translations

### Add or Edit Translations

Files are in `lib/translations/`:
- `en.ts` - English
- `ar.ts` - Arabic (Right-to-left)
- `am.ts` - Amharic

To edit existing text:
1. Find the key in `en.ts`
2. Update the value
3. Update the same key in `ar.ts` and `am.ts`

Example:
```typescript
// lib/translations/en.ts
export default {
  hero: {
    tagline: 'Your New Tagline Here',
  }
}
```

### Add New Language

1. Create new file: `lib/translations/fr.ts` (for French)
2. Copy structure from `en.ts`
3. Translate all values
4. Update `lib/LanguageProvider.tsx`:

```typescript
import fr from './translations/fr'

type Lang = 'en' | 'ar' | 'am' | 'fr'
const translations: Record<Lang, Translations> = { en, ar, am, fr }
```

5. Update `components/Navigation.tsx` languages array:
```typescript
const languages: { code: Lang; label: string }[] = [
  { code: 'en', label: 'English' },
  { code: 'ar', label: 'العربية' },
  { code: 'am', label: 'አማርኛ' },
  { code: 'fr', label: 'Français' },
]
```

## 📝 Content Updates

### Home Page Services
Edit `app/page.tsx` (around line 83):
```typescript
[
  { 
    icon: Sparkles, 
    title: 'Your Service Title',
    desc: 'Your service description',
    items: ['Feature 1', 'Feature 2', 'Feature 3']
  },
  // ... more services
]
```

### Testimonials
Edit `app/testimonials/page.tsx` (testimonials array):
```typescript
{ 
  name: 'Client Name',
  roleKey: 'roleBride',
  image: '/images/client-photo.jpg',
  text: 'Client testimonial text here',
  rating: 5 
}
```

### Courses
Edit `app/courses/page.tsx` (courses array):
```typescript
{ 
  title: 'Course Name',
  duration: '3 days',
  students: 'Max 5',
  tag: 'Popular',
  topics: ['Topic 1', 'Topic 2', 'Topic 3']
}
```

### Portfolio Gallery
Edit `app/portfolio/page.tsx` (portfolioItems array):
```typescript
{ 
  id: 1,
  category: 'bridal',
  image: '/images/portfolio/bridal-1.jpg'
}
```

## 🔤 Fonts

### Change Fonts

1. Visit [Google Fonts](https://fonts.google.com)
2. Select your fonts
3. Update import in `app/globals.css`:
```css
@import url('https://fonts.googleapis.com/css2?family=YourFont:wght@400;700&display=swap');
```

4. Update `tailwind.config.ts`:
```typescript
fontFamily: {
  serif: ['Your Serif Font', 'serif'],
  sans: ['Your Sans Font', 'sans-serif'],
}
```

## 🔗 Social Media Links

### Update Social Links

**Footer** (`components/Footer.tsx`):
- Instagram URL (line ~27)
- TikTok URL (line ~32)

**Home Page** (`app/page.tsx`):
- Instagram button (line ~137)
- TikTok button (line ~142)

**JSON-LD** (`app/jsonld.tsx`):
- Update sameAs array with your social media URLs

## 📊 Analytics & SEO

### Google Analytics

1. Get tracking ID from [Google Analytics](https://analytics.google.com)
2. Add to `.env.local`:
```
NEXT_PUBLIC_GA_TRACKING_ID=G-XXXXXXXXXX
```
3. Create `lib/analytics.tsx`:
```tsx
export function Analytics() {
  const gaId = process.env.NEXT_PUBLIC_GA_TRACKING_ID
  if (!gaId) return null
  
  return (
    <>
      <script async src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gaId}');
          `,
        }}
      />
    </>
  )
}
```
4. Add to `app/layout.tsx`

### Update SEO Metadata

Edit `app/layout.tsx`:
- Page title
- Description
- Keywords
- Open Graph data
- Twitter Card data

### Google Search Console

1. Verify ownership with verification code
2. Update in `app/layout.tsx`:
```typescript
verification: {
  google: 'your-verification-code',
}
```

## 🎭 Animations

### Adjust Animation Timing

Edit animation variants in page files:
```typescript
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: function (i: number = 0) {
    return {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.7,      // Animation speed
        delay: i * 0.15,    // Stagger delay
        ease: [0.25, 0.4, 0.25, 1]  // Easing curve
      }
    }
  }
}
```

### Disable Animations

To reduce motion for accessibility, animations respect `prefers-reduced-motion`. Or remove `framer-motion` entirely:

1. Remove `motion` components
2. Replace with regular HTML elements
3. Remove animation variants

## 📱 Navigation Menu

### Add/Remove Menu Items

Edit `components/Navigation.tsx` (links array):
```typescript
const links = [
  { href: '/', label: t.nav.home },
  { href: '/about', label: t.nav.about },
  { href: '/new-page', label: 'New Page' },  // Add new item
  // ... more links
]
```

Don't forget to add translations for new menu items!

## 🎨 Custom Styling

### Add Custom CSS Classes

Edit `app/globals.css`:
```css
@layer components {
  .your-custom-class {
    @apply bg-primary text-secondary px-4 py-2;
  }
}
```

### Modify Existing Components

All component files are in `components/` and page files in `app/`. Each file is well-commented for easy customization.

## 🔧 Advanced Customizations

### Add Blog Section

1. Create `app/blog/page.tsx`
2. Create `app/blog/[slug]/page.tsx` for individual posts
3. Add to navigation menu
4. Add blog translations

### Add Booking System

1. Install form library: `npm install react-hook-form`
2. Create `app/booking/page.tsx`
3. Add form submission handling
4. Integrate with email service (SendGrid, Mailgun, etc.)

### Add Instagram Feed

1. Install library: `npm install react-instagram-embed`
2. Create `components/InstagramFeed.tsx`
3. Get Instagram API credentials
4. Add to home page or dedicated section

## 💡 Tips

- Always test changes locally before deploying
- Keep backups of your customizations
- Document your changes
- Use version control (Git)
- Test on multiple devices and browsers
- Check accessibility with Lighthouse
- Validate HTML/CSS with W3C validators

## 🆘 Need Help?

- Next.js Docs: [nextjs.org/docs](https://nextjs.org/docs)
- Tailwind Docs: [tailwindcss.com/docs](https://tailwindcss.com/docs)
- Framer Motion: [framer.com/motion](https://www.framer.com/motion/)
- React Docs: [react.dev](https://react.dev)
