'use client'

import { createContext, useContext, useState, useCallback, useEffect, type ReactNode } from 'react'
import en from './translations/en'
import ar from './translations/ar'
import am from './translations/am'
import type { Translations } from './translations/en'

type Lang = 'en' | 'ar' | 'am'

const translations: Record<Lang, Translations> = { en, ar, am }

interface LangContextType {
  lang: Lang
  t: Translations
  setLang: (lang: Lang) => void
  dir: 'ltr' | 'rtl'
  langLabel: string
}

const LangContext = createContext<LangContextType>({
  lang: 'en',
  t: en,
  setLang: () => {},
  dir: 'ltr',
  langLabel: 'EN',
})

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>('en')

  const setLang = useCallback((l: Lang) => {
    setLangState(l)
    localStorage.setItem('touchbymina-lang', l)
    document.documentElement.lang = l === 'ar' ? 'ar' : l === 'am' ? 'am' : 'en'
    document.documentElement.dir = l === 'ar' ? 'rtl' : 'ltr'
  }, [])

  useEffect(() => {
    const saved = localStorage.getItem('touchbymina-lang') as Lang | null
    if (saved && translations[saved]) {
      setLang(saved)
    }
  }, [setLang])

  const dir = lang === 'ar' ? 'rtl' : 'ltr'
  const langLabel = lang === 'en' ? 'EN' : lang === 'ar' ? 'AR' : 'AM'

  return (
    <LangContext.Provider value={{ lang, t: translations[lang], setLang, dir, langLabel }}>
      {children}
    </LangContext.Provider>
  )
}

export const useLang = () => useContext(LangContext)
export const useT = () => useContext(LangContext).t
export type { Lang }
