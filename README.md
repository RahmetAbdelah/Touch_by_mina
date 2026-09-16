# Touch By Mina - Luxury Makeup Artist Website

A modern, elegant, and fully responsive website for Touch By Mina, a premium makeup artist brand based in Addis Ababa, Ethiopia. Built with Next.js 14, TypeScript, and Tailwind CSS.

## ✨ Features

- 🎨 **Luxury Minimal Design** - Elegant dark green, black, and gold color palette
- 🌍 **Multilingual Support** - English, Arabic (RTL), and Amharic
- 📱 **Fully Responsive** - Mobile-first design that works on all devices
- ✨ **Smooth Animations** - Beautiful animations using Framer Motion
- 🖼️ **Portfolio Gallery** - Image gallery with category filtering
- 🔄 **Before/After Slider** - Interactive comparison sliders for transformations
- 📚 **Courses Section** - Detailed makeup training information
- 📍 **Contact Page** - Integrated Google Maps and contact information
- 💬 **WhatsApp Integration** - Floating WhatsApp button for easy contact
- 🎯 **SEO Optimized** - Comprehensive meta tags, structured data, and sitemap
- 🌓 **Dark/Light Mode** - Theme toggle with smooth transitions
- ⚡ **Performance Optimized** - Fast loading and optimized images
- ♿ **Accessibility** - WCAG compliant with semantic HTML

## 📄 Pages

| Page | Route | Description |
|------|-------|-------------|
| **Home** | `/` | Hero section, featured services, testimonials, social media |
| **About** | `/about` | Artist biography, experience, philosophy, and achievements |
| **Services** | `/services` | Complete service offerings with detailed descriptions |
| **Portfolio** | `/portfolio` | Image gallery, before/after comparisons, video showcases |
| **Testimonials** | `/testimonials` | Client reviews and feedback |
| **Courses** | `/courses` | Makeup training classes and educational programs |
| **Contact** | `/contact` | Contact form, location map, business hours |

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Slider**: [React Compare Slider](https://react-compare-slider.vercel.app/)
- **Image Optimization**: Next.js Image Component
- **Fonts**: Google Fonts (Playfair Display, Inter, Noto Sans)

## 📦 Installation

### Prerequisites

- Node.js 18.17 or higher
- npm or yarn package manager

### Setup Steps

1. **Clone the repository**
```bash
git clone <your-repo-url>
cd Touch_by_mina
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**
```bash
cp .env.example .env.local
```

Edit `.env.local` with your actual values:
- WhatsApp number
- Phone number
- Social media handles
- Google Maps API key (optional)
- Analytics IDs (optional)

4. **Run development server**
```bash
npm run dev
```

5. **Open in browser**
Navigate to [http://localhost:3000](http://localhost:3000)

## 🚀 Build & Deploy

### Build for Production

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

### Deploy to Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

Or via CLI:
```bash
npm install -g vercel
vercel
```

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions.

## 🎨 Customization

### Quick Customization

1. **Update Contact Information**
   - `components/WhatsAppButton.tsx` - WhatsApp number
   - `components/Footer.tsx` - Footer details
   - `app/contact/page.tsx` - Contact page info

2. **Change Brand Colors**
   - Edit `tailwind.config.ts`
   - Update color variables in `app/globals.css`

3. **Replace Images**
   - Add images to `public/images/`
   - Update image sources in page files
   - Use Next.js Image component for optimization

4. **Edit Translations**
   - Modify files in `lib/translations/`
   - Update `en.ts`, `ar.ts`, `am.ts`

5. **Update Content**
   - Edit page files in `app/` directory
   - Modify component files in `components/`

See [CUSTOMIZATION.md](./CUSTOMIZATION.md) for comprehensive customization guide.

## 📁 Project Structure

```
Touch_by_mina/
├── app/                      # Next.js app directory
│   ├── about/               # About page
│   ├── contact/             # Contact page
│   ├── courses/             # Courses page
│   ├── portfolio/           # Portfolio gallery
│   ├── services/            # Services page
│   ├── testimonials/        # Testimonials page
│   ├── error.tsx            # Error boundary
│   ├── globals.css          # Global styles
│   ├── jsonld.tsx           # Structured data
│   ├── layout.tsx           # Root layout
│   ├── loading.tsx          # Loading state
│   ├── manifest.json        # PWA manifest
│   ├── metadata.ts          # SEO metadata
│   ├── not-found.tsx        # 404 page
│   └── page.tsx             # Home page
├── components/              # React components
│   ├── BeforeAfterSlider.tsx
│   ├── Footer.tsx
│   ├── Navigation.tsx
│   └── WhatsAppButton.tsx
├── lib/                     # Utilities and providers
│   ├── translations/        # Language files
│   │   ├── en.ts
│   │   ├── ar.ts
│   │   └── am.ts
│   ├── LanguageProvider.tsx
│   └── ThemeProvider.tsx
├── public/                  # Static assets
│   ├── robots.txt
│   └── sitemap.xml
├── .env.example             # Environment variables template
├── CUSTOMIZATION.md         # Customization guide
├── DEPLOYMENT.md            # Deployment guide
├── next.config.js           # Next.js configuration
├── package.json             # Dependencies
├── postcss.config.js        # PostCSS configuration
├── README.md                # This file
├── tailwind.config.ts       # Tailwind configuration
└── tsconfig.json            # TypeScript configuration
```

## 🌐 Internationalization (i18n)

The website supports three languages:

- **English (EN)** - Left-to-right (LTR)
- **Arabic (AR)** - Right-to-left (RTL)
- **Amharic (AM)** - Left-to-right (LTR)

Language preference is saved to localStorage and persists across sessions.

### Add New Language

1. Create translation file in `lib/translations/`
2. Update `LanguageProvider.tsx`
3. Add to language selector in `Navigation.tsx`

## 🎭 Animations

Animations are implemented using Framer Motion with:
- Smooth fade-in effects
- Staggered animations for lists
- Hover interactions
- Page transitions
- Reduced motion support for accessibility

## 📊 SEO & Analytics

### Built-in SEO Features

- ✅ Semantic HTML structure
- ✅ Meta tags (title, description, keywords)
- ✅ Open Graph tags for social sharing
- ✅ Twitter Card integration
- ✅ JSON-LD structured data
- ✅ XML sitemap
- ✅ Robots.txt
- ✅ Canonical URLs
- ✅ Alt text for images

### Google Search Console

Verification code included in layout. Submit sitemap at:
```
https://yourdomain.com/sitemap.xml
```

### Add Analytics

Edit `.env.local`:
```
NEXT_PUBLIC_GA_TRACKING_ID=G-XXXXXXXXXX
```

## 🔧 Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint |

## 🌟 Key Components

### Navigation
- Responsive mobile menu
- Language switcher
- Theme toggle (dark/light)
- Smooth scrolling
- Active link highlighting

### WhatsApp Button
- Floating action button
- Pre-filled message
- Animated pulse effect
- Mobile optimized

### Before/After Slider
- Interactive image comparison
- Draggable handle
- Smooth transitions
- Touch-friendly

### Footer
- Multi-column layout
- Social media links
- Quick navigation
- Contact information

## 🎨 Design System

### Color Palette

- **Primary Green**: `#1a4d2e` - Main brand color
- **Dark Green**: `#0B1F1A` - Background (dark mode)
- **Surface**: `#112A24` - Card backgrounds
- **Gold**: `#d4af37` - Accent color
- **Light Gold**: `#f4e4b4` - Highlights

### Typography

- **Headings**: Playfair Display (serif)
- **Body**: Inter (sans-serif)
- **Arabic**: Noto Naskh Arabic
- **Amharic**: Noto Sans Ethiopic

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## ♿ Accessibility

- Semantic HTML elements
- ARIA labels where needed
- Keyboard navigation support
- Focus indicators
- Alt text for images
- Color contrast compliance (WCAG AA)
- Reduced motion support

## 🐛 Troubleshooting

### Common Issues

**Build errors:**
```bash
rm -rf .next node_modules
npm install
npm run build
```

**Images not loading:**
- Check `next.config.js` image domains
- Verify image paths are correct

**Translations not working:**
- Clear localStorage
- Check translation file syntax
- Verify language code in LanguageProvider

## 📝 License

© 2026 Touch By Mina. All rights reserved.

## 🤝 Contributing

This is a client project. For suggestions or issues, please contact the development team.

## 📧 Support

For technical support or customization requests:
- Check documentation files
- Review [Next.js docs](https://nextjs.org/docs)
- Contact project maintainer

## 🎯 Performance

Current Lighthouse scores (target):
- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 100

## 🔄 Updates & Maintenance

### Regular Updates
- Update dependencies: `npm update`
- Security audit: `npm audit`
- Check for Next.js updates

### Content Updates
- Portfolio images
- Testimonials
- Service offerings
- Pricing (if applicable)
- Contact information

---

**Built with ❤️ in Addis Ababa**

For detailed guides, see:
- [CUSTOMIZATION.md](./CUSTOMIZATION.md) - How to customize the website
- [DEPLOYMENT.md](./DEPLOYMENT.md) - How to deploy to production
