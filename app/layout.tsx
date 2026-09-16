import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import { ThemeProvider } from '@/lib/ThemeProvider'
import { LanguageProvider } from '@/lib/LanguageProvider'
import { JsonLd } from './jsonld'
import { siteMetadata } from './metadata'

export const metadata: Metadata = siteMetadata

export const viewport = {
  themeColor: '#f7f1ea',
  colorScheme: 'light dark',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <JsonLd />
        <ThemeProvider>
          <LanguageProvider>
            <Navigation />
            <main className="min-h-screen">
              {children}
            </main>
            <Footer />
            <WhatsAppButton />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
