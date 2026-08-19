import { Moon, Sun } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from '../../context/ThemeContext.jsx'

export default function ThemeToggle({ className = '' }) {
  const { isDark, toggleTheme } = useTheme()

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className={`relative grid h-10 w-10 place-items-center rounded-full border border-slate-200 bg-white text-ink transition-colors hover:border-brand-400 hover:text-brand-600 dark:border-white/15 dark:bg-white/10 dark:text-slate-100 dark:hover:text-brand-300 ${className}`}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={isDark ? 'moon' : 'sun'}
          initial={{ y: -8, opacity: 0, rotate: -30 }}
          animate={{ y: 0, opacity: 1, rotate: 0 }}
          exit={{ y: 8, opacity: 0, rotate: 30 }}
          transition={{ duration: 0.2 }}
        >
          {isDark ? (
            <Moon className="h-[18px] w-[18px]" aria-hidden="true" />
          ) : (
            <Sun className="h-[18px] w-[18px]" aria-hidden="true" />
          )}
        </motion.span>
      </AnimatePresence>
    </button>
  )
}
