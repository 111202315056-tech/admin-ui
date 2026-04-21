import { writeFileSync, mkdirSync } from 'fs'

mkdirSync('src/components', { recursive: true })

writeFileSync('src/components/UserCard.jsx',
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
        className={\`\${clicked ? "bg-green-500" : "bg-gray-400"} text-white p-2 rounded-md mt-4\`}>
        {clicked ? "Tombol sudah diklik" : "Silakan Klik"}
      </button>
    </div>
  )
}

export default UserCard`)

writeFileSync('src/pages/UserCards.jsx',
`import UserCard from "../components/UserCard"

export default function UserCards() {
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
}`)

writeFileSync('src/App.jsx',
`import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import UserCards from './pages/UserCards'
import MainLayout from './layouts/MainLayout'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/usercards" element={<UserCards />} />
        <Route path="/dashboard" element={<MainLayout><Dashboard /></MainLayout>} />
      </Routes>
    </BrowserRouter>
  )
}`)

writeFileSync('src/pages/Login.jsx',
`import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [show, setShow] = useState(false)
  const [error, setError] = useState("")
  const navigate = useNavigate()

  const handleLogin = () => {
    if (email === "" || password === "") {
      setError("Email dan password harus diisi!")
      return
    }
    setError("")
    navigate("/usercards")
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="w-full max-w-sm px-6">
        <div className="mb-10">
          <h1 className="text-3xl font-black tracking-tight">
            <span className="text-primary-500">FINE</span>
            <span className="text-gray-800">bank</span>
            <span className="text-primary-500">.IO</span>
          </h1>
        </div>
        <div className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">Email address</label>
            <input type="email" placeholder="hello@example.com" value={email}
              onChange={(e) => setEmail(e.target.value)} autoComplete="off"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-primary-500 transition bg-white" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">Password</label>
            <div className="relative">
              <input type={show ? "text" : "password"} placeholder="••••••••••••" value={password}
                onChange={(e) => setPassword(e.target.value)} autoComplete="off"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-primary-500 transition bg-white" />
              <button type="button" onClick={() => setShow(!show)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-xs font-medium">
                {show ? "Hide" : "Show"}
              </button>
            </div>
          </div>
          {error && <p className="text-red-500 text-xs font-medium">{error}</p>}
          <div className="flex items-center gap-2">
            <input type="checkbox" id="keep" className="w-4 h-4" />
            <label htmlFor="keep" className="text-sm text-gray-600">Keep me signed in</label>
          </div>
          <button onClick={handleLogin}
            className="w-full bg-primary-500 hover:bg-primary-600 text-white font-semibold text-sm py-3 rounded-xl transition">
            Login
          </button>
          <div className="flex items-center gap-3">
            <div className="flex-1 h-px bg-gray-200" />
            <span className="text-xs text-gray-400">or sign in with</span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>
          <button className="w-full flex items-center justify-center gap-2 border border-gray-200 rounded-xl py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 transition bg-white">
            <img src="https://www.google.com/favicon.ico" className="w-4 h-4" alt="google" />
            Continue with Google
          </button>
          <p className="text-center text-sm text-gray-500">
            <a href="#" className="text-primary-500 font-medium">Create an account</a>
          </p>
        </div>
      </div>
    </div>
  )
}`)

console.log('Semua file berhasil diupdate!')