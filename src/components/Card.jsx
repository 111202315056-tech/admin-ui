function Card({ title, subtitle, children, badge, className = "" }) {
  return (
    <div className={`rounded-3xl border border-slate-200 bg-white p-6 shadow-sm ${className}`}>
      {(title || subtitle || badge) && (
        <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            {subtitle && <p className="text-sm text-slate-500">{subtitle}</p>}
            {title && <h3 className="text-xl font-semibold text-slate-900">{title}</h3>}
          </div>
          {badge && <span className="rounded-full bg-primary-500 px-3 py-1 text-xs font-semibold text-white">{badge}</span>}
        </div>
      )}
      {children}
    </div>
  )
}

export default Card
