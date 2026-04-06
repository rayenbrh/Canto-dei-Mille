import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const KEY = 'cdm-preloader-session'

export function Preloader({ children }) {
  const alreadySeen = typeof window !== 'undefined' && Boolean(sessionStorage.getItem(KEY))

  const [showPreloader, setShowPreloader] = useState(!alreadySeen)
  const [lineDone, setLineDone] = useState(false)
  const [reveal, setReveal] = useState(alreadySeen)

  useEffect(() => {
    if (!showPreloader) return
    const t = window.setTimeout(() => setLineDone(true), 1800)
    return () => window.clearTimeout(t)
  }, [showPreloader])

  useEffect(() => {
    if (!showPreloader || !lineDone) return
    const t = window.setTimeout(() => setShowPreloader(false), 400)
    return () => window.clearTimeout(t)
  }, [showPreloader, lineDone])

  return (
    <>
      <AnimatePresence
        onExitComplete={() => {
          sessionStorage.setItem(KEY, '1')
          setReveal(true)
        }}
      >
        {showPreloader && (
          <motion.div
            key="preloader"
            className="fixed inset-0 z-[300] flex flex-col items-center justify-center bg-obsidian"
            initial={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{ duration: 0.85, ease: [0.76, 0, 0.24, 1] }}
          >
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="font-display text-5xl font-normal text-glow md:text-7xl"
            >
              C · M
            </motion.p>
            <div className="mt-10 h-px w-48 overflow-hidden bg-ash/40">
              <motion.div
                className="h-full origin-left bg-gold-mid"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.8, ease: [0.42, 0, 0.58, 1] }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.div
        initial={false}
        animate={reveal ? { y: 0, opacity: 1 } : { y: '28%', opacity: 0 }}
        transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </>
  )
}
