import { motion } from 'framer-motion'
import { CalendarCheck, Star, Play, ArrowRight, ShieldCheck } from 'lucide-react'
import Button from '../common/Button.jsx'

const reviewAvatars = [
  'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=80&q=60',
  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=80&q=60',
  'https://images.unsplash.com/photo-1552058544-f2b08422138a?auto=format&fit=crop&w=80&q=60',
]

const stats = [
  { value: '500+', label: 'Expert doctors' },
  { value: '12k+', label: 'Happy patients' },
  { value: '4.9', label: 'Average rating' },
]

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
}
const item = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

// Small dotted grid used as a decorative accent behind the portrait
function DotGrid({ className }) {
  return (
    <svg className={className} width="120" height="120" viewBox="0 0 120 120" aria-hidden="true">
      <defs>
        <pattern id="hero-dots" width="20" height="20" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="2" fill="currentColor" />
        </pattern>
      </defs>
      <rect width="120" height="120" fill="url(#hero-dots)" />
    </svg>
  )
}

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pb-16 pt-28 md:pb-24 md:pt-36">
      {/* Ambient background glows */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -right-16 -top-24 h-80 w-80 rounded-full bg-brand-300/40 blur-3xl dark:bg-brand-500/20" />
        <div className="absolute left-[-10%] top-40 h-72 w-72 rounded-full bg-blush-200/60 blur-3xl dark:bg-fuchsia-500/10" />
      </div>

      <div className="container-x relative grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        {/* Left — copy */}
        <motion.div variants={container} initial="hidden" animate="visible">
          <motion.span
            variants={item}
            className="inline-flex items-center gap-2 rounded-full border border-brand-100 bg-white px-3.5 py-1.5 text-xs font-semibold text-brand-700 shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-brand-300"
          >
            <ShieldCheck className="h-4 w-4" /> Best Medical Service in Cybra
          </motion.span>

          <motion.h1
            variants={item}
            className="mt-6 text-[2.15rem] font-bold leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-[3.5rem] dark:text-white"
          >
            Get Premium medical
            <br className="hidden sm:block" /> care for your{' '}
            <span className="relative whitespace-nowrap">
              <span className="bg-gradient-to-r from-brand-500 to-brand-400 bg-clip-text text-transparent">
                best health
              </span>
              <svg
                className="absolute -bottom-1 left-0 w-full text-brand-400/60"
                viewBox="0 0 200 12"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M2 9C50 3 150 3 198 9"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-md text-base leading-relaxed text-slate-500 dark:text-slate-400"
          >
            Consult an expert in minutes, track your symptoms, and message your care team any
            time — all from the comfort of home. Better care starts here.
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-4">
            <Button href="#contact" variant="primary" size="lg" icon={ArrowRight}>
              Get a Consult
            </Button>
            <a
              href="#services"
              className="group inline-flex items-center gap-3 text-sm font-semibold text-ink dark:text-white"
            >
              <span className="grid h-12 w-12 place-items-center rounded-full border border-slate-200 bg-white text-brand-600 shadow-card transition-transform group-hover:scale-105 dark:border-white/10 dark:bg-white/10 dark:text-brand-300">
                <Play className="h-4 w-4 translate-x-px fill-current" />
              </span>
              How it works
            </a>
          </motion.div>

          {/* Stat bar */}
          <motion.dl
            variants={item}
            className="mt-11 flex max-w-md items-center gap-6 sm:gap-9"
          >
            {stats.map((stat, i) => (
              <div key={stat.label} className="flex items-center gap-6 sm:gap-9">
                {i > 0 && (
                  <span className="h-10 w-px bg-slate-200 dark:bg-white/10" aria-hidden="true" />
                )}
                <div>
                  <dt className="text-2xl font-bold text-ink dark:text-white">{stat.value}</dt>
                  <dd className="text-xs text-slate-500 dark:text-slate-400">{stat.label}</dd>
                </div>
              </div>
            ))}
          </motion.dl>
        </motion.div>

        {/* Right — framed portrait + floating cards */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          className="relative mx-auto w-full max-w-sm lg:mr-0 lg:max-w-md"
        >
          <DotGrid className="absolute -left-6 -top-6 z-0 text-brand-300/50 dark:text-brand-500/30" />

          {/* Offset gradient panel behind the photo */}
          <div className="absolute inset-0 translate-x-4 translate-y-5 rounded-[2.4rem] bg-gradient-to-br from-brand-400 via-brand-500 to-brand-700" />

          {/* Portrait frame */}
          <div className="relative overflow-hidden rounded-[2.4rem] bg-hero-lavender shadow-float">
            <img
              src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=760&q=80"
              alt="Doctor in a white coat smiling with arms crossed"
              width="760"
              height="900"
              fetchpriority="high"
              className="aspect-[4/5] w-full object-cover object-top"
            />
            {/* subtle bottom gradient for card legibility */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-brand-900/25 to-transparent" />

            {/* Online status pill */}
            <span className="absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-slate-700 backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              Available now
            </span>
          </div>

          {/* Floating: appointment confirmed */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -left-4 top-14 flex items-center gap-3 rounded-2xl bg-white/95 px-4 py-3 shadow-float backdrop-blur sm:-left-8 dark:bg-slate-900/90"
          >
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-emerald-500/15 text-emerald-600 dark:text-emerald-400">
              <CalendarCheck className="h-5 w-5" />
            </span>
            <div className="leading-tight">
              <p className="text-sm font-semibold text-ink dark:text-white">Appointment set</p>
              <p className="text-xs text-slate-500 dark:text-slate-400">Today · 4:30 PM</p>
            </div>
          </motion.div>

          {/* Floating: reviews */}
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -right-4 bottom-12 rounded-2xl bg-white/95 px-4 py-3 shadow-float backdrop-blur sm:-right-8 dark:bg-slate-900/90"
          >
            <div className="flex -space-x-2.5">
              {reviewAvatars.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt=""
                  width="28"
                  height="28"
                  loading="lazy"
                  className="h-7 w-7 rounded-full border-2 border-white object-cover dark:border-slate-900"
                />
              ))}
              <span className="grid h-7 w-7 place-items-center rounded-full border-2 border-white bg-brand-500 text-[10px] font-bold text-white dark:border-slate-900">
                9k+
              </span>
            </div>
            <p className="mt-2 flex items-center gap-1 text-xs font-medium text-slate-600 dark:text-slate-300">
              <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
              <span className="font-bold text-ink dark:text-white">4.9</span> from 9k+ reviews
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
