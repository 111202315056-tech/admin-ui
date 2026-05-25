import { NavLink } from "react-router-dom"
import NotificationsIcon from "@mui/icons-material/Notifications"
import Icon from "../Elements/Icon"

const menu = [
  { id: 1, name: "Overview", icon: Icon.Overview, link: "/" },
  { id: 2, name: "Balance", icon: Icon.Balance, link: "/balance" },
  { id: 3, name: "Transaction", icon: Icon.Transaction, link: "/transaction" },
  { id: 4, name: "Bills", icon: Icon.Bill, link: "/bill" },
  { id: 5, name: "Expense", icon: Icon.Expense, link: "/expense" },
  { id: 6, name: "Goals", icon: Icon.Balance, link: "/goals" },
  { id: 7, name: "Settings", icon: Icon.Setting, link: "/setting" },
]

function MainLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-gray-50">

      {/* Sidebar */}
      <aside className="w-60 bg-white border-r border-gray-100 flex flex-col">
        <div className="px-6 py-6 border-b border-gray-100">
          <h1 className="text-xl font-black">
            <span className="text-primary-500">FINE</span>
            <span className="text-gray-800">bank</span>
            <span className="text-primary-500">.IO</span>
          </h1>
        </div>

        <nav className="flex-1 px-3 py-4 space-y-1">
          {menu.map((item) => (
            <NavLink
              key={item.id}
              to={item.link}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition
                ${isActive
                  ? "bg-primary-500 text-white font-bold"
                  : "text-gray-600 hover:text-white hover:font-bold hover:bg-primary-500"
                }`
              }
            >
              <item.icon size={20} />
              <div className="mx-auto w-block">{item.name}</div>
            </NavLink>
          ))}
        </nav>

        <div className="px-3 py-4 border-t border-gray-100">
          <button className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-gray-600 hover:bg-red-50 hover:text-red-500 w-full transition">
            <Icon.Logout size={20} />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <header className="bg-white border-b border-gray-100 px-6 py-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-800">Username</h2>
          <div className="flex items-center gap-3">
            <NotificationsIcon className="text-gray-400" />
            <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 font-semibold text-sm">
              A
            </div>
          </div>
        </header>
        <main className="flex-1 p-6">
          {children}
        </main>
      </div>
    </div>
  )
}

export default MainLayout