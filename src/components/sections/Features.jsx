import { ArrowRight } from 'lucide-react'
import SectionHeading from '../common/SectionHeading.jsx'
import IconBadge from '../common/IconBadge.jsx'
import Reveal from '../common/Reveal.jsx'
import Button from '../common/Button.jsx'
import PhoneMockup from '../ui/PhoneMockup.jsx'
import ChatMockup from '../ui/ChatMockup.jsx'
import DashboardMockup from '../ui/DashboardMockup.jsx'
import { smallFeatures, benefitIcons } from '../../data/content.js'

const cardBase =
  'group rounded-3xl border border-slate-100 bg-slate-50 p-6 transition-shadow hover:shadow-card dark:border-white/5 dark:bg-white/[0.04] sm:p-8'

export default function Features() {
  return (
    <section id="features" className="container-x py-14 sm:py-20 md:py-28">
      <SectionHeading eyebrow="Features" title="Discover Our Benefits & Features" />

      <div className="mt-12 grid gap-5 lg:grid-cols-2">
        {/* Mobile Health App */}
        <Reveal className={cardBase}>
          <IconBadge icon={benefitIcons.app} />
          <h3 className="mt-5 text-xl font-semibold text-ink dark:text-white">
            Mobile Health App: Tools for patients to track symptoms &amp; medications
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
            Tools for patients to track symptoms, medications, and appointments — prompting
            self-management and engagement.
          </p>
          <div className="mt-8">
            <PhoneMockup />
          </div>
        </Reveal>

        {/* Secure Messaging */}
        <Reveal delay={0.08} className={cardBase}>
          <IconBadge icon={benefitIcons.messaging} />
          <h3 className="mt-5 text-xl font-semibold text-ink dark:text-white">
            Secure Messaging Systems: HIPAA-compliant platforms
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
            HIPAA-compliant platforms that allow patients and providers to communicate securely.
          </p>
          <div className="mt-8 flex justify-center">
            <ChatMockup />
          </div>
        </Reveal>
      </div>

      {/* Dashboard — wide card */}
      <Reveal className={`${cardBase} mt-5`}>
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div>
            <IconBadge icon={benefitIcons.dashboard} />
            <h3 className="mt-5 text-xl font-semibold text-ink dark:text-white">
              Personal Health Dashboard &amp; Appointment Booking System
            </h3>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-slate-500 dark:text-slate-400">
              Track vital signs, medications, and reminders in one place. Book, reschedule, and
              manage appointments in a couple of taps.
            </p>
          </div>
          <DashboardMockup />
        </div>
      </Reveal>

      {/* Bottom row of small cards */}
      <div className="mt-5 grid gap-5 md:grid-cols-3">
        {smallFeatures.map((feature, i) => (
          <Reveal key={feature.title} delay={i * 0.08} className={cardBase}>
            <IconBadge icon={feature.icon} />
            <h3 className="mt-5 text-lg font-semibold text-ink dark:text-white">
              {feature.title}
            </h3>
            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
              {feature.description}
            </p>
          </Reveal>
        ))}

        {/* Explore card — brand gradient */}
        <Reveal
          delay={0.16}
          className="flex flex-col justify-between rounded-3xl bg-gradient-to-br from-brand-500 to-brand-700 p-6 text-white shadow-soft sm:p-8"
        >
          <div>
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-white/20">
              <benefitIcons.explore className="h-5 w-5" aria-hidden="true" />
            </span>
            <h3 className="mt-5 text-lg font-semibold">Explore our more amazing services</h3>
          </div>
          <Button
            href="#services"
            variant="light"
            size="md"
            icon={ArrowRight}
            className="mt-6 w-fit"
          >
            Explore more
          </Button>
        </Reveal>
      </div>
    </section>
  )
}
