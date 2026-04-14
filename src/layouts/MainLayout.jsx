import { useState } from "react"
import { Link, useLocation } from "react-router-dom"

const menuItems = [
  { path: "/dashboard", label: "Dashboard", icon: "🏠" },
  { path: "/transactions", label: "Transactions", icon: "💳" },
  { path: "/accounts", label: "Accounts", icon: "🏦" },
  { path: "/reports", label: "Reports", icon: "📊" },
  { path: "/settings", label: "Settings", icon: "⚙️" },
]

export default function MainLayout({ children }) {
  const location = useLocation()
  const [collapsed, setCollapsed] = useState(false)

  return (
    <div className="flex min-h-screen bg-special-mainBg">
      <aside className={`${collapsed ? "w-16" : "w-60"} bg-white border-r border-gray-05 flex flex-col transition-all duration-300`}>
        <div className="flex items-center justify-between px-4 py-5 border-b border-gray-05">
          {!collapsed && <h1 className="text-xl font-extrabold text-primary font-poppins">Finebank</h1>}
          <button onClick={() => setCollapsed(!collapsed)} className="text-gray-03 hover:text-secondary text-lg ml-auto">
            {collapsed ? "→" : "←"}
          </button>
        </div>
        <nav className="flex-1 px-2 py-4 space-y-1">
          {menuItems.map((item) => (
            <Link key={item.path} to={item.path}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition
                ${location.pathname === item.path ? "bg-primary text-white" : "text-secondary hover:bg-gray-06"}`}>
              <span>{item.icon}</span>
              {!collapsed && <span>{item.label}</span>}
            </Link>
          ))}
        </nav>
        {!collapsed && (
          <div className="px-4 py-4 border-t border-gray-05">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-special-mainBg flex items-center justify-center text-primary font-semibold text-sm">A</div>
              <div>
                <p className="text-sm font-medium text-defaultBlack">Admin User</p>
                <p className="text-xs text-gray-03">admin@finebank.io</p>
              </div>
            </div>
          </div>
        )}
      </aside>
      <div className="flex-1 flex flex-col">
        <header className="bg-white border-b border-gray-05 px-6 py-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-defaultBlack capitalize">
            {location.pathname.replace("/", "") || "Dashboard"}
          </h2>
          <div className="flex items-center gap-3">
            <button className="text-gray-03 hover:text-secondary">🔔</button>
            <div className="w-8 h-8 rounded-full bg-special-mainBg flex items-center justify-center text-primary font-semibold text-sm">A</div>
          </div>
        </header>
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  )
}