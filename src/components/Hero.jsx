import { motion, useScroll, useTransform } from 'framer-motion'
import { useI18n } from '../context/LanguageContext.jsx'
import { resolveAssetUrl, images } from '../config/images.js'
import { MagneticButton } from './ui/MagneticButton.jsx'

export function Hero() {
  const { t, messages } = useI18n()
  const title = messages.hero.title
  const { scrollY } = useScroll()
  const yBg = useTransform(scrollY, [0, 500], ['0%', '20%'])

  return (
    <section className="relative h-[100dvh] min-h-[600px] w-full overflow-hidden bg-obsidian">
      <motion.div
        style={{ y: yBg }}
        className="absolute inset-0 scale-105 bg-cover bg-center"
        role="img"
        aria-label={t('hero.ariaHero')}
      >
        <img
          src={resolveAssetUrl(images.hero.background, 'hero.background')}
          alt=""
          className="h-full w-full object-cover"
        />
      </motion.div>
      <div
        className="absolute inset-0 bg-gradient-to-b from-[rgba(10,9,6,0.3)] via-[rgba(10,9,6,0.6)] to-[rgba(10,9,6,0.95)]"
        aria-hidden
      />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 pb-36 pt-24 md:pt-28">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6 text-center font-body text-[11px] font-light uppercase tracking-[0.3em] text-gold-mid"
        >
          {t('hero.eyebrow')}
        </motion.p>

        <h1 className="flex flex-wrap justify-center gap-x-[0.05em] font-display text-[clamp(52px,8vw,96px)] font-light leading-[0.95] tracking-[-0.03em] text-silk">
          {title.split('').map((char, i) => (
            <motion.span
              key={`${char}-${i}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 + i * 0.04, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="inline-block"
            >
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
        </h1>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1.1, duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-8 h-px w-20 origin-center bg-gold-mid md:w-[80px]"
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.8 }}
          className="mt-8 max-w-xl text-center font-displayItalic text-2xl font-light italic text-silk/80 md:text-[24px]"
        >
          {t('hero.subtitle')}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-4"
        >
          <MagneticButton
            type="button"
            className="border border-transparent bg-gold-mid px-8 py-3.5 font-body text-xs font-normal uppercase tracking-[0.2em] text-obsidian transition-colors duration-300 hover:bg-gold-bright"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            {t('hero.ctaPrimary')}
          </MagneticButton>
          <MagneticButton
            type="button"
            className="border border-gold-mid bg-transparent px-8 py-3.5 font-body text-xs font-light uppercase tracking-[0.2em] text-gold-mid transition-colors duration-300 hover:bg-gold-mid/10"
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          >
            {t('hero.ctaSecondary')}
          </MagneticButton>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center gap-3"
        >
          <span className="font-body text-[8px] font-light uppercase tracking-[0.35em] text-silk/60">
            {t('hero.scroll')}
          </span>
          <div className="h-10 w-px overflow-hidden bg-ash/50">
            <motion.div
              className="h-1/2 w-full bg-gold-mid/80"
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
