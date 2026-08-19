import { MapPin, Navigation } from 'lucide-react'
import Button from '../common/Button.jsx'

export default function MapCard() {
  return (
    <div className="relative h-full min-h-[320px] overflow-hidden rounded-3xl bg-[#e8eef7] dark:bg-slate-800">
      {/* Stylised street map */}
      <svg
        viewBox="0 0 400 320"
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
        preserveAspectRatio="xMidYMid slice"
      >
        <rect width="400" height="320" className="fill-[#e8eef7] dark:fill-slate-800" />
        <g className="stroke-white dark:stroke-slate-700" strokeWidth="10" fill="none">
          <path d="M-10 90 H410" />
          <path d="M-10 210 H410" />
          <path d="M70 -10 V330" />
          <path d="M250 -10 V330" />
          <path d="M330 -10 V330" />
        </g>
        <g className="stroke-[#d7e0ee] dark:stroke-slate-700/60" strokeWidth="4" fill="none">
          <path d="M-10 150 H410" />
          <path d="M160 -10 V330" />
        </g>
        <rect x="90" y="110" width="60" height="40" rx="4" className="fill-[#dfe7f2] dark:fill-slate-700/70" />
        <rect x="270" y="30" width="50" height="40" rx="4" className="fill-[#dfe7f2] dark:fill-slate-700/70" />
        <rect x="270" y="230" width="50" height="50" rx="4" className="fill-[#dfe7f2] dark:fill-slate-700/70" />
        <path d="M0 250 Q120 220 400 270" className="stroke-[#c7e3d0] dark:stroke-emerald-900/40" strokeWidth="24" fill="none" />
      </svg>

      {/* Route pin */}
      <span className="absolute left-[46%] top-[38%] grid h-10 w-10 -translate-x-1/2 place-items-center rounded-full bg-brand-500 text-white shadow-float">
        <MapPin className="h-5 w-5" />
      </span>

      {/* Appointment card overlay */}
      <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3 rounded-2xl bg-white/95 p-3 shadow-float backdrop-blur dark:bg-slate-900/90">
        <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-500/10 text-brand-600">
          <Navigation className="h-5 w-5" />
        </span>
        <div className="flex-1 leading-tight">
          <p className="text-sm font-semibold text-ink dark:text-white">Nearest clinic</p>
          <p className="text-xs text-slate-500 dark:text-slate-400">1.2 km · open until 9 PM</p>
        </div>
        <Button variant="primary" size="sm">
          Route
        </Button>
      </div>
    </div>
  )
}
