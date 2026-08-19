import { motion } from 'framer-motion'
import Reveal from '../common/Reveal.jsx'
import Button from '../common/Button.jsx'

function Sphere({ className }) {
  return (
    <motion.svg
      viewBox="0 0 200 200"
      className={className}
      aria-hidden="true"
      animate={{ y: [0, -12, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
    >
      <defs>
        <radialGradient id="sphere" cx="35%" cy="30%" r="75%">
          <stop offset="0%" stopColor="#c9beff" />
          <stop offset="60%" stopColor="#8a6bff" />
          <stop offset="100%" stopColor="#4a34ad" />
        </radialGradient>
      </defs>
      <circle cx="100" cy="100" r="80" fill="url(#sphere)" />
      <g fill="#ffffff" opacity="0.35">
        {Array.from({ length: 90 }).map((_, i) => {
          const angle = (i / 90) * Math.PI * 2 * 5
          const radius = 20 + (i / 90) * 58
          const cx = 100 + Math.cos(angle) * radius
          const cy = 100 + Math.sin(angle) * radius * 0.85
          return <circle key={i} cx={cx} cy={cy} r={1.4} />
        })}
      </g>
    </motion.svg>
  )
}

export default function CTA() {
  return (
    <section className="container-x py-10 md:py-14">
      <Reveal className="relative overflow-hidden rounded-4xl bg-gradient-to-br from-brand-600 to-brand-800 px-6 py-14 text-center shadow-soft sm:px-10 sm:py-16">
        <Sphere className="pointer-events-none absolute -left-10 -top-8 h-40 w-40 opacity-90 sm:h-52 sm:w-52" />
        <Sphere className="pointer-events-none absolute -bottom-12 -right-8 h-44 w-44 opacity-80 sm:h-56 sm:w-56" />

        <div className="relative mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl">
            Bring your customer services the next level of excellence.
          </h2>
          <Button href="#contact" variant="light" size="lg" className="mt-8">
            Make a consult
          </Button>
        </div>
      </Reveal>
    </section>
  )
}
