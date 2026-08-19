import { useState } from 'react'
import { Facebook, Twitter, Instagram, Linkedin, ArrowRight } from 'lucide-react'
import Logo from '../common/Logo.jsx'
import Button from '../common/Button.jsx'
import { footerColumns } from '../../data/navigation.js'

const socials = [
  { icon: Facebook, label: 'Facebook' },
  { icon: Twitter, label: 'Twitter' },
  { icon: Instagram, label: 'Instagram' },
  { icon: Linkedin, label: 'LinkedIn' },
]

function AppBadge({ store, primary }) {
  return (
    <a
      href="#contact"
      className="flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-white transition-colors hover:bg-white/10"
    >
      <span className="text-lg">{primary}</span>
      <span className="leading-tight">
        <span className="block text-[9px] uppercase tracking-wide text-white/60">
          Download on
        </span>
        <span className="block text-xs font-semibold">{store}</span>
      </span>
    </a>
  )
}

export default function Footer() {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!email) return
    setSent(true)
    setEmail('')
    setTimeout(() => setSent(false), 3000)
  }

  return (
    <footer id="contact" className="bg-ink text-slate-300">
      <div className="container-x py-16">
        {/* Connect block */}
        <div className="flex flex-col items-start justify-between gap-6 border-b border-white/10 pb-12 md:flex-row md:items-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Let&apos;s Connect with us</h2>
          <form
            onSubmit={handleSubmit}
            className="flex w-full max-w-md flex-col gap-3 sm:flex-row sm:items-center"
          >
            <label htmlFor="footer-email" className="sr-only">
              Email address
            </label>
            <input
              id="footer-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm text-white placeholder:text-white/40 focus:border-brand-400 focus:outline-none"
            />
            <Button type="submit" variant="primary" size="md" className="w-full shrink-0 sm:w-auto">
              Get Started
            </Button>
          </form>
        </div>
        {sent && (
          <p className="pt-4 text-sm text-emerald-400" role="status">
            Thanks! We&apos;ll be in touch shortly.
          </p>
        )}

        {/* Main footer grid */}
        <div className="grid gap-10 pt-12 md:grid-cols-2 lg:grid-cols-6">
          <div className="lg:col-span-2">
            <Logo light />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-400">
              Premium virtual medical care — track your health, message providers, and book
              appointments from anywhere.
            </p>

            <p className="mt-6 text-sm font-semibold text-white">Subscribe to our newsletter</p>
            <form onSubmit={handleSubmit} className="mt-3 flex max-w-xs items-center gap-2">
              <label htmlFor="news-email" className="sr-only">
                Newsletter email
              </label>
              <input
                id="news-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="w-full rounded-full border border-white/15 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-white/40 focus:border-brand-400 focus:outline-none"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-brand-500 text-white transition-colors hover:bg-brand-600"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </div>

          {footerColumns.map((column) => (
            <nav key={column.title} aria-label={column.title}>
              <h3 className="text-sm font-semibold text-white">{column.title}</h3>
              <ul className="mt-4 space-y-3">
                {column.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#contact"
                      className="text-sm text-slate-400 transition-colors hover:text-brand-300"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 md:flex-row">
          <div className="flex items-center gap-3">
            <AppBadge store="App Store" primary="" />
            <AppBadge store="Google Play" primary="▶" />
          </div>

          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} Medicare. All rights reserved.
          </p>

          <div className="flex items-center gap-3">
            {socials.map((social) => (
              <a
                key={social.label}
                href="#contact"
                aria-label={social.label}
                className="grid h-9 w-9 place-items-center rounded-full border border-white/15 text-slate-300 transition-colors hover:border-brand-400 hover:text-brand-300"
              >
                <social.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
