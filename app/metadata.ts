import type { Metadata } from 'next'
import { siteConfig } from '@/lib/siteConfig'

export const siteMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: 'Touch By Mina | Luxury Makeup Artist in Addis Ababa',
    template: '%s | Touch By Mina'
  },
  description: 'Professional makeup artist specializing in bridal, event, and photoshoot makeup. Based in Addis Ababa, Ethiopia. Book your appointment today.',
  keywords: ['makeup artist', 'Addis Ababa', 'Ethiopia', 'bridal makeup', 'event makeup', 'photoshoot makeup', 'makeup training', 'henna artist'],
  authors: [{ name: 'Touch By Mina' }],
  creator: 'Touch By Mina',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: ['ar_SA', 'am_ET'],
    url: siteConfig.url,
    siteName: 'Touch By Mina',
    title: 'Touch By Mina | Luxury Makeup Artist',
    description: 'Professional makeup artist in Addis Ababa, Ethiopia. Specializing in bridal, event, and photoshoot makeup.',
    images: [
      {
        url: '/mina2.png',
        width: 1200,
        height: 630,
        alt: 'Touch By Mina - Luxury Makeup Artist'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Touch By Mina | Luxury Makeup Artist',
    description: 'Professional makeup artist in Addis Ababa, Ethiopia',
    images: ['/mina2.png']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'C2Q6VehRrLLNDnM8E7AKGMSwd2vGdgIQebyoVk70AnA',
  }
}
