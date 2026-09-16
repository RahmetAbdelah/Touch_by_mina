'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Instagram, Phone, MapPin, MessageCircle, Heart, ArrowRight, Mail } from 'lucide-react'
import { useT } from '@/lib/LanguageProvider'
import { siteConfig, socialUrls } from '@/lib/siteConfig'

export default function Footer() {
  const t = useT()
  const [newsletterEmail, setNewsletterEmail] = useState('')
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false)

  const handleNewsletterSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const subject = encodeURIComponent('Touch By Mina newsletter subscription')
    const body = encodeURIComponent(`Please add ${newsletterEmail} to the Touch By Mina newsletter.`)
    window.location.href = `${socialUrls.email}?subject=${subject}&body=${body}`
    setNewsletterSubmitted(true)
  }

  return (
    <footer className="relative overflow-hidden border-t border-[color:var(--border-subtle)] bg-[rgba(255,255,255,0.2)] backdrop-blur-sm">
      <div className="absolute inset-0 opacity-60">
        <div className="footer-orb footer-orb-left" />
        <div className="footer-orb footer-orb-right" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20">
        <div className="mb-10 rounded-[2rem] border border-[color:var(--border-subtle)] bg-[rgba(255,255,255,0.18)] p-4 shadow-[0_18px_50px_rgba(0,0,0,0.04)] md:p-6">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-[0.68rem] uppercase tracking-[0.2em] text-brand-gold/70">Newsletter</p>
              <h3 className="mt-2 text-2xl font-bold text-primary md:text-3xl">Receive beauty notes & updates</h3>
            </div>

            <form className="flex w-full max-w-xl flex-col gap-3 sm:flex-row" aria-label="Newsletter form" onSubmit={handleNewsletterSubmit}>
              <label className="sr-only" htmlFor="newsletter-email">Email address</label>
              <input
                id="newsletter-email"
                type="email"
                value={newsletterEmail}
                onChange={(event) => {
                  setNewsletterEmail(event.target.value)
                  setNewsletterSubmitted(false)
                }}
                placeholder="Your email address"
                required
                className="newsletter-input"
              />
              <button type="submit" className="btn-primary inline-flex items-center justify-center gap-2 whitespace-nowrap">
                {newsletterSubmitted ? 'Email ready' : 'Join now'} <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>

        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <h3 className="mb-4 text-2xl font-bold font-serif text-primary">
              Touch By <span className="text-gradient">Mina</span>
            </h3>
            <p className="mb-6 text-sm leading-relaxed text-muted">{t.footer.tagline}</p>
            <div className="flex gap-3">
              <a href={socialUrls.instagram} target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-gold/20 text-brand-gold/80 transition-all duration-300 hover:bg-brand-gold/90 hover:text-[#171311]">
                <Instagram size={16} />
              </a>
              <a href={socialUrls.tiktok} target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-gold/20 text-brand-gold/80 transition-all duration-300 hover:bg-brand-gold/90 hover:text-[#171311]">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                </svg>
              </a>
              <a href={socialUrls.email} className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-gold/20 text-brand-gold/80 transition-all duration-300 hover:bg-brand-gold/90 hover:text-[#171311]">
                <Mail size={16} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-6 text-sm font-semibold uppercase tracking-[0.15em] text-brand-gold/70">{t.footer.quickLinks}</h4>
            <div className="space-y-3">
              {[
                { href: '/about', label: t.nav.about },
                { href: '/services', label: t.nav.services },
                { href: '/portfolio', label: t.nav.portfolio },
                { href: '/testimonials', label: t.nav.testimonials },
                { href: '/courses', label: t.nav.courses },
              ].map((l) => (
                <Link key={l.href} href={l.href} className="block text-sm text-muted transition-colors duration-300 hover:text-brand-gold/80">
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-6 text-sm font-semibold uppercase tracking-[0.15em] text-brand-gold/70">{t.footer.services}</h4>
            <div className="space-y-3">
              {[t.services.bridalTitle, t.services.eventTitle, t.services.photoshootTitle, t.services.everydayTitle, t.services.hennaTitle, t.services.trainingTitle].map((s) => (
                <Link key={s} href="/services" className="block text-sm text-muted transition-colors duration-300 hover:text-brand-gold/80">
                  {s}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-6 text-sm font-semibold uppercase tracking-[0.15em] text-brand-gold/70">{t.footer.contact}</h4>
            <div className="space-y-4">
              {siteConfig.phone && <a href={`tel:${siteConfig.phone.replace(/\s/g, '')}`} className="group flex items-center gap-3 text-sm text-muted transition-colors duration-300 hover:text-brand-gold/80">
                <Phone size={14} className="text-brand-gold/50 group-hover:text-brand-gold/80" />
                <span>{siteConfig.phone}</span>
              </a>}
              {socialUrls.whatsapp && <a href={socialUrls.whatsapp} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 text-sm text-muted transition-colors duration-300 hover:text-brand-gold/80">
                <MessageCircle size={14} className="text-brand-gold/50 group-hover:text-brand-gold/80" />
                <span>{t.whatsapp}</span>
              </a>}
              <a href={socialUrls.instagram} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 text-sm text-muted transition-colors duration-300 hover:text-brand-gold/80">
                <Instagram size={14} className="text-brand-gold/50 group-hover:text-brand-gold/80" />
                <span>@{siteConfig.instagramHandle}</span>
              </a>
              <div className="flex items-start gap-3 text-sm text-muted">
                <MapPin size={14} className="mt-0.5 flex-shrink-0 text-brand-gold/50" />
                <span>{t.contact.locationValue}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-[color:var(--border-subtle)] pt-8 md:flex-row">
          <p className="text-xs tracking-wide text-muted">&copy; {new Date().getFullYear()} Touch By Mina. {t.footer.rights}</p>
          <p className="flex items-center gap-1 text-xs text-muted">
            {t.footer.crafted} <Heart size={10} className="text-brand-gold/60" /> {t.footer.in}
          </p>
        </div>
      </div>
    </footer>
  )
}
