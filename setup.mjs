import { writeFileSync } from 'fs'

writeFileSync('src/index.css', '@import "tailwindcss";')

writeFileSync('vite.config.js', 
`import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
})`)

writeFileSync('src/UserCard.jsx', 
`import { useState } from "react"

function UserCard({ name, email, street, city }) {
  const [clicked, setClicked] = useState(false)
  return (
    <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow">
      <h2 className="text-xl font-semibold text-gray-800 mb-2">{name}</h2>
      <p className="text-gray-600"><span className="font-medium">Email:</span> {email}</p>
      <p className="text-gray-600"><span className="font-medium">Address:</span> {street}, {city}</p>
      <button
        onClick={() => setClicked(true)}
        className={\`\${clicked ? "bg-green-500" : "bg-gray-400"} text-white p-2 rounded-md mt-4\`}
      >
        {clicked ? "Tombol sudah diklik" : "Silakan Klik"}
      </button>
    </div>
  )
}

export default UserCard`)

writeFileSync('src/Exercise.jsx',
`import React from "react"
import UserCard from "./UserCard"

function Exercise() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6 text-blue-700">User Cards</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        <UserCard name="April" email="april@gmail.com" street="Jl. Imam Bonjol" city="Semarang" />
        <UserCard name="Yani" email="yani@gmail.com" street="Jl. Indraprasta" city="Ungaran" />
        <UserCard name="Safitri" email="safitri@gmail.com" street="Jl. Pemuda" city="Kendal" />
      </div>
    </div>
  )
}

export default Exercise`)

writeFileSync('src/main.jsx',
`import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Exercise from './Exercise'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Exercise />
  </StrictMode>,
)`)

console.log('Semua file berhasil dibuat!')