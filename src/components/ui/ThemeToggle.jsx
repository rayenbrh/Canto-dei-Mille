import { motion } from 'framer-motion'
import { Moon, Sun } from 'lucide-react'
import { useI18n } from '../../context/LanguageContext.jsx'
import { useTheme } from '../../hooks/useTheme.js'

export function ThemeToggle({ className = '' }) {
  const { t } = useI18n()
  const { theme, toggleTheme } = useTheme()
  const dark = theme === 'dark'

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={dark ? t('a11y.themeToLight') : t('a11y.themeToDark')}
      className={`relative flex h-11 min-h-[44px] min-w-[44px] items-center justify-center rounded-none border border-ash/40 transition-colors duration-500 hover:border-gold-dim dark:border-ash/40 ${className}`}
    >
      <motion.span
        initial={false}
        animate={{ rotate: dark ? 0 : 180, scale: dark ? 1 : 0.9 }}
        transition={{ type: 'spring', stiffness: 400, damping: 25 }}
        className="text-gold-mid"
      >
        {dark ? <Moon className="h-4 w-4" strokeWidth={1.25} /> : <Sun className="h-4 w-4" strokeWidth={1.25} />}
      </motion.span>
    </button>
  )
}
