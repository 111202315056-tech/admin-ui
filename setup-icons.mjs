import { writeFileSync, mkdirSync } from 'fs'

mkdirSync('src/assets/icons', { recursive: true })

// Overview SVG icon (dari Finebank Figma)
writeFileSync('src/assets/icons/Overview.svg',
`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="1" y="1" width="7" height="7" rx="1" stroke="currentColor" stroke-width="1.5"/>
  <rect x="12" y="1" width="7" height="7" rx="1" stroke="currentColor" stroke-width="1.5"/>
  <rect x="1" y="12" width="7" height="7" rx="1" stroke="currentColor" stroke-width="1.5"/>
  <rect x="12" y="12" width="7" height="7" rx="1" stroke="currentColor" stroke-width="1.5"/>
</svg>`)

writeFileSync('src/assets/icons/Transaction.svg',
`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M3 7L7 3L11 7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M7 3V13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
  <path d="M17 13L13 17L9 13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M13 17V7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
</svg>`)

writeFileSync('src/assets/icons/Balance.svg',
`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="10" cy="10" r="8" stroke="currentColor" stroke-width="1.5"/>
  <path d="M10 6V10L13 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
</svg>`)

writeFileSync('src/assets/icons/Bill.svg',
`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M4 3H16V17L13 15L10 17L7 15L4 17V3Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M7 8H13M7 11H11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
</svg>`)

writeFileSync('src/assets/icons/Expense.svg',
`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M10 3V13M10 13L7 10M10 13L13 10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M4 17H16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
</svg>`)

writeFileSync('src/assets/icons/Settings.svg',
`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="10" cy="10" r="2.5" stroke="currentColor" stroke-width="1.5"/>
  <path d="M10 2V4M10 16V18M2 10H4M16 10H18M4.22 4.22L5.64 5.64M14.36 14.36L15.78 15.78M4.22 15.78L5.64 14.36M14.36 5.64L15.78 4.22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
</svg>`)

writeFileSync('src/assets/icons/Logout.svg',
`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 3H4C3.45 3 3 3.45 3 4V16C3 16.55 3.45 17 4 17H8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
  <path d="M13 7L17 10L13 13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M8 10H17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
</svg>`)

writeFileSync('src/assets/icons/ChevronRight.svg',
`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 5L13 10L8 15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`)

// Icon component
writeFileSync('src/components/Elements/Icon.jsx',
`import OverviewSvg from "../../assets/icons/Overview.svg?react"
import TransactionSvg from "../../assets/icons/Transaction.svg?react"
import BalanceSvg from "../../assets/icons/Balance.svg?react"
import BillSvg from "../../assets/icons/Bill.svg?react"
import ExpenseSvg from "../../assets/icons/Expense.svg?react"
import SettingsSvg from "../../assets/icons/Settings.svg?react"
import LogoutSvg from "../../assets/icons/Logout.svg?react"
import ChevronRightSvg from "../../assets/icons/ChevronRight.svg?react"

const Icon = {
  Overview: ({ size = 20, color = "currentColor", ...props }) => (
    <OverviewSvg width={size} height={size} stroke={color} {...props} />
  ),
  Transaction: ({ size = 20, color = "currentColor", ...props }) => (
    <TransactionSvg width={size} height={size} stroke={color} {...props} />
  ),
  Balance: ({ size = 20, color = "currentColor", ...props }) => (
    <BalanceSvg width={size} height={size} stroke={color} {...props} />
  ),
  Bill: ({ size = 20, color = "currentColor", ...props }) => (
    <BillSvg width={size} height={size} stroke={color} {...props} />
  ),
  Expense: ({ size = 20, color = "currentColor", ...props }) => (
    <ExpenseSvg width={size} height={size} stroke={color} {...props} />
  ),
  Setting: ({ size = 20, color = "currentColor", ...props }) => (
    <SettingsSvg width={size} height={size} stroke={color} {...props} />
  ),
  Logout: ({ size = 20, color = "currentColor", ...props }) => (
    <LogoutSvg width={size} height={size} stroke={color} {...props} />
  ),
  ChevronRight: ({ size = 20, color = "currentColor", ...props }) => (
    <ChevronRightSvg width={size} height={size} stroke={color} {...props} />
  ),
}

export default Icon`)

// MainLayout dengan icons dan navigasi
writeFileSync('src/components/Layouts/MainLayout.jsx',
`import { NavLink } from "react-router-dom"
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
                \`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition
                \${isActive
                  ? "bg-primary-500 text-white font-bold"
                  : "text-gray-600 hover:text-white hover:font-bold hover:bg-primary-500"
                }\`
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

export default MainLayout`)

// Balance page
writeFileSync('src/pages/Balance.jsx',
`import MainLayout from "../components/Layouts/MainLayout"

function Balance() {
  return (
    <MainLayout>
      <h1>Test Balance Page</h1>
    </MainLayout>
  )
}

export default Balance`)

// Update App.jsx tambah route balance
writeFileSync('src/App.jsx',
`import SignInPage from "./pages/SignIn"
import SignUpPage from "./pages/SignUp"
import ErrorPage from "./pages/Error"
import Balance from "./pages/Balance"
import { createBrowserRouter, RouterProvider, Link } from "react-router-dom"

function App() {
  const myRouter = createBrowserRouter([
    {
      path: "/",
      element: (
        <div className="flex justify-center items-center min-h-screen">
          <Link to="/login" className="p-2 m-5 bg-primary-500 text-white rounded">
            Login
          </Link>
          |
          <Link to="/register" className="p-2 m-5 bg-primary-500 text-white rounded">
            Register
          </Link>
        </div>
      ),
      errorElement: <ErrorPage />,
    },
    {
      path: "/login",
      element: <SignInPage />,
    },
    {
      path: "/register",
      element: <SignUpPage />,
    },
    {
      path: "/balance",
      element: <Balance />,
    },
  ])

  return (
    <>
      <RouterProvider router={myRouter} />
    </>
  )
}

export default App`)

console.log('setup-icons selesai!')