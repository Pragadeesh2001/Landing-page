import Reveal from '../common/Reveal.jsx'
import { companyLogos } from '../../data/content.js'

export default function TrustedBy() {
  return (
    <section className="container-x pb-8">
      <Reveal className="mx-auto max-w-xl text-center">
        <h2 className="text-2xl font-bold text-ink dark:text-white sm:text-3xl">
          Trusted by 100+ Global top company connect with us
        </h2>
        <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">
          Brands we partner with in health awareness campaigns, better aligning their values.
        </p>
      </Reveal>

      <Reveal
        delay={0.1}
        className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-4"
      >
        {companyLogos.map((name) => (
          <div
            key={name}
            className="flex items-center justify-center gap-2 rounded-2xl border border-slate-100 bg-slate-50 py-4 text-slate-500 transition-colors hover:text-brand-600 dark:border-white/5 dark:bg-white/[0.04] dark:text-slate-300"
          >
            <span className="h-5 w-5 rounded-full bg-gradient-to-br from-brand-400 to-brand-600" />
            <span className="text-sm font-semibold tracking-tight">{name}</span>
          </div>
        ))}
      </Reveal>
    </section>
  )
}
