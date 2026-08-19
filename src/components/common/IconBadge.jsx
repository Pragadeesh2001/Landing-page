export default function IconBadge({ icon: Icon, className = '' }) {
  return (
    <span
      className={`grid h-11 w-11 place-items-center rounded-xl bg-brand-500/10 text-brand-600 dark:bg-brand-500/20 dark:text-brand-300 ${className}`}
    >
      <Icon className="h-5 w-5" aria-hidden="true" />
    </span>
  )
}
