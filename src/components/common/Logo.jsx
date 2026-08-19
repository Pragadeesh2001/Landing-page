export default function Logo({ light = false }) {
  return (
    <span className="flex items-center gap-2">
      <span className="grid h-9 w-9 place-items-center rounded-xl bg-brand-500 text-white shadow-soft">
        <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
          <path
            d="M12 20s-6-4-6-8.5A3.5 3.5 0 0 1 12 8a3.5 3.5 0 0 1 6 3.5C18 16 12 20 12 20Z"
            fill="currentColor"
          />
        </svg>
      </span>
      <span
        className={`text-lg font-bold tracking-tight ${
          light ? 'text-white' : 'text-ink dark:text-white'
        }`}
      >
        Medicare
      </span>
    </span>
  )
}
