import { motion } from 'framer-motion'
import { Plus, MoreHorizontal } from 'lucide-react'
import SectionHeading from '../common/SectionHeading.jsx'
import Reveal from '../common/Reveal.jsx'
import Button from '../common/Button.jsx'
import { consultants } from '../../data/content.js'

export default function Consultants() {
  return (
    <section id="consultants" className="container-x py-14 sm:py-20 md:py-28">
      <SectionHeading title="Collaborate with our best consultant by online" />

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {consultants.map((person, i) => (
          <Reveal
            key={person.name}
            delay={i * 0.1}
            as="article"
            className="rounded-3xl border border-slate-100 bg-slate-50 p-5 dark:border-white/5 dark:bg-white/[0.04]"
          >
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src={person.image}
                alt={`${person.name}, ${person.role}`}
                width="320"
                height="320"
                loading="lazy"
                className="h-56 w-full object-cover transition-transform duration-500 hover:scale-105"
              />
              <span className="absolute right-3 top-3 grid h-8 w-8 place-items-center rounded-full bg-white/90 text-slate-500">
                <MoreHorizontal className="h-4 w-4" />
              </span>
            </div>
            <div className="mt-5 flex items-start justify-between gap-3">
              <div>
                <h3 className="text-lg font-semibold text-ink dark:text-white">
                  {person.name}
                </h3>
                <p className="text-xs font-medium text-brand-600 dark:text-brand-300">
                  {person.role}
                </p>
              </div>
              <motion.button
                type="button"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.94 }}
                aria-label={`Book ${person.name}`}
                className="grid h-9 w-9 place-items-center rounded-full bg-brand-500 text-white"
              >
                <Plus className="h-4 w-4" />
              </motion.button>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
              {person.description}
            </p>
          </Reveal>
        ))}
      </div>

      {/* Consult banner */}
      <Reveal className="mt-14 flex flex-col items-center text-center">
        <p className="max-w-2xl text-lg font-medium text-ink dark:text-white sm:text-xl">
          Patients can consult with healthcare providers from the comfort of their homes,{' '}
          <span className="text-slate-400 dark:text-slate-500">
            eliminating travel time and costs and reducing waiting times.
          </span>
        </p>
        <Button href="#contact" variant="primary" size="lg" className="mt-6">
          Make a schedule
        </Button>
      </Reveal>
    </section>
  )
}
