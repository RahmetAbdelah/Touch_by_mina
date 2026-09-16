'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Sun, Moon, ChevronDown } from 'lucide-react'
import { useTheme } from '@/lib/ThemeProvider'
import { useLang, type Lang } from '@/lib/LanguageProvider'

const languages: { code: Lang; label: string }[] = [
  { code: 'en', label: 'English' },
  { code: 'ar', label: 'العربية' },
  { code: 'am', label: 'አማርኛ' },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const { isDark, toggleTheme } = useTheme()
  const { lang, setLang, t, langLabel } = useLang()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { href: '/', label: t.nav.home },
    { href: '/about', label: t.nav.about },
    { href: '/services', label: t.nav.services },
    { href: '/portfolio', label: t.nav.portfolio },
    { href: '/testimonials', label: t.nav.testimonials },
    { href: '/courses', label: t.nav.courses },
    { href: '/contact', label: t.nav.contact },
  ]

  return (
    <nav
      className={`fixed z-50 w-full transition-all duration-700 ${
        scrolled
          ? 'border-b border-[color:var(--border-subtle)] bg-[rgba(247,241,234,0.8)] shadow-[0_10px_40px_rgba(0,0,0,0.06)] backdrop-blur-xl dark:bg-[rgba(18,15,13,0.8)]'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="text-2xl font-bold tracking-tight text-primary md:text-3xl">
            Touch By <span className="text-gradient">Mina</span>
          </Link>

          <div className="hidden items-center gap-1 md:flex">
            {links.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-3 py-2 text-[0.68rem] uppercase tracking-[0.2em] transition-colors duration-300 lg:px-4 ${
                    isActive ? 'text-brand-gold' : 'text-secondary hover:text-primary'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-px bg-gradient-to-r from-brand-gold/0 via-brand-gold/80 to-brand-gold/0" />
                  )}
                </Link>
              )
            })}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="rounded-full p-2 text-secondary transition-colors duration-300 hover:text-brand-gold"
              aria-label={isDark ? t.theme.light : t.theme.dark}
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <div className="relative hidden md:block">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1 rounded-full border border-[color:var(--border-color)] px-2.5 py-1.5 text-[0.62rem] uppercase tracking-[0.2em] text-secondary transition-colors duration-300 hover:text-brand-gold"
              >
                {langLabel}
                <ChevronDown size={12} className={`transition-transform duration-200 ${langOpen ? 'rotate-180' : ''}`} />
              </button>
              {langOpen && (
                <>
                  <div className="fixed inset-0 z-10" onClick={() => setLangOpen(false)} />
                  <div className="absolute right-0 top-full z-20 mt-2 w-36 rounded-2xl border border-[color:var(--border-color)] bg-[color:var(--bg-surface)] p-1 shadow-[0_18px_50px_rgba(0,0,0,0.12)] backdrop-blur-xl">
                    {languages.map((l) => (
                      <button
                        key={l.code}
                        onClick={() => {
                          setLang(l.code)
                          setLangOpen(false)
                        }}
                        className={`block w-full rounded-xl px-4 py-2.5 text-left text-sm transition-colors duration-200 ${
                          lang === l.code
                            ? 'bg-brand-gold/10 text-brand-gold'
                            : 'text-secondary hover:bg-[color:var(--bg-surface-dim)] hover:text-primary'
                        }`}
                      >
                        {l.label}
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-secondary transition-colors hover:text-brand-gold md:hidden"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        <div className={`overflow-hidden transition-all duration-400 md:hidden ${isOpen ? 'max-h-[34rem] pb-6' : 'max-h-0'}`}>
          {links.map((link) => {
            const isActive = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-2 py-3 text-sm uppercase tracking-[0.16em] transition-colors duration-300 ${
                  isActive ? 'border-l-2 border-brand-gold text-brand-gold' : 'text-secondary hover:text-primary'
                }`}
              >
                {link.label}
              </Link>
            )
          })}
          <div className="mt-4 flex items-center gap-3 border-t border-[color:var(--border-subtle)] pt-4">
            {languages.map((l) => (
              <button
                key={l.code}
                onClick={() => {
                  setLang(l.code)
                  setIsOpen(false)
                }}
                className={`border px-3 py-1.5 text-[0.62rem] uppercase tracking-[0.15em] transition-colors ${
                  lang === l.code
                    ? 'border-brand-gold text-brand-gold'
                    : 'border-[color:var(--border-color)] text-secondary hover:text-primary'
                }`}
              >
                {l.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
