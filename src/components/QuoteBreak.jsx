import { motion } from 'framer-motion'
import { useI18n } from '../context/LanguageContext.jsx'
import { resolveAssetUrl, images } from '../config/images.js'

const viewport = { once: true, margin: '-100px' }

export function QuoteBreak() {
  const { t } = useI18n()

  return (
    <section className="relative min-h-[70vh] w-full overflow-hidden py-24 md:min-h-[80vh] md:py-32">
      <img
        src={resolveAssetUrl(images.quote.background, 'quote.background')}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-[rgba(10,9,6,0.72)] dark:bg-[rgba(10,9,6,0.78)]" aria-hidden />

      <div className="relative z-10 mx-auto flex min-h-[50vh] max-w-4xl flex-col items-center justify-center px-6 text-center">
        <motion.blockquote
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.8 }}
          className="font-displayItalic text-[clamp(28px,5vw,52px)] font-light italic leading-[1.2] text-silk"
        >
          &ldquo;{t('quote.text')}&rdquo;
        </motion.blockquote>
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={viewport}
          transition={{ delay: 0.3, duration: 1 }}
          className="mx-auto mt-10 h-px w-20 origin-center bg-gold-mid md:w-[80px]"
        />
      </div>
    </section>
  )
}
