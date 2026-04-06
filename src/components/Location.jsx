import { motion } from 'framer-motion'
import { useI18n } from '../context/LanguageContext.jsx'

const viewport = { once: true, margin: '-100px' }

export function Location() {
  const { t, messages } = useI18n()
  const distances = messages.location.distances

  return (
    <section id="location" className="bg-ivory dark:bg-ink">
      <div className="mx-auto grid max-w-[1600px] gap-16 px-6 py-24 md:grid-cols-2 md:gap-20 md:px-10 lg:px-14 lg:py-32">
        <div>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewport}
            className="font-body text-[11px] font-light uppercase tracking-[0.25em] text-gold-mid"
          >
            {t('location.eyebrow')}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ delay: 0.2 }}
            className="mt-4 font-display text-[clamp(40px,6vw,72px)] font-normal tracking-[-0.02em] text-carbon dark:text-silk"
          >
            {t('location.title')}
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ delay: 0.4 }}
            className="mt-8 space-y-5 font-body text-base font-light leading-[1.8] text-stone dark:text-silk"
          >
            <p>{t('location.p1')}</p>
            <p>{t('location.p2')}</p>
          </motion.div>

          <ul className="mt-12 space-y-0">
            {distances.map((d) => (
              <li
                key={d.place}
                className="flex items-start gap-4 border-t border-ash/40 py-5 first:border-t-0 dark:border-ash/40"
              >
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-mid" />
                <div className="flex flex-1 flex-col gap-1 sm:flex-row sm:justify-between">
                  <span className="font-displayItalic text-lg italic text-carbon dark:text-silk">{d.place}</span>
                  <span className="font-body text-sm font-light text-stone">{d.dist}</span>
                </div>
              </li>
            ))}
          </ul>

          <p className="mt-10 font-body text-[15px] font-normal text-gold-mid">{t('location.address')}</p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          className="relative min-h-[320px] w-full overflow-hidden border border-gold-dim shadow-[inset_0_0_0_1px_rgba(140,109,47,0.35)] md:min-h-[480px]"
        >
          <iframe
            title={t('a11y.mapIframe')}
            src="https://maps.google.com/maps?q=Via+Frusa+16,+50131+Firenze+FI,+Italia&hl=it&z=16&output=embed"
            className="h-full min-h-[320px] w-full border-0 md:min-h-[480px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </div>
    </section>
  )
}
