import { motion } from 'framer-motion'

const base =
  'inline-flex items-center justify-center gap-2 rounded-full font-medium transition-colors duration-200 focus-visible:outline-none disabled:opacity-60 disabled:pointer-events-none'

const variants = {
  primary:
    'bg-brand-500 text-white hover:bg-brand-600 shadow-soft',
  dark: 'bg-ink text-white hover:bg-ink-soft dark:bg-white dark:text-ink dark:hover:bg-slate-200',
  light:
    'bg-white text-ink hover:bg-slate-100 shadow-card dark:bg-white/10 dark:text-white dark:hover:bg-white/20',
  outline:
    'border border-slate-200 text-ink hover:border-brand-400 hover:text-brand-600 dark:border-white/15 dark:text-slate-100 dark:hover:text-brand-300',
  ghost:
    'text-ink hover:text-brand-600 dark:text-slate-200 dark:hover:text-brand-300',
}

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-7 py-3.5 text-base',
}

/**
 * Polymorphic button. Renders an <a> when `href` is passed, otherwise a <button>.
 */
export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  className = '',
  icon: Icon,
  iconRight = true,
  ...rest
}) {
  const Tag = href ? motion.a : motion.button
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`

  const content = (
    <>
      {Icon && !iconRight && <Icon className="h-4 w-4" aria-hidden="true" />}
      {children}
      {Icon && iconRight && <Icon className="h-4 w-4" aria-hidden="true" />}
    </>
  )

  return (
    <Tag
      href={href}
      className={classes}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 400, damping: 22 }}
      {...rest}
    >
      {content}
    </Tag>
  )
}
