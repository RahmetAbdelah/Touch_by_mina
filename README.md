# Touch By Mina - Luxury Makeup Artist Website

A modern, elegant website for Touch By Mina, a premium makeup artist brand based in Addis Ababa, Ethiopia.

## Features

- 🎨 Luxury minimal UI with dark green, black, and gold color palette
- 📱 Fully responsive mobile-first design
- ✨ Smooth animations using Framer Motion
- 🖼️ Portfolio gallery with filtering
- 📚 Makeup courses and training information
- 📍 Interactive contact page with embedded map
- 💬 Floating WhatsApp contact button
- 🎯 SEO optimized

## Pages

- **Home** - Hero section, intro, featured services, social media links
- **About** - Story, experience, and philosophy
- **Services** - Bridal, event, photoshoot makeup, henna, training
- **Portfolio** - Image gallery with before/after comparisons
- **Courses** - Makeup training classes information
- **Contact** - Phone, WhatsApp, Instagram, location with map

## Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Smooth animations
- **Lucide React** - Beautiful icons

## Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Build for Production

```bash
npm run build
npm start
```

## Customization

### Update Contact Information

Edit the following files:
- `components/WhatsAppButton.tsx` - WhatsApp number
- `components/Footer.tsx` - Contact details
- `app/contact/page.tsx` - Phone and location info

### Change Colors

Edit `tailwind.config.ts` to customize the brand colors:
- `brand-green` - Primary dark green
- `brand-dark-green` - Darker green for backgrounds
- `brand-gold` - Gold accent color
- `brand-light-gold` - Lighter gold for gradients

### Add Real Images

Replace the Unsplash placeholder images in:
- `app/page.tsx`
- `app/about/page.tsx`
- `app/portfolio/page.tsx`

Place your images in the `public` folder and update the `src` attributes.

### Update Social Media Links

Edit links in:
- `components/Footer.tsx`
- `app/page.tsx`
- `app/contact/page.tsx`

## Deployment

Deploy easily on Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

Or use any other Next.js hosting platform like Netlify or AWS Amplify.

## License

© 2026 Touch By Mina. All rights reserved.
