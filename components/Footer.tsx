'use client'

import Link from 'next/link'
import { Instagram, Phone, MapPin, MessageCircle, Heart } from 'lucide-react'
import { useT } from '@/lib/LanguageProvider'

export default function Footer() {
  const t = useT()

  return (
    <footer className="border-t border-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-20">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold mb-4 font-serif">Touch By <span className="text-gradient">Mina</span></h3>
            <p className="text-muted text-sm leading-relaxed mb-6">{t.footer.tagline}</p>
            <div className="flex gap-3">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-brand-gold/20 flex items-center justify-center text-brand-gold/80 hover:bg-brand-gold/90 hover:text-[#0B1F1A] transition-all duration-300">
                <Instagram size={16} />
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-brand-gold/20 flex items-center justify-center text-brand-gold/80 hover:bg-brand-gold/90 hover:text-[#0B1F1A] transition-all duration-300">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-6 text-brand-gold/70 tracking-[0.15em] uppercase">{t.footer.quickLinks}</h4>
            <div className="space-y-3">
              {[
                { href: '/about', label: t.nav.about },
                { href: '/services', label: t.nav.services },
                { href: '/portfolio', label: t.nav.portfolio },
                { href: '/testimonials', label: t.nav.testimonials },
                { href: '/courses', label: t.nav.courses },
              ].map((l) => (
                <Link key={l.href} href={l.href} className="block text-sm text-muted hover:text-brand-gold/80 transition-colors duration-300">{l.label}</Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-6 text-brand-gold/70 tracking-[0.15em] uppercase">{t.footer.services}</h4>
            <div className="space-y-3">
              {[t.services.bridalTitle, t.services.eventTitle, t.services.photoshootTitle, t.services.everydayTitle, t.services.hennaTitle, t.services.trainingTitle].map((s) => (
                <Link key={s} href="/services" className="block text-sm text-muted hover:text-brand-gold/80 transition-colors duration-300">{s}</Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-6 text-brand-gold/70 tracking-[0.15em] uppercase">{t.footer.contact}</h4>
            <div className="space-y-4">
              <a href="tel:+251" className="flex items-center gap-3 text-sm text-muted hover:text-brand-gold/80 transition-colors duration-300 group">
                <Phone size={14} className="text-brand-gold/50 group-hover:text-brand-gold/80" />
                <span>+251 9XX XXX XXX</span>
              </a>
              <a href="https://wa.me/251" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-muted hover:text-brand-gold/80 transition-colors duration-300 group">
                <MessageCircle size={14} className="text-brand-gold/50 group-hover:text-brand-gold/80" />
                <span>{t.whatsapp}</span>
              </a>
              <a href="https://instagram.com/touchbymina" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-muted hover:text-brand-gold/80 transition-colors duration-300 group">
                <Instagram size={14} className="text-brand-gold/50 group-hover:text-brand-gold/80" />
                <span>@touchbymina</span>
              </a>
              <div className="flex items-start gap-3 text-sm text-muted">
                <MapPin size={14} className="text-brand-gold/50 mt-0.5 flex-shrink-0" />
                <span>{t.contact.locationValue}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-subtle mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted text-xs tracking-wide">&copy; {new Date().getFullYear()} Touch By Mina. {t.footer.rights}</p>
          <p className="text-muted text-xs flex items-center gap-1">{t.footer.crafted} <Heart size={10} className="text-brand-gold/60" /> {t.footer.in}</p>
        </div>
      </div>
    </footer>
  )
}
