import { Thermometer, Pill, CalendarDays } from 'lucide-react'

const rows = [
  { icon: Thermometer, label: 'Track symptoms', value: 'Today, 8:20', tint: 'bg-rose-100 text-rose-500' },
  { icon: Pill, label: 'Medications', value: '2 due', tint: 'bg-brand-100 text-brand-600' },
  { icon: CalendarDays, label: 'Appointment', value: 'Fri, 10:30', tint: 'bg-emerald-100 text-emerald-600' },
]

export default function PhoneMockup() {
  return (
    <div className="mx-auto w-[210px] rounded-[2rem] border-[6px] border-ink bg-white p-3 shadow-float dark:border-slate-700">
      <div className="mx-auto mb-3 h-1.5 w-14 rounded-full bg-slate-200" />
      <div className="rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 p-4 text-white">
        <p className="text-xs/none opacity-80">Hi, Anna 👋</p>
        <p className="mt-1 text-sm font-semibold">Your health today</p>
        <div className="mt-3 flex items-end gap-1">
          <span className="text-2xl font-bold">98%</span>
          <span className="mb-1 text-[10px] opacity-80">wellness</span>
        </div>
      </div>
      <div className="mt-3 space-y-2">
        {rows.map((row) => (
          <div
            key={row.label}
            className="flex items-center gap-2 rounded-xl bg-slate-50 px-2.5 py-2 dark:bg-slate-800"
          >
            <span className={`grid h-7 w-7 place-items-center rounded-lg ${row.tint}`}>
              <row.icon className="h-3.5 w-3.5" />
            </span>
            <div className="flex-1 leading-tight">
              <p className="text-[11px] font-semibold text-ink dark:text-white">{row.label}</p>
            </div>
            <span className="text-[10px] text-slate-400">{row.value}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
