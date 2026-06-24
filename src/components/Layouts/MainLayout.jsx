import { NavLink, useNavigate } from "react-router-dom"
import Icon from "../Elements/Icon"
import { useState, useContext } from "react"
import { ThemeContext } from "../../context/themeContext"
import { AuthContext } from "../../context/authContext"

const themes = [
  { name: "theme-green", bgcolor: "bg-[#299D91]", color: "#299D91" },
  { name: "theme-blue", bgcolor: "bg-[#1E90FF]", color: "#1E90FF" },
  { name: "theme-purple", bgcolor: "bg-[#6A5ACD]", color: "#6A5ACD" },
  { name: "theme-pink", bgcolor: "bg-[#DB7093]", color: "#DB7093" },
  { name: "theme-brown", bgcolor: "bg-[#8B4513]", color: "#8B4513" },
]

const menu = [
  { id: 1, name: "Overview", icon: Icon.Overview, link: "/dashboard" },
  { id: 2, name: "Balance", icon: Icon.Balance, link: "/balance" },
  { id: 3, name: "Transaction", icon: Icon.Transaction, link: "/transaction" },
  { id: 4, name: "Bills", icon: Icon.Bill, link: "/bill" },
  { id: 5, name: "Expense", icon: Icon.Expense, link: "/expense" },
  { id: 6, name: "Goals", icon: Icon.Goal, link: "/goals" },
  { id: 7, name: "Settings", icon: Icon.Setting, link: "/setting" },
]

const notifications = [
  { id: 1, title: "New transaction", message: "You spent $160 on GTR 5", time: "2 min ago", read: false },
  { id: 2, title: "Bill due soon", message: "Figma yearly plan due on May 15", time: "1 hour ago", read: false },
  { id: 3, title: "Goal progress", message: "You reached 62% of your savings goal", time: "3 hours ago", read: false },
]

function MainLayout({ children }) {
  const navigate = useNavigate()
  const [showNotif, setShowNotif] = useState(false)
  const [notifList, setNotifList] = useState(notifications)
  const { theme, setTheme } = useContext(ThemeContext)
  const { logout } = useContext(AuthContext)

  const unreadCount = notifList.filter(n => !n.read).length

  const markAllRead = () => {
    setNotifList(notifList.map(n => ({ ...n, read: true })))
  }

  const handleLogout = async () => {
    await logout()
    navigate("/login")
  }

  return (
    <div className={`flex h-screen bg-gray-100 ${theme.name}`}>
      <aside className="w-64 bg-gray-900 flex flex-col flex-shrink-0 overflow-y-auto">
        <div className="px-6 py-6 border-b border-gray-700">
          <h1 className="text-xl font-black">
            <span className="text-primary">FINE</span>
            <span className="text-white">bank</span>
            <span className="text-primary">.IO</span>
          </h1>
        </div>
        <nav className="flex-1 px-3 py-4 space-y-1">
          {menu.map((item) => (
            <NavLink
              key={item.id}
              to={item.link}
              className={({ isActive }) =>
                "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition " +
                (isActive
                  ? "bg-primary text-white"
                  : "text-gray-400 hover:bg-gray-800 hover:text-white")
              }
            >
              <item.icon size={20} />
              <span>{item.name}</span>
            </NavLink>
          ))}
        </nav>

        {/* Theme Picker */}
        <div className="px-4 py-3 border-t border-gray-700">
          <p className="text-xs text-gray-400 mb-2">Themes</p>
          <div className="flex gap-2">
            {themes.map((t) => (
              <div
                key={t.name}
                className={`${t.bgcolor} w-6 h-6 rounded-md cursor-pointer ${theme.name === t.name ? "ring-2 ring-white" : ""}`}
                onClick={() => setTheme(t)}
              />
            ))}
          </div>
        </div>

        <div className="border-t border-gray-700 px-3 py-4">
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-red-500 hover:bg-red-500/10 hover:text-red-400 w-full transition"
          >
            <Icon.Logout size={20} />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      <div className="flex-1 flex flex-col overflow-y-auto">
        <header className="bg-white border-b border-gray-100 px-6 py-4 flex items-center justify-between sticky top-0 z-40">
          <div>
            <p className="text-xs text-gray-400">
              {new Date().toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}
            </p>
            <p className="text-lg font-semibold text-gray-800">Hello Aldi 👋</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="relative">
              <button
                onClick={() => setShowNotif(!showNotif)}
                className="relative cursor-pointer p-1"
              >
                <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" className="text-primary">
                  <path strokeLinecap="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0 1 18 14.158V11a6 6 0 0 0-5-5.917V4a1 1 0 0 0-2 0v1.083A6 6 0 0 0 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 0 1-6 0v-1m6 0H9"/>
                </svg>
                {unreadCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                    {unreadCount}
                  </span>
                )}
              </button>

              {showNotif && (
                <div className="absolute right-0 top-10 w-80 bg-white rounded-xl shadow-lg border border-gray-100 z-50">
                  <div className="flex justify-between items-center px-4 py-3 border-b border-gray-100">
                    <h3 className="text-sm font-semibold text-gray-800">Notifications</h3>
                    <button onClick={markAllRead} className="text-xs text-primary hover:underline">
                      Mark all as read
                    </button>
                  </div>
                  <div className="divide-y divide-gray-50">
                    {notifList.map(n => (
                      <div
                        key={n.id}
                        className={`px-4 py-3 flex gap-3 items-start cursor-pointer hover:bg-gray-50 ${!n.read ? "bg-teal-50" : ""}`}
                        onClick={() => setNotifList(notifList.map(x => x.id === n.id ? { ...x, read: true } : x))}
                      >
                        <div className={`w-2 h-2 rounded-full mt-1.5 flex-shrink-0 ${!n.read ? "bg-primary" : "bg-gray-300"}`} />
                        <div>
                          <p className="text-xs font-semibold text-gray-800">{n.title}</p>
                          <p className="text-xs text-gray-500">{n.message}</p>
                          <p className="text-xs text-gray-400 mt-1">{n.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="px-4 py-3 border-t border-gray-100">
                    <button onClick={() => setShowNotif(false)} className="text-xs text-gray-400 hover:text-gray-600 w-full text-center">
                      Close
                    </button>
                  </div>
                </div>
              )}
            </div>
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-semibold text-sm">A</div>
          </div>
        </header>
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  )
}

export default MainLayout