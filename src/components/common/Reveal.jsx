import { motion } from 'framer-motion'

/**
 * Fade + slide element into view once, when it scrolls into the viewport.
 * Respects reduced-motion automatically because Framer Motion honours it.
 */
export const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
}

export const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
}

export default function Reveal({
  children,
  as = 'div',
  delay = 0,
  y = 28,
  className,
  ...rest
}) {
  const MotionTag = motion[as] ?? motion.div

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay }}
      {...rest}
    >
      {children}
    </MotionTag>
  )
}
