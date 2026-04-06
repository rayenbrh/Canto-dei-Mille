import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { useI18n } from '../context/LanguageContext.jsx'
import { resolveAssetUrl, images } from '../config/images.js'
import { useCountUp } from '../hooks/useCountUp.js'

const viewport = { once: true, margin: '-100px' }

function Stat({ label, value, suffix = '', decimals = 0, enabled }) {
  const n = useCountUp(value, { decimals, enabled })
  return (
    <div className="text-center md:text-left">
      <p className="font-display text-4xl font-normal text-gold-mid md:text-5xl lg:text-6xl">
        {decimals ? n.toFixed(decimals) : n}
        {suffix}
      </p>
      <p className="mt-1 font-body text-[11px] font-light uppercase tracking-[0.2em] text-stone dark:text-ash">
        {label}
      </p>
    </div>
  )
}

export function About() {
  const { t } = useI18n()
  const statsRef = useRef(null)
  const statsInView = useInView(statsRef, { once: true, margin: '-80px' })

  return (
    <section id="about" className="bg-ivory dark:bg-ink">
      <div className="mx-auto grid max-w-[1600px] gap-12 px-6 py-24 md:grid-cols-2 md:gap-16 md:px-10 lg:gap-24 lg:px-14 lg:py-32">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={viewport}
          transition={{ duration: 0.6 }}
          className="relative order-2 md:order-1"
        >
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              src={resolveAssetUrl(images.about.main, 'about.main')}
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={viewport}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="pointer-events-none absolute -bottom-4 -right-4 h-full w-full border border-gold-dim"
            aria-hidden
          />
        </motion.div>

        <div className="order-1 flex flex-col justify-center md:order-2">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewport}
            transition={{ duration: 0.3 }}
            className="font-body text-[11px] font-light uppercase tracking-[0.25em] text-gold-mid"
          >
            {t('about.eyebrow')}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ delay: 0.2, duration: 0.55 }}
            className="mt-4 font-display text-[clamp(40px,6vw,72px)] font-normal leading-[1.05] tracking-[-0.02em] text-carbon dark:text-silk"
          >
            {t('about.title')}
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ delay: 0.35, duration: 0.5 }}
            className="mt-4 font-displayItalic text-4xl font-medium italic text-florence"
          >
            {t('about.subtitle')}
          </motion.h3>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ delay: 0.4, duration: 0.55 }}
            className="mt-8 space-y-5 font-body text-base font-light leading-[1.8] text-stone dark:text-silk"
          >
            <p>{t('about.p1')}</p>
            <p>{t('about.p2')}</p>
            <p>{t('about.p3')}</p>
          </motion.div>

          <div ref={statsRef} className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-4">
            <Stat label={t('about.stats.rooms')} value={6} suffix="+" enabled={statsInView} />
            <Stat label={t('about.stats.bathrooms')} value={7} enabled={statsInView} />
            <Stat label={t('about.stats.beds')} value={11} enabled={statsInView} />
            <Stat label={t('about.stats.rating')} value={4.8} decimals={1} enabled={statsInView} />
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={viewport}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="mt-6 font-body text-[13px] font-light text-stone dark:text-stone"
          >
            {t('about.reviewsLine')}
          </motion.p>
        </div>
      </div>
    </section>
  )
}
