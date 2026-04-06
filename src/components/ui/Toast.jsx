import { AnimatePresence, motion } from 'framer-motion'

export function Toast({ message, open, onClose, closeLabel = 'Close' }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          role="status"
          initial={{ opacity: 0, x: 40, y: 0 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          exit={{ opacity: 0, x: 40 }}
          transition={{ type: 'spring', stiffness: 380, damping: 32 }}
          className="fixed bottom-8 right-6 z-[200] max-w-sm border border-gold-mid/60 bg-carbon px-6 py-4 font-body text-sm font-light text-silk shadow-2xl dark:bg-carbon"
        >
          <p>{message}</p>
          <button
            type="button"
            onClick={onClose}
            className="mt-2 text-[11px] uppercase tracking-widest text-gold-dim"
          >
            {closeLabel}
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
