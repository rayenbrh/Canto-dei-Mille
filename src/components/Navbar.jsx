import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import { useI18n } from '../context/LanguageContext.jsx'
import { cn } from '../utils/cn.js'
import { ThemeToggle } from './ui/ThemeToggle.jsx'

export function Navbar() {
  const { locale, setLocale, t } = useI18n()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  const links = useMemo(
    () => [
      { href: '#about', label: t('nav.about') },
      { href: '#rooms', label: t('nav.rooms') },
      { href: '#amenities', label: t('nav.amenities') },
      { href: '#location', label: t('nav.location') },
      { href: '#contact', label: t('nav.contact') },
    ],
    [t],
  )

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-500',
        scrolled
          ? 'border-b border-stone/20 bg-cream/90 backdrop-blur-xl dark:border-ash/40 dark:bg-obsidian/85'
          : 'border-b border-transparent bg-transparent',
      )}
    >
      <nav className="mx-auto flex max-w-[1600px] items-center justify-between px-5 py-5 md:px-10 lg:px-14">
        <a href="#" className="group flex flex-col">
          <span className="font-display text-xl text-gold-mid transition-colors group-hover:text-gold-bright">
            Canto dei Mille
          </span>
          <span className="font-body text-[8px] font-light uppercase tracking-[0.35em] text-stone dark:text-silk/80">
            {t('nav.tagline')}
          </span>
        </a>

        <div className="hidden flex-1 items-center justify-center gap-10 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="group relative font-body text-xs font-light uppercase tracking-[0.15em] text-carbon dark:text-silk"
            >
              <span>{l.label}</span>
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold-mid transition-all duration-300 ease-out group-hover:w-full" />
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-4 lg:flex">
          <div className="flex items-center gap-1 font-body text-[11px] font-light uppercase tracking-[0.2em] text-stone dark:text-silk/70">
            <button
              type="button"
              onClick={() => setLocale('en')}
              className={cn(
                'min-h-[44px] min-w-[44px] px-2 transition-colors',
                locale === 'en' ? 'text-gold-mid' : 'hover:text-gold-mid/80',
              )}
            >
              EN
            </button>
            <span className="text-stone/50" aria-hidden>
              /
            </span>
            <button
              type="button"
              onClick={() => setLocale('it')}
              className={cn(
                'min-h-[44px] min-w-[44px] px-2 transition-colors',
                locale === 'it' ? 'text-gold-mid' : 'hover:text-gold-mid/80',
              )}
            >
              IT
            </button>
          </div>
          <ThemeToggle />
          <a
            href="#contact"
            className="border border-gold-mid px-5 py-2.5 font-body text-xs font-light uppercase tracking-[0.15em] text-gold-mid transition-colors duration-300 hover:bg-gold-mid hover:text-obsidian dark:text-gold-bright dark:hover:text-obsidian"
          >
            {t('nav.bookNow')}
          </a>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <div className="flex items-center gap-0.5 font-body text-[10px] font-light uppercase tracking-[0.15em] text-stone dark:text-silk/70">
            <button
              type="button"
              onClick={() => setLocale('en')}
              className={cn('min-h-[44px] min-w-[40px]', locale === 'en' ? 'text-gold-mid' : '')}
            >
              EN
            </button>
            <span className="opacity-40">/</span>
            <button
              type="button"
              onClick={() => setLocale('it')}
              className={cn('min-h-[44px] min-w-[40px]', locale === 'it' ? 'text-gold-mid' : '')}
            >
              IT
            </button>
          </div>
          <ThemeToggle />
          <button
            type="button"
            aria-expanded={open}
            aria-label={open ? t('a11y.closeMenu') : t('a11y.openMenu')}
            className="flex h-11 min-h-[44px] min-w-[44px] items-center justify-center text-gold-mid"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X className="h-6 w-6" strokeWidth={1.1} /> : <Menu className="h-6 w-6" strokeWidth={1.1} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ y: '-100%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: '-100%', opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[100] flex flex-col bg-obsidian px-8 pb-16 pt-28 lg:hidden"
          >
            <div className="flex flex-1 flex-col items-center justify-center gap-8">
              {links.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.06 * i, duration: 0.45 }}
                  onClick={() => setOpen(false)}
                  className="group relative font-display text-5xl font-normal text-silk"
                >
                  {l.label}
                  <span className="absolute -bottom-2 left-0 h-px w-0 bg-gold-mid transition-all duration-300 group-hover:w-full" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
