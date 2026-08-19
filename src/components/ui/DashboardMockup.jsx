import { motion } from 'framer-motion'

const bars = [42, 58, 36, 70, 52, 84, 64]
const days = ['M', 'T', 'W', 'T', 'F', 'S', 'S']

export default function DashboardMockup() {
  return (
    <div className="w-full rounded-2xl bg-white p-5 shadow-float dark:bg-slate-800">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <p className="text-xs text-slate-400">Appointments this week</p>
          <p className="text-xl font-bold text-ink dark:text-white">128</p>
        </div>
        <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-[11px] font-semibold text-emerald-600">
          +12%
        </span>
      </div>

      <div className="flex h-28 items-end justify-between gap-2">
        {bars.map((h, i) => (
          <div key={i} className="flex flex-1 flex-col items-center gap-2">
            <div className="flex h-24 w-full items-end justify-center">
              <motion.span
                initial={{ height: 0 }}
                whileInView={{ height: `${h}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.06, ease: 'easeOut' }}
                className={`w-full rounded-md ${
                  i === 5 ? 'bg-brand-500' : 'bg-brand-200 dark:bg-brand-500/40'
                }`}
              />
            </div>
            <span className="text-[10px] text-slate-400">{days[i]}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
