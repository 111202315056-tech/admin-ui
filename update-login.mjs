import { writeFileSync } from 'fs'

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
    console.log("email:", email)
    console.log("password:", password)
    if (email === "" || password === "") {
      setError("Email dan password harus diisi!")
      return
    }
    setError("")
    navigate("/dashboard")
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-md w-full max-w-md p-8">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-extrabold text-primary-500">Finebank</h1>
          <p className="text-gray-500 text-sm mt-1">Financial Management Dashboard</p>
        </div>
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Welcome back 👋</h2>
          <p className="text-gray-500 text-sm mt-1">Please enter your details to sign in</p>
        </div>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="off"
              className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-primary-500 transition"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <div className="relative">
              <input
                type={show ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="off"
                className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-primary-500 transition"
              />
              <button type="button" onClick={() => setShow(!show)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs">
                {show ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          {\`\${error}\` && error !== "" && (
            <p className="text-red-500 text-xs font-medium">{error}</p>
          )}

          <div className="flex justify-end">
            <a href="#" className="text-sm text-primary-500 font-medium">Forgot password?</a>
          </div>
          <button
            onClick={handleLogin}
            className="w-full bg-primary-500 hover:opacity-90 text-white font-semibold text-sm py-2.5 rounded-lg transition">
            Sign In
          </button>
        </div>
        <p className="text-center text-sm text-gray-500 mt-6">
          Don't have an account?{" "}
          <a href="#" className="text-primary-500 font-medium">Sign up</a>
        </p>
      </div>
    </div>
  )
}`)

console.log('Login.jsx berhasil diupdate!')