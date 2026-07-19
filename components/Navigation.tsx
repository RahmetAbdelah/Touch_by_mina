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
    const onScroll = () => setScrolled(window.scrollY > 20)
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
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      scrolled ? 'bg-primary/95 backdrop-blur-md border-b border-subtle' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="text-2xl md:text-3xl font-bold tracking-tight font-serif">
            Touch By <span className="text-gradient">Mina</span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {links.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-3 lg:px-4 py-2 text-xs lg:text-sm tracking-[0.12em] uppercase transition-colors duration-300 ${
                    isActive
                      ? 'text-brand-gold'
                      : 'text-secondary hover:text-primary'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 lg:left-4 right-3 lg:right-4 h-[1px] bg-gradient-to-r from-brand-gold/80 to-transparent" />
                  )}
                </Link>
              )
            })}
          </div>

          <div className="flex items-center gap-2">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-secondary hover:text-brand-gold transition-colors duration-300"
              aria-label={isDark ? t.theme.light : t.theme.dark}
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {/* Language Switcher */}
            <div className="relative hidden md:block">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1 px-2 py-1.5 text-xs tracking-wider uppercase text-secondary hover:text-brand-gold transition-colors duration-300 border border-subtle rounded"
              >
                {langLabel}
                <ChevronDown size={12} className={`transition-transform duration-200 ${langOpen ? 'rotate-180' : ''}`} />
              </button>
              {langOpen && (
                <>
                  <div className="fixed inset-0 z-10" onClick={() => setLangOpen(false)} />
                  <div className="absolute right-0 top-full mt-1 w-36 bg-surface border border-subtle shadow-xl z-20">
                    {languages.map((l) => (
                      <button
                        key={l.code}
                        onClick={() => { setLang(l.code); setLangOpen(false) }}
                        className={`block w-full text-left px-4 py-2.5 text-sm transition-colors duration-200 ${
                          lang === l.code
                            ? 'text-brand-gold bg-brand-gold/5'
                            : 'text-secondary hover:text-primary hover:bg-surface-dim'
                        }`}
                      >
                        {l.label}
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-secondary hover:text-brand-gold p-2 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-400 ${
          isOpen ? 'max-h-[32rem] pb-6' : 'max-h-0'
        }`}>
          {links.map((link) => {
            const isActive = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block py-3 px-2 text-sm tracking-[0.12em] uppercase transition-colors duration-300 ${
                  isActive ? 'text-brand-gold border-l-2 border-brand-gold/80' : 'text-secondary hover:text-primary'
                }`}
              >
                {link.label}
              </Link>
            )
          })}
          <div className="flex items-center gap-3 pt-4 px-2 border-t border-subtle mt-4">
            {languages.map((l) => (
              <button
                key={l.code}
                onClick={() => { setLang(l.code); setIsOpen(false) }}
                className={`text-xs px-3 py-1.5 border transition-colors ${
                  lang === l.code
                    ? 'border-brand-gold text-brand-gold'
                    : 'border-subtle text-secondary hover:text-primary'
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
