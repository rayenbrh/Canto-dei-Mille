import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { getByPath, translations } from '../i18n/translations.js'

const STORAGE_KEY = 'cdm-locale'

export const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [locale, setLocaleState] = useState(() => {
    if (typeof window === 'undefined') return 'en'
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored === 'it' || stored === 'en') return stored
    return 'en'
  })

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, locale)
    document.documentElement.lang = locale === 'it' ? 'it' : 'en'
    const title = getByPath(translations[locale], 'meta.title')
    if (typeof title === 'string') document.title = title
  }, [locale])

  const setLocale = useCallback((loc) => {
    if (loc === 'en' || loc === 'it') setLocaleState(loc)
  }, [])

  const t = useCallback(
    (path) => {
      const val = getByPath(translations[locale], path)
      if (val === undefined) return path
      if (typeof val === 'string') return val
      return path
    },
    [locale],
  )

  const messages = translations[locale]

  const value = useMemo(() => ({ locale, setLocale, t, messages }), [locale, setLocale, t, messages])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useI18n() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useI18n must be used within LanguageProvider')
  return ctx
}
