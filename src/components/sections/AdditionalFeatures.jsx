import { Check } from 'lucide-react'
import Reveal from '../common/Reveal.jsx'
import Button from '../common/Button.jsx'
import MapCard from '../ui/MapCard.jsx'
import { additionalFeatures } from '../../data/content.js'

export default function AdditionalFeatures() {
  return (
    <section id="services" className="container-x py-14 sm:py-16 md:py-24">
      <div className="grid gap-8 rounded-4xl border border-slate-100 bg-slate-50 p-6 dark:border-white/5 dark:bg-white/[0.04] lg:grid-cols-2 lg:p-10">
        <Reveal>
          <MapCard />
        </Reveal>

        <Reveal delay={0.1} className="flex flex-col justify-center">
          <span className="inline-flex w-fit items-center gap-2 rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-600 dark:bg-brand-500/15 dark:text-brand-300">
            Additional Medical Features
          </span>
          <h2 className="mt-4 text-2xl font-bold text-ink dark:text-white sm:text-3xl">
            Everything your care team needs, in one place
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
            Offer programs focused on preventive care, nutrition, exercise and wellness — plus
            comprehensive tools that keep progress on track.
          </p>

          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {additionalFeatures.map((feature) => (
              <li
                key={feature.label}
                className="flex items-center gap-3 rounded-2xl bg-white px-4 py-3 text-sm font-medium text-ink shadow-sm dark:bg-white/[0.03] dark:text-slate-100"
              >
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-brand-500/10 text-brand-600 dark:bg-brand-500/20 dark:text-brand-300">
                  <Check className="h-4 w-4" />
                </span>
                {feature.label}
              </li>
            ))}
          </ul>

          <Button href="#contact" variant="primary" size="lg" className="mt-8 w-fit">
            Book Now
          </Button>
        </Reveal>
      </div>
    </section>
  )
}
