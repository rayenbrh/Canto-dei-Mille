import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import { createPortal } from 'react-dom'
import { useI18n } from '../context/LanguageContext.jsx'
import { cn } from '../utils/cn.js'
import { ThemeToggle } from './ui/ThemeToggle.jsx'

export function Navbar() {
  const { locale, setLocale, t } = useI18n()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

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

  useEffect(() => setMounted(true), [])

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

  useEffect(() => {
    if (!open) return
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)')
    const onChange = () => {
      if (mq.matches) setOpen(false)
    }
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  const closeMenu = () => setOpen(false)

  const mobileOverlay =
    mounted &&
    createPortal(
      <AnimatePresence mode="wait">
        {open && (
          <motion.div
            key="mobile-nav-overlay"
            id="mobile-menu-dialog"
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[10050] flex max-h-[100dvh] min-h-0 flex-col bg-obsidian lg:hidden"
            style={{
              paddingTop: 'max(0px, env(safe-area-inset-top))',
              paddingBottom: 'max(0px, env(safe-area-inset-bottom))',
            }}
          >
            <div className="flex min-h-0 w-full flex-1 flex-col shadow-[0_0_0_1px_rgba(201,168,76,0.12)]">
              {/* Top bar — always opaque when menu open */}
              <div className="flex shrink-0 items-center justify-between gap-4 border-b border-ash/50 px-5 py-4">
                <a
                  href="#"
                  className="min-w-0 flex flex-col"
                  onClick={closeMenu}
                >
                  <span className="truncate font-display text-lg text-gold-mid">Canto dei Mille</span>
                  <span className="font-body text-[8px] font-light uppercase tracking-[0.35em] text-stone">
                    {t('nav.tagline')}
                  </span>
                </a>
                <div className="flex shrink-0 items-center gap-1">
                  <div className="flex items-center gap-0.5 pr-1 font-body text-[10px] font-light uppercase tracking-[0.15em] text-stone">
                    <button
                      type="button"
                      onClick={() => setLocale('en')}
                      className={cn('min-h-[44px] min-w-[40px]', locale === 'en' ? 'text-gold-mid' : 'text-silk/70')}
                    >
                      EN
                    </button>
                    <span className="text-stone/50" aria-hidden>
                      /
                    </span>
                    <button
                      type="button"
                      onClick={() => setLocale('it')}
                      className={cn('min-h-[44px] min-w-[40px]', locale === 'it' ? 'text-gold-mid' : 'text-silk/70')}
                    >
                      IT
                    </button>
                  </div>
                  <ThemeToggle />
                  <button
                    type="button"
                    aria-label={t('a11y.closeMenu')}
                    className="flex h-11 min-h-[44px] min-w-[44px] items-center justify-center rounded-none border border-ash/50 text-gold-mid transition-colors hover:border-gold-mid hover:bg-ash/30"
                    onClick={closeMenu}
                  >
                    <X className="h-6 w-6" strokeWidth={1.1} />
                  </button>
                </div>
              </div>

              {/* Links */}
              <nav className="flex min-h-0 flex-1 flex-col items-center justify-center gap-2 overflow-y-auto px-6 py-10">
                {links.map((l, i) => (
                  <motion.a
                    key={l.href}
                    href={l.href}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 + i * 0.05, duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    onClick={closeMenu}
                    className="group relative w-full max-w-md py-4 text-center font-display text-4xl font-normal tracking-tight text-silk sm:text-5xl"
                  >
                    <span className="relative inline-block">
                      {l.label}
                      <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold-mid transition-all duration-300 group-hover:w-full" />
                    </span>
                  </motion.a>
                ))}
              </nav>

              <div className="shrink-0 border-t border-ash/40 px-6 py-5 text-center">
                <a
                  href="#contact"
                  onClick={closeMenu}
                  className="inline-block border border-gold-mid px-8 py-3 font-body text-xs font-light uppercase tracking-[0.2em] text-gold-mid transition-colors hover:bg-gold-mid hover:text-obsidian"
                >
                  {t('nav.bookNow')}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>,
      document.body,
    )

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-500',
        open
          ? 'border-b border-ash/50 bg-obsidian shadow-[0_8px_32px_rgba(0,0,0,0.35)] dark:border-ash/50 dark:bg-obsidian'
          : scrolled
            ? 'border-b border-stone/20 bg-cream/90 backdrop-blur-xl dark:border-ash/40 dark:bg-obsidian/85'
            : 'border-b border-transparent bg-transparent',
      )}
    >
      <nav className="mx-auto flex max-w-[1600px] items-center justify-between px-5 py-5 md:px-10 lg:px-14">
        <a href="#" className="group flex min-w-0 flex-col">
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
            aria-controls="mobile-menu-dialog"
            aria-label={open ? t('a11y.closeMenu') : t('a11y.openMenu')}
            className="flex h-11 min-h-[44px] min-w-[44px] items-center justify-center text-gold-mid"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X className="h-6 w-6" strokeWidth={1.1} /> : <Menu className="h-6 w-6" strokeWidth={1.1} />}
          </button>
        </div>
      </nav>

      {mobileOverlay}
    </header>
  )
}
