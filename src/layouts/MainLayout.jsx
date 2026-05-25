import { useState } from "react"
import { Link, useLocation } from "react-router-dom"

const menuItems = [
  { path: "/dashboard", label: "Overview", icon: "🏠" },
  { path: "/transactions", label: "Transactions", icon: "💳" },
  { path: "/accounts", label: "Accounts", icon: "🏦" },
  { path: "/reports", label: "Reports", icon: "📊" },
  { path: "/settings", label: "Settings", icon: "⚙️" },
]

export default function MainLayout({ children }) {
  const location = useLocation()
  const [collapsed, setCollapsed] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  const sidebarContent = (
    <>
      <div className="flex items-center justify-between px-4 py-5 border-b border-slate-200">
        <div className="flex items-center gap-3">
          <div className="rounded-2xl bg-primary-500 p-3 text-white shadow-sm shadow-primary-500/20">F</div>
          {!collapsed && (
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-400">FINE</p>
              <h1 className="text-xl font-extrabold text-slate-900">Finebank</h1>
            </div>
          )}
        </div>
        <button
          type="button"
          onClick={() => setCollapsed(!collapsed)}
          className="text-slate-500 hover:text-slate-700 transition"
          aria-label="Toggle sidebar"
        >
          {collapsed ? "→" : "←"}
        </button>
      </div>
      <nav className="flex-1 px-2 py-4 space-y-1">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
              location.pathname === item.path ? "bg-primary-500 text-white" : "text-slate-600 hover:bg-slate-100"
            }`}
            onClick={() => setMobileOpen(false)}
          >
            <span>{item.icon}</span>
            {!collapsed && <span>{item.label}</span>}
          </Link>
        ))}
      </nav>
      {!collapsed && (
        <div className="px-4 py-4 border-t border-slate-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-900 font-semibold text-sm">
              A
            </div>
            <div className="flex-1">
              <p className="text-sm font-semibold text-slate-900">Admin User</p>
              <p className="text-xs text-slate-500">admin@finebank.io</p>
            </div>
          </div>
          <Link
            to="/login"
            className="mt-4 inline-flex w-full items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 py-3 text-sm font-medium text-slate-700 hover:bg-slate-100"
          >
            Logout
          </Link>
        </div>
      )}
    </>
  )

  return (
    <div className="relative min-h-screen bg-slate-50">
      {mobileOpen && (
        <button
          type="button"
          onClick={() => setMobileOpen(false)}
          className="fixed inset-0 z-20 bg-black/30 md:hidden"
          aria-label="Close menu"
        />
      )}

      <aside className={`${collapsed ? "w-16" : "w-64"} hidden md:flex flex-col bg-white border-r border-slate-200 transition-all duration-300`}>
        {sidebarContent}
      </aside>

      <aside
        className={`fixed inset-y-0 left-0 z-30 w-72 bg-white border-r border-slate-200 shadow-xl transition-transform duration-300 md:hidden ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">{sidebarContent}</div>
      </aside>

      <div className="flex min-h-screen flex-1 flex-col md:ml-0">
        <header className="bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-slate-600 hover:bg-slate-100 md:hidden"
              aria-label="Open menu"
            >
              ☰
            </button>
            <div>
              <p className="text-sm text-slate-500">Dashboard</p>
              <h1 className="text-xl font-semibold text-slate-900 capitalize">{location.pathname.replace("/", "") || "Dashboard"}</h1>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200">
              🔔
            </button>
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-primary-500 text-white">A</div>
          </div>
        </header>
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  )
}
