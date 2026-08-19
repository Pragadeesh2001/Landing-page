import { motion } from 'framer-motion'
import { Video, Mic, PhoneOff, Phone, Star, ChevronRight } from 'lucide-react'
import Button from '../common/Button.jsx'

const avatars = [
  'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=80&q=60',
  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=80&q=60',
  'https://images.unsplash.com/photo-1552058544-f2b08422138a?auto=format&fit=crop&w=80&q=60',
]

const floatTransition = {
  duration: 4,
  repeat: Infinity,
  repeatType: 'reverse',
  ease: 'easeInOut',
}

export default function Hero() {
  return (
    <section id="home" className="container-x pt-24 md:pt-28">
      <div className="grid overflow-hidden rounded-3xl shadow-card sm:rounded-4xl lg:grid-cols-2">
        {/* Left — copy on blush gradient */}
        <div className="relative bg-hero-blush px-6 py-9 sm:px-10 sm:py-14 lg:py-16">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-xs font-semibold text-brand-700"
          >
            🩺 Best Medical Service in Cybra
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-5 text-[2.15rem] font-bold leading-[1.1] text-ink sm:text-5xl lg:text-[3.35rem]"
          >
            Get Premium <br className="hidden sm:block" />
            medical care for <br className="hidden sm:block" />
            your best health
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="mt-5 max-w-md text-sm leading-relaxed text-ink-soft/80"
          >
            Consult an expert in minutes, track your symptoms, and message your care
            team any time — all from the comfort of home. Better care starts here.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="mt-8"
          >
            <Button href="#contact" variant="primary" size="lg" icon={Phone} iconRight={false}>
              Get a Consult
            </Button>
          </motion.div>

          {/* Happy customer badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24 }}
            className="mt-10 inline-flex items-center gap-3 rounded-2xl bg-white/70 px-4 py-3"
          >
            <div className="flex -space-x-2">
              {avatars.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt=""
                  width="32"
                  height="32"
                  loading="lazy"
                  className="h-8 w-8 rounded-full border-2 border-white object-cover"
                />
              ))}
            </div>
            <div className="leading-tight">
              <p className="text-sm font-semibold text-ink">Happy Customer</p>
              <p className="flex items-center gap-1 text-xs text-ink-soft/70">
                <Star className="h-3 w-3 fill-amber-400 text-amber-400" /> 4.9 · 12k+ reviews
              </p>
            </div>
          </motion.div>
        </div>

        {/* Right — doctor + floating call UI on lavender */}
        <div className="relative min-h-[380px] overflow-hidden bg-hero-lavender sm:min-h-[440px] lg:min-h-[520px]">
          <motion.img
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=760&q=80"
            alt="Smiling doctor with a stethoscope, arms crossed"
            width="760"
            height="900"
            fetchpriority="high"
            className="absolute bottom-0 left-1/2 h-full w-auto max-w-none -translate-x-1/2 object-cover object-top sm:left-auto sm:right-0 sm:translate-x-0"
          />

          {/* Incoming call card */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={floatTransition}
            className="absolute left-5 top-8 flex items-center gap-3 rounded-2xl bg-white/95 px-4 py-3 shadow-float backdrop-blur sm:left-8"
          >
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-brand-500 text-white">
              <Phone className="h-4 w-4" />
            </span>
            <div className="leading-tight">
              <p className="text-sm font-semibold text-ink">Medicare</p>
              <p className="text-xs text-slate-500">Incoming call…</p>
            </div>
          </motion.div>

          {/* Calling pill */}
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ ...floatTransition, duration: 5 }}
            className="absolute left-6 top-36 flex items-center gap-2 rounded-full bg-white/95 px-4 py-2 shadow-float backdrop-blur"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
            </span>
            <span className="text-xs font-medium text-slate-600">Calling…</span>
            <ChevronRight className="h-3.5 w-3.5 text-slate-400" />
          </motion.div>

          {/* Call controls */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ ...floatTransition, duration: 4.5 }}
            className="absolute bottom-8 right-6 flex items-center gap-3 rounded-full bg-white/95 px-4 py-3 shadow-float backdrop-blur"
          >
            <span className="grid h-10 w-10 place-items-center rounded-full bg-slate-100 text-slate-600">
              <Video className="h-4 w-4" />
            </span>
            <span className="grid h-10 w-10 place-items-center rounded-full bg-slate-100 text-slate-600">
              <Mic className="h-4 w-4" />
            </span>
            <span className="grid h-10 w-10 place-items-center rounded-full bg-red-500 text-white">
              <PhoneOff className="h-4 w-4" />
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
