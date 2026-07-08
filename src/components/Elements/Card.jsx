import { Link } from "react-router-dom"
import { useDarkMode } from "../../context/darkModeContext"

function Card({ title, link, desc, children }) {
  const { isDark } = useDarkMode()
  return (
    <div className={`rounded-xl p-4 border h-full ${isDark ? "bg-gray-800 border-gray-700" : "bg-white border-gray-100 shadow-sm"}`}>
      <div className="flex items-center justify-between mb-3">
        <h3 className={`text-sm font-semibold ${isDark ? "text-white" : "text-gray-700"}`}>{title}</h3>
        {link && (
          <Link to={link} className="text-xs text-primary hover:underline">
            View all
          </Link>
        )}
      </div>
      <div className={`text-sm ${isDark ? "text-gray-300" : "text-gray-400"}`}>{desc || children}</div>
    </div>
  )
}

export default Card