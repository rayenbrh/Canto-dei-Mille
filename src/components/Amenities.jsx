import { motion } from 'framer-motion'
import {
  Armchair,
  Bath,
  Dog,
  Fan,
  Flame,
  Headphones,
  Luggage,
  Monitor,
  Shield,
  Sparkles,
  Trees,
  Tv,
  Wifi,
} from 'lucide-react'
import { useI18n } from '../context/LanguageContext.jsx'

const viewport = { once: true, margin: '-100px' }

const items = [
  { id: 'wifi', Icon: Wifi },
  { id: 'ac', Icon: Fan },
  { id: 'garden', Icon: Trees },
  { id: 'terrace', Icon: Sparkles },
  { id: 'lounge', Icon: Armchair },
  { id: 'pets', Icon: Dog },
  { id: 'concierge', Icon: Headphones },
  { id: 'nonsmoking', Icon: Shield },
  { id: 'tv', Icon: Tv },
  { id: 'bathroom', Icon: Bath },
  { id: 'luggage', Icon: Luggage },
  { id: 'heating', Icon: Flame },
]

export function Amenities() {
  const { t } = useI18n()

  return (
    <section id="amenities" className="bg-ivory dark:bg-ink">
      <div className="mx-auto max-w-[1600px] px-6 py-24 md:px-10 lg:px-14 lg:py-32">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={viewport}
              className="font-body text-[11px] font-light uppercase tracking-[0.25em] text-gold-mid"
            >
              {t('amenities.eyebrow')}
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ delay: 0.2 }}
              className="mt-4 font-display text-[clamp(40px,6vw,72px)] font-normal tracking-[-0.02em] text-carbon dark:text-silk"
            >
              {t('amenities.title')}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ delay: 0.4 }}
              className="mt-6 max-w-md font-body text-base font-light leading-[1.8] text-stone dark:text-silk"
            >
              {t('amenities.body')}
            </motion.p>
          </div>

          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
            {items.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ delay: 0.05 * i }}
                className="group border border-ash/50 bg-transparent px-4 py-6 transition-colors duration-300 hover:border-gold-dim hover:bg-carbon hover:text-silk dark:border-ash/40"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 22 }}
                  className="text-gold-mid transition-[filter] group-hover:drop-shadow-[0_0_12px_rgba(201,168,76,0.45)]"
                >
                  <item.Icon className="h-6 w-6" strokeWidth={1.1} />
                </motion.div>
                <p className="mt-4 font-body text-[13px] font-normal text-carbon dark:text-silk">
                  {t(`amenities.items.${item.id}`)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
