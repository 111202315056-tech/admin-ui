import Logo from "../Elements/Logo"
import { useDarkMode } from "../../context/darkModeContext"

function AuthLayout({ children }) {
  const { isDark, toggleDarkMode } = useDarkMode()

  return (
    <main className={`min-h-screen flex items-center justify-center transition-colors duration-300 ${isDark ? "bg-gray-900" : "bg-gray-50"}`}>
      <div className="w-full max-w-sm px-6">
        <Logo />
        {children}

        {/* Dark Mode Toggle */}
        <div className="flex items-center justify-center gap-2 mt-6">
          <span className={`text-xs ${isDark ? "text-gray-400" : "text-gray-500"}`}>
            {isDark ? "🌙 Dark Mode" : "☀️ Light Mode"}
          </span>
          <button
            onClick={toggleDarkMode}
            className={`relative w-11 h-6 rounded-full transition-colors duration-300 focus:outline-none ${isDark ? "bg-primary-500" : "bg-gray-300"}`}
          >
            <span
              className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform duration-300 ${isDark ? "translate-x-5" : "translate-x-0"}`}
            />
          </button>
        </div>
      </div>
    </main>
  )
}

export default AuthLayout