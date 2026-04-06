import { motion } from 'framer-motion'
import { useI18n } from '../context/LanguageContext.jsx'
import { resolveAssetUrl, images } from '../config/images.js'

const viewport = { once: true, margin: '-100px' }

/** Shared: image fills a fixed frame; original aspect is ignored (crop). */
function GalleryCell({ item, className, transition }) {
  const { t } = useI18n()
  return (
    <motion.figure
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={viewport}
      transition={transition}
      className={className}
    >
      <div className="relative h-full w-full overflow-hidden bg-ash/20 dark:bg-carbon/50">
        <img
          src={resolveAssetUrl(item.url, item.id)}
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          loading="lazy"
        />
        <div className="pointer-events-none absolute inset-0 bg-gold-mid/0 transition-colors duration-500 group-hover:bg-gold-mid/15" />
        <figcaption className="absolute bottom-0 left-0 right-0 z-[1] translate-y-full bg-gradient-to-t from-obsidian/95 via-obsidian/40 to-transparent px-4 py-5 font-body text-xs font-light text-silk transition-transform duration-500 group-hover:translate-y-0 md:py-5 lg:px-5">
          {t(`gallery.captions.${item.id}`)}
        </figcaption>
      </div>
    </motion.figure>
  )
}

export function Gallery() {
  const { t } = useI18n()
  const [g1, g2, g3, g4, g5, g6] = images.gallery

  return (
    <section id="gallery" className="bg-cream dark:bg-obsidian">
      <div className="mx-auto max-w-[1600px] px-6 py-24 md:px-10 lg:px-14 lg:py-32">
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={viewport}
          className="font-body text-[11px] font-light uppercase tracking-[0.25em] text-gold-mid"
        >
          {t('gallery.eyebrow')}
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ delay: 0.2 }}
          className="mt-4 font-display text-[clamp(40px,6vw,72px)] font-normal tracking-[-0.02em] text-carbon dark:text-silk"
        >
          {t('gallery.title')}
        </motion.h2>

        {/*
          Modern fixed layout (desktop):
          - Explicit 2 equal rows inside a min-height frame — images are cropped with object-cover.
          Row 1: wide (2 cols) | portrait | portrait
          Row 2: portrait | portrait | wide (2 cols)
          Mobile: single column, uniform 4:3 tiles.
        */}
        <div
          className="mt-16 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-3 md:min-h-[min(720px,82svh)] md:grid-cols-4 md:grid-rows-2 md:gap-3 md:[grid-template-rows:1fr_1fr] lg:gap-4"
        >
          <GalleryCell
            item={g1}
            transition={{ delay: 0 }}
            className="group relative aspect-[4/3] min-h-0 overflow-hidden sm:col-span-2 sm:aspect-[16/10] md:col-span-2 md:row-start-1 md:aspect-auto md:h-full md:min-h-0"
          />
          <GalleryCell
            item={g2}
            transition={{ delay: 0.1 }}
            className="group relative aspect-[3/4] min-h-0 overflow-hidden md:col-start-3 md:row-start-1 md:aspect-auto md:h-full md:min-h-0"
          />
          <GalleryCell
            item={g3}
            transition={{ delay: 0.2 }}
            className="group relative aspect-[3/4] min-h-0 overflow-hidden md:col-start-4 md:row-start-1 md:aspect-auto md:h-full md:min-h-0"
          />
          <GalleryCell
            item={g4}
            transition={{ delay: 0.3 }}
            className="group relative aspect-[3/4] min-h-0 overflow-hidden md:col-start-1 md:row-start-2 md:aspect-auto md:h-full md:min-h-0"
          />
          <GalleryCell
            item={g5}
            transition={{ delay: 0.4 }}
            className="group relative aspect-[3/4] min-h-0 overflow-hidden md:col-start-2 md:row-start-2 md:aspect-auto md:h-full md:min-h-0"
          />
          <GalleryCell
            item={g6}
            transition={{ delay: 0.5 }}
            className="group relative aspect-[4/3] min-h-0 overflow-hidden sm:col-span-2 sm:aspect-[16/10] md:col-span-2 md:col-start-3 md:row-start-2 md:aspect-auto md:h-full md:min-h-0"
          />
        </div>
      </div>
    </section>
  )
}
