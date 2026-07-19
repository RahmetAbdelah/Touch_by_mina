import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import { ThemeProvider } from '@/lib/ThemeProvider'
import { LanguageProvider } from '@/lib/LanguageProvider'

export const metadata: Metadata = {
  title: 'Touch By Mina | Luxury Makeup Artist in Addis Ababa',
  description: 'Professional makeup artist specializing in bridal, event, and photoshoot makeup. Based in Addis Ababa, Ethiopia.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body>
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
