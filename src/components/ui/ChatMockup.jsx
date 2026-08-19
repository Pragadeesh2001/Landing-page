import { ShieldCheck, Send } from 'lucide-react'

export default function ChatMockup() {
  return (
    <div className="w-full max-w-xs rounded-2xl bg-white p-4 shadow-float dark:bg-slate-800">
      {/* header */}
      <div className="flex items-center gap-3 border-b border-slate-100 pb-3 dark:border-slate-700">
        <img
          src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=80&q=60"
          alt=""
          width="36"
          height="36"
          loading="lazy"
          className="h-9 w-9 rounded-full object-cover"
        />
        <div className="flex-1 leading-tight">
          <p className="text-sm font-semibold text-ink dark:text-white">Dr. Thomas</p>
          <p className="flex items-center gap-1 text-[11px] text-emerald-500">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> Online
          </p>
        </div>
        <ShieldCheck className="h-4 w-4 text-brand-500" aria-hidden="true" />
      </div>

      {/* messages */}
      <div className="space-y-2 py-3">
        <p className="max-w-[80%] rounded-2xl rounded-tl-sm bg-slate-100 px-3 py-2 text-[11px] text-slate-600 dark:bg-slate-700 dark:text-slate-200">
          Hi! How are you feeling today?
        </p>
        <p className="ml-auto max-w-[80%] rounded-2xl rounded-tr-sm bg-brand-500 px-3 py-2 text-[11px] text-white">
          Much better, thank you. The new plan is helping.
        </p>
        <p className="max-w-[80%] rounded-2xl rounded-tl-sm bg-slate-100 px-3 py-2 text-[11px] text-slate-600 dark:bg-slate-700 dark:text-slate-200">
          Great — I'll update your records securely.
        </p>
      </div>

      {/* input */}
      <div className="flex items-center gap-2 rounded-full bg-slate-100 px-3 py-2 dark:bg-slate-700">
        <span className="flex-1 text-[11px] text-slate-400">Type a message…</span>
        <span className="grid h-6 w-6 place-items-center rounded-full bg-brand-500 text-white">
          <Send className="h-3 w-3" />
        </span>
      </div>
    </div>
  )
}
