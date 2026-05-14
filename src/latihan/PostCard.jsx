import { useState } from "react"

function PostCard({ id, userId, title, body }) {
  const [clicked, setClicked] = useState(false)

  return (
    <div className="p-4 rounded-lg border border-gray-200 bg-white cursor-pointer
      hover:scale-105 hover:border-gray-400 hover:bg-red-50 hover:shadow-lg 
      transition-all duration-300">
      
      <h2 className="text-sm font-bold text-center text-gray-800 mb-3">
        {title}
      </h2>
      
      <p className="text-xs text-center text-gray-500 mb-4">
        {body}
      </p>
      
      <button
        onClick={() => setClicked(true)}
        style={clicked ? { backgroundColor: "#b83016" } : {}}
        className={`w-full py-2 rounded text-white text-sm font-medium transition-all
          ${clicked ? "hover:opacity-90" : "bg-gray-500 hover:bg-gray-600"}`}
      >
        {clicked ? "Tombol sudah diklik" : "Silakan Klik"}
      </button>
    </div>
  )
}

export default PostCard