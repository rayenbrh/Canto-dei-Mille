import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import { useCallback, useEffect, useRef, useState } from 'react'
import { useI18n } from '../context/LanguageContext.jsx'
import { resolveAssetUrl, images } from '../config/images.js'

const viewport = { once: true, margin: '-100px' }

export function Reviews() {
  const { t, messages } = useI18n()
  const badges = messages.reviews.badges
  const testimonials = messages.reviews.testimonials

  const [index, setIndex] = useState(0)
  const [dir, setDir] = useState(0)
  const [paused, setPaused] = useState(false)
  const touchStart = useRef(0)

  const paginate = useCallback(
    (newDirection) => {
      setDir(newDirection)
      setIndex((prev) => {
        const next = prev + newDirection
        if (next < 0) return testimonials.length - 1
        if (next >= testimonials.length) return 0
        return next
      })
    },
    [testimonials.length],
  )

  useEffect(() => {
    if (paused) return
    const id = window.setInterval(() => {
      setDir(1)
      setIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => window.clearInterval(id)
  }, [paused, testimonials.length])

  const item = testimonials[index]

  return (
    <section id="reviews" className="bg-ivory dark:bg-obsidian">
      <div className="mx-auto max-w-[1200px] px-6 py-24 md:px-10 lg:py-32">
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={viewport}
          className="font-body text-[11px] font-light uppercase tracking-[0.25em] text-gold-mid"
        >
          {t('reviews.eyebrow')}
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ delay: 0.2 }}
          className="mt-4 text-center font-display text-[clamp(40px,6vw,72px)] font-normal tracking-[-0.02em] text-carbon dark:text-silk"
        >
          {t('reviews.title')}
        </motion.h2>

        <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {badges.map((b) => (
            <div
              key={b.platform}
              className="border border-ash/40 bg-carbon px-4 py-5 text-center dark:border-ash/40"
            >
              <p className="font-body text-[10px] font-light uppercase tracking-widest text-stone">{b.platform}</p>
              <p className="mt-2 font-display text-[28px] font-normal text-gold-mid">{b.score}</p>
            </div>
          ))}
        </div>

        <div
          className="relative mt-20 min-h-[320px]"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onTouchStart={(e) => {
            touchStart.current = e.changedTouches[0].clientX
          }}
          onTouchEnd={(e) => {
            const diff = e.changedTouches[0].clientX - touchStart.current
            if (Math.abs(diff) > 50) paginate(diff < 0 ? 1 : -1)
          }}
        >
          <div className="flex items-center justify-between gap-4">
            <button
              type="button"
              aria-label={t('a11y.prevTestimonial')}
              className="flex h-11 min-h-[44px] min-w-[44px] items-center justify-center text-gold-mid transition-colors hover:text-gold-bright"
              onClick={() => paginate(-1)}
            >
              <ChevronLeft className="h-7 w-7" strokeWidth={1} />
            </button>

            <div className="relative max-w-3xl flex-1 overflow-hidden px-2 text-center">
              <span
                className="pointer-events-none absolute left-4 top-0 font-display text-[120px] leading-none text-gold-dim/40"
                aria-hidden
              >
                &ldquo;
              </span>
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={`${index}-${item.quote.slice(0, 20)}`}
                  initial={{ opacity: 0, x: dir >= 0 ? 40 : -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: dir >= 0 ? -40 : 40 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                >
                  <p className="relative z-10 mx-auto max-w-2xl pt-10 font-displayItalic text-2xl font-light italic leading-snug text-carbon dark:text-silk md:text-[28px]">
                    {item.quote}
                  </p>
                  <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                    <img
                      src={resolveAssetUrl(images.fallback.avatar, 'fallback.avatar')}
                      alt=""
                      className="h-14 w-14 rounded-full object-cover"
                    />
                    <div className="text-center sm:text-left">
                      <p className="font-body text-[15px] font-normal text-carbon dark:text-silk">{item.name}</p>
                      <p className="font-body text-sm font-light text-stone">
                        {item.flag} {item.country}
                      </p>
                      <div className="mt-1 flex justify-center gap-0.5 sm:justify-start">
                        {Array.from({ length: item.stars }).map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-gold-mid text-gold-mid" />
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <button
              type="button"
              aria-label={t('a11y.nextTestimonial')}
              className="flex h-11 min-h-[44px] min-w-[44px] items-center justify-center text-gold-mid transition-colors hover:text-gold-bright"
              onClick={() => paginate(1)}
            >
              <ChevronRight className="h-7 w-7" strokeWidth={1} />
            </button>
          </div>

          <div className="mt-10 flex justify-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`${t('a11y.slideDot')} ${i + 1}`}
                className={`h-2 w-2 rounded-full transition-colors ${
                  i === index ? 'bg-gold-mid' : 'bg-ash/50'
                }`}
                onClick={() => {
                  setDir(i > index ? 1 : -1)
                  setIndex(i)
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
