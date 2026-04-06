import { motion } from 'framer-motion'
import { useI18n } from '../context/LanguageContext.jsx'
import { resolveAssetUrl, images } from '../config/images.js'
import { cn } from '../utils/cn.js'

const viewport = { once: true, margin: '-100px' }

export function Rooms() {
  const { t, messages } = useI18n()
  const cards = messages.rooms.cards

  return (
    <section id="rooms" className="bg-cream dark:bg-obsidian">
      <div className="mx-auto max-w-[1600px] px-6 py-24 md:px-10 lg:px-14 lg:py-32">
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={viewport}
          className="font-body text-[11px] font-light uppercase tracking-[0.25em] text-gold-mid"
        >
          {t('rooms.eyebrow')}
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ delay: 0.2 }}
          className="mt-4 font-display text-[clamp(40px,6vw,72px)] font-normal tracking-[-0.02em] text-carbon dark:text-silk"
        >
          {t('rooms.title')}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ delay: 0.4 }}
          className="mt-6 max-w-2xl font-body text-base font-light leading-[1.8] text-stone dark:text-silk"
        >
          {t('rooms.body')}
        </motion.p>

        <div className="mt-16 hidden gap-6 md:grid md:grid-cols-3 md:items-start">
          {images.rooms.map((room, i) => {
            const copy = cards[room.id]
            return (
              <motion.article
                key={room.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ delay: 0.1 * i }}
                className={cn(
                  'group flex flex-col overflow-hidden border border-stone/20 transition-colors dark:border-ash/40',
                  i === 0 && 'md:row-span-1 md:min-h-[520px]',
                )}
              >
                <div className="relative h-[260px] overflow-hidden md:h-[65%] md:min-h-[280px]">
                  <img
                    src={resolveAssetUrl(room.url, room.id)}
                    alt=""
                    className="h-full w-full object-cover transition-[clip-path] duration-500 ease-out group-hover:[clip-path:inset(4%_4%_4%_4%_round_2px)]"
                    style={{ clipPath: 'inset(0% round 2px)' }}
                    onError={(e) => {
                      e.currentTarget.src = resolveAssetUrl(images.fallback.room, 'fallback.room')
                    }}
                  />
                  <div className="pointer-events-none absolute inset-0 border border-transparent transition-colors duration-300 group-hover:border-gold-mid" />
                </div>
                <div className="flex flex-1 flex-col bg-carbon px-6 py-6 text-silk">
                  <h3 className="font-display text-[22px] font-normal">{copy.name}</h3>
                  <ul className="mt-3 space-y-1 font-body text-xs font-light text-silk/80">
                    {copy.features.map((f) => (
                      <li key={f}>{f}</li>
                    ))}
                  </ul>
                  <a
                    href="#contact"
                    className="mt-6 inline-flex items-center gap-1 font-body text-xs font-light text-gold-mid underline-offset-4 transition-all hover:underline"
                  >
                    {t('rooms.viewRoom')} <span aria-hidden>→</span>
                  </a>
                </div>
              </motion.article>
            )
          })}
        </div>

        <div className="mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 md:hidden [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {images.rooms.map((room) => {
            const copy = cards[room.id]
            return (
              <article
                key={room.id}
                className="w-[min(88vw,400px)] shrink-0 snap-center overflow-hidden border border-stone/20 dark:border-ash/40"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={resolveAssetUrl(room.url, room.id)}
                    alt=""
                    className="h-full w-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = resolveAssetUrl(images.fallback.room, 'fallback.room')
                    }}
                  />
                </div>
                <div className="bg-carbon px-5 py-5 text-silk">
                  <h3 className="font-display text-xl font-normal">{copy.name}</h3>
                  <ul className="mt-2 space-y-0.5 font-body text-[11px] font-light text-silk/80">
                    {copy.features.map((f) => (
                      <li key={f}>{f}</li>
                    ))}
                  </ul>
                  <a href="#contact" className="mt-4 inline-block text-xs text-gold-mid">
                    {t('rooms.viewRoom')} →
                  </a>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
