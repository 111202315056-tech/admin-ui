import { Link } from "react-router-dom"

function Card({ title, link, desc, children }) {
  return (
    <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 h-full">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-semibold text-gray-700">{title}</h3>
        {link && (
          <Link to={link} className="text-xs text-primary-500 hover:underline">
            View all
          </Link>
        )}
      </div>
      <div className="text-sm text-gray-400">{desc || children}</div>
    </div>
  )
}

export default Card
