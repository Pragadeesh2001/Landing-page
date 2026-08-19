import Reveal from './Reveal.jsx'

/**
 * Centered section heading with an optional small eyebrow label above it.
 */
export default function SectionHeading({ eyebrow, title, subtitle, align = 'center' }) {
  const alignment =
    align === 'center' ? 'items-center text-center mx-auto' : 'items-start text-left'

  return (
    <Reveal className={`flex max-w-2xl flex-col gap-3 ${alignment}`}>
      {eyebrow && (
        <span className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-600 dark:bg-brand-500/15 dark:text-brand-300">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl font-bold leading-tight text-ink sm:text-4xl dark:text-white">
        {title}
      </h2>
      {subtitle && (
        <p className="text-base leading-relaxed text-slate-500 dark:text-slate-400">
          {subtitle}
        </p>
      )}
    </Reveal>
  )
}
