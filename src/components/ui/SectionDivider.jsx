import { motion } from 'framer-motion'

export function SectionDivider() {
  return (
    <div className="flex h-16 w-full items-center justify-center py-6">
      <motion.hr
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
        className="mx-auto h-px w-[120px] border-0 bg-gold-mid"
      />
    </div>
  )
}
