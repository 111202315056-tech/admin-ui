import { writeFileSync, mkdirSync } from 'fs'

mkdirSync('src/assets/icons', { recursive: true })
mkdirSync('src/components/Elements', { recursive: true })
mkdirSync('src/components/Fragments', { recursive: true })
mkdirSync('src/components/Layouts', { recursive: true })
mkdirSync('src/pages', { recursive: true })

// SVG Icons
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

// Icon component
writeFileSync('src/components/Elements/Icon.jsx',
`import { ReactComponent as OverviewSvg } from "../../assets/icons/Overview.svg"
import { ReactComponent as TransactionSvg } from "../../assets/icons/Transaction.svg"
import { ReactComponent as BalanceSvg } from "../../assets/icons/Balance.svg"
import { ReactComponent as BillSvg } from "../../assets/icons/Bill.svg"
import { ReactComponent as ExpenseSvg } from "../../assets/icons/Expense.svg"
import { ReactComponent as SettingsSvg } from "../../assets/icons/Settings.svg"
import { ReactComponent as LogoutSvg } from "../../assets/icons/Logout.svg"

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
}

export default Icon`)

// Logo component
writeFileSync('src/components/Elements/Logo.jsx',
`function Logo({ variant = "primary" }) {
  const variantClasses = {
    primary: "text-primary text-4xl",
    secondary: "text-white text-sm sartext-2xl",
  }

  return (
    <div className="flex justify-center font-poppins tracking-wide">
      <span className="font-bold #100">.IO</span>
      bank
      <span className="font-bold #100">.IO</span>
    </div>
  )
}

export default Logo`)

// Input component
writeFileSync('src/components/Elements/Input.jsx',
`import React from "react"

function Input(props) {
  const {
    id,
    icon = false,
    backgroundColor = false,
    border = "border-gray-dx",
    ...rest
  } = props

  return (
    <div>
      <input
        className={\`py-0 p-4 text-sm rounded-md w-full border text-gray-dx focus:outline-none focus:ring-0 \${backgroundColor || ""}\`}
        id={id}
        {...rest}
      />
    </div>
  )
}

export default Input`)

// LabeledInput component
writeFileSync('src/components/Elements/LabeledInput.jsx',
`import React from "react"
import Input from "./Input"

function LabeledInput(props) {
  const { label, id, ...rest } = props

  return (
    <div>
      <label htmlFor={id} className="block text-sm mb-2">
        {label}
      </label>
      <Input id={id} {...rest} />
    </div>
  )
}

export default LabeledInput`)

// Button component
writeFileSync('src/components/Elements/Button.jsx',
`function Button(props) {
  const { children, type = "submit", variant = "primary", onClick } = props

  const baseClasses = "h-12 rounded-md text-sm w-full"
  const variantClasses = {
    primary: "bg-primary-500 text-white hover:bg-primary-600",
    secondary: "bg-gray-100 text-gray-600 hover:bg-gray-200",
  }

  const finalClasses = \`\${baseClasses} \${variantClasses[variant] || variantClasses.primary}\`

  return (
    <button className={finalClasses} type={type} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button`)

// CheckBox component
writeFileSync('src/components/Elements/CheckBox.jsx',
`function CheckBox({ label, name }) {
  return (
    <div className="flex items-center gap-2">
      <input type="checkbox" id={name} name={name} className="w-4 h-4" />
      <label htmlFor={name} className="text-sm text-gray-600">{label}</label>
    </div>
  )
}

export default CheckBox`)

// Card component
writeFileSync('src/components/Elements/Card.jsx',
`import React from "react"

function Card(props) {
  const { title, link = false, desc } = props

  return (
    <div className="flex flex-col">
      <div>{title}</div>
      <div>
        {link && <div className="View all">{link}</div>}
        <div>{desc}</div>
      </div>
    </div>
  )
}

export default Card`)

// FormSignIn
writeFileSync('src/components/Fragments/FormSignIn.jsx',
`import { Link, useNavigate } from "react-router-dom"
import LabeledInput from "../Elements/LabeledInput"
import CheckBox from "../Elements/CheckBox"
import Button from "../Elements/Button"

function FormSignIn() {
  const navigate = useNavigate()

  const handleLogin = () => navigate("/dashboard")
  const handleGoogle = () => navigate("/dashboard")

  return (
    <form className="space-y-5">
      <LabeledInput label="Email address" type="email" id="email" placeholder="hello@example.com" />
      <LabeledInput label="Password" type="password" id="password" placeholder="••••••••••••" />
      <CheckBox label="Keep me signed in" name="remember" />
      <Button type="button" onClick={handleLogin}>Login</Button>
      <div className="flex items-center gap-3">
        <div className="flex-1 h-px bg-gray-200" />
        <span className="text-xs text-gray-400">or sign in with</span>
        <div className="flex-1 h-px bg-gray-200" />
      </div>
      <Button type="button" variant="secondary" onClick={handleGoogle}>
        <span className="flex items-center justify-center gap-2">
          <img src="https://www.google.com/favicon.ico" className="w-4 h-4" alt="google" />
          Continue with Google
        </span>
      </Button>
      <p className="text-center text-sm text-gray-500">
        <Link to="/register" className="text-primary-500 font-medium">Create an account</Link>
      </p>
    </form>
  )
}

export default FormSignIn`)

// FormSignUp
writeFileSync('src/components/Fragments/FormSignUp.jsx',
`import { Link, useNavigate } from "react-router-dom"
import LabeledInput from "../Elements/LabeledInput"
import Button from "../Elements/Button"

function FormSignUp() {
  const navigate = useNavigate()
  const handleRegister = () => navigate("/dashboard")

  return (
    <form className="space-y-5">
      <LabeledInput label="Name" type="text" id="name" placeholder="Your Name" />
      <LabeledInput label="Email address" type="email" id="email" placeholder="hello@example.com" />
      <LabeledInput label="Password" type="password" id="password" placeholder="••••••••••••" />
      <Button type="button" onClick={handleRegister}>Sign Up</Button>
      <div className="flex items-center gap-3">
        <div className="flex-1 h-px bg-gray-200" />
        <span className="text-xs text-gray-400">or sign up with</span>
        <div className="flex-1 h-px bg-gray-200" />
      </div>
      <Button type="button" variant="secondary" onClick={handleRegister}>
        <span className="flex items-center justify-center gap-2">
          <img src="https://www.google.com/favicon.ico" className="w-4 h-4" alt="google" />
          Continue with Google
        </span>
      </Button>
      <p className="text-center text-sm text-gray-500">
        Already have an account?{" "}
        <Link to="/login" className="text-primary-500 font-medium">Sign In Here</Link>
      </p>
    </form>
  )
}

export default FormSignUp`)

// AuthLayout
writeFileSync('src/components/Layouts/AuthLayout.jsx',
`import Logo from "../Elements/Logo"

function AuthLayout({ children }) {
  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="w-full max-w-sm px-6">
        <Logo />
        {children}
      </div>
    </main>
  )
}

export default AuthLayout`)

// MainLayout - Responsive
writeFileSync('src/components/Layouts/MainLayout.jsx',
`import { NavLink } from "react-router-dom"
import NotificationsIcon from "@mui/icons-material/Notifications"
import SearchIcon from "@mui/icons-material/Search"
import Icon from "../Elements/Icon"

const menu = [
  { id: 1, name: "Overview", icon: Icon.Overview, link: "/dashboard" },
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
      <aside className="w-20 md:w-64 bg-white border-r border-gray-100 flex flex-col">

        {/* Logo */}
        <div className="px-4 md:px-6 py-6 border-b border-gray-100">
          <h1 className="text-lg md:text-xl font-black hidden md:block">
            <span className="text-primary-500">FINE</span>
            <span className="text-gray-800">bank</span>
            <span className="text-primary-500">.IO</span>
          </h1>
          <h1 className="text-lg font-black md:hidden text-center text-primary-500">F</h1>
        </div>

        {/* Nav Menu */}
        <nav className="flex-1 px-2 md:px-3 py-4 space-y-1">
          {menu.map((item) => (
            <NavLink
              key={item.id}
              to={item.link}
              className={({ isActive }) =>
                \`flex items-center gap-3 px-2 md:px-3 py-2.5 rounded-lg text-sm font-medium transition
                \${isActive
                  ? "bg-primary-500 text-white font-bold"
                  : "text-gray-600 hover:text-white hover:font-bold hover:bg-primary-500"
                }\`
              }
            >
              <item.icon size={20} />
              <span className="hidden md:block">{item.name}</span>
            </NavLink>
          ))}
        </nav>

        {/* Logout + User */}
        <div className="border-t border-gray-100 px-2 md:px-3 py-4 space-y-3">
          <button className="flex items-center gap-3 px-2 md:px-3 py-2.5 rounded-lg text-sm font-medium text-gray-600 hover:bg-red-50 hover:text-red-500 w-full transition">
            <Icon.Logout size={20} />
            <span className="hidden md:block">Logout</span>
          </button>
          <div className="flex justify-between items-center">
            <div className="hidden md:block">
              <p className="text-sm font-medium text-gray-800">Tanur Rahman</p>
            </div>
            <div className="hidden md:block">
              <Icon.Setting size={16} color="#9CA3AF" />
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">

        {/* Header */}
        <header className="bg-white border-b border-gray-100 px-4 md:px-6 py-4 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-xs text-gray-400">May 10, 2024</span>
            <span className="text-lg font-semibold text-gray-800">Hello Tanur 👋</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-2 bg-gray-100 rounded-lg px-3 py-2">
              <SearchIcon className="text-gray-400" style={{ fontSize: 18 }} />
              <input placeholder="Search here" className="bg-transparent text-sm focus:outline-none w-40" />
            </div>
            <NotificationsIcon className="text-gray-400 cursor-pointer" />
            <div className="w-8 h-8 rounded-full bg-primary-500 flex items-center justify-center text-white font-semibold text-sm">
              T
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-4 md:p-6">
          {children}
        </main>
      </div>
    </div>
  )
}

export default MainLayout`)

// Dashboard page
writeFileSync('src/pages/Dashboard.jsx',
`import MainLayout from "../components/Layouts/MainLayout"
import Card from "../components/Elements/Card"

function Dashboard() {
  return (
    <MainLayout>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 md:col-span-4">
          <Card title="Total Balance" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit." />
        </div>
        <div className="col-span-12 md:col-span-4">
          <Card title="Goals" link="/goals" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit." />
        </div>
        <div className="col-span-12 md:col-span-4">
          <Card title="Upcoming Bill" link="/bill" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit." />
        </div>
        <div className="col-span-12 md:col-span-4 md:row-span-2">
          <Card title="Recent Transactions" link="/transaction" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit." />
        </div>
        <div className="col-span-12 md:col-span-8">
          <Card title="Statistics" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit." />
        </div>
        <div className="col-span-12 md:col-span-8">
          <Card title="Expenses Breakdown" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit." />
        </div>
      </div>
    </MainLayout>
  )
}

export default Dashboard`)

// Balance page
writeFileSync('src/pages/Balance.jsx',
`import MainLayout from "../components/Layouts/MainLayout"

function Balance() {
  return (
    <MainLayout>
      <h1 className="text-2xl font-bold text-gray-800">Balance Page</h1>
    </MainLayout>
  )
}

export default Balance`)

// SignIn page
writeFileSync('src/pages/SignIn.jsx',
`import AuthLayout from "../components/Layouts/AuthLayout"
import FormSignIn from "../components/Fragments/FormSignIn"

function SignIn() {
  return (
    <AuthLayout>
      <FormSignIn />
    </AuthLayout>
  )
}

export default SignIn`)

// SignUp page
writeFileSync('src/pages/SignUp.jsx',
`import AuthLayout from "../components/Layouts/AuthLayout"
import FormSignUp from "../components/Fragments/FormSignUp"

function SignUp() {
  return (
    <AuthLayout>
      <FormSignUp />
    </AuthLayout>
  )
}

export default SignUp`)

// Error page
writeFileSync('src/pages/Error.jsx',
`import { useRouteError } from "react-router-dom"

function ErrorPage() {
  const error = useRouteError()
  return (
    <div className="flex justify-center min-h-screen items-center bg-gray-50 flex-col">
      <h1 className="text-3xl font-black mb-2">
        <span className="text-primary-500">FINE</span>bank<span className="text-primary-500">.IO</span>
      </h1>
      <h2 className="text-2xl font-bold mt-3 mb-1">Sorry,</h2>
      <p className="text-gray-500">{error.status} | {error.statusText || error.message}</p>
    </div>
  )
}

export default ErrorPage`)

// App.jsx dengan semua routes
writeFileSync('src/App.jsx',
`import SignInPage from "./pages/SignIn"
import SignUpPage from "./pages/SignUp"
import ErrorPage from "./pages/Error"
import Dashboard from "./pages/Dashboard"
import Balance from "./pages/Balance"
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom"

function App() {
  const myRouter = createBrowserRouter([
    {
      path: "/",
      element: <Navigate to="/login" replace />,
      errorElement: <ErrorPage />,
    },
    { path: "/login", element: <SignInPage /> },
    { path: "/register", element: <SignUpPage /> },
    { path: "/dashboard", element: <Dashboard /> },
    { path: "/balance", element: <Balance /> },
  ])

  return <RouterProvider router={myRouter} />
}

export default App`)

// vite.config.js dengan svgr
writeFileSync('vite.config.js',
`import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import svgr from 'vite-plugin-svgr'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    svgr(),
  ],
})`)

// vercel.json
writeFileSync('vercel.json',
`{
  "rewrites": [{ "source": "/(.*)", "destination": "/" }]
}`)

console.log('setup-materi10-11 selesai!')