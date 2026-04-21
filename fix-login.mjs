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
    if (email === "" || password === "") {
      setError("Email dan password harus diisi!")
      return
    }
    setError("")
    navigate("/dashboard")
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <div className="flex-1 hidden lg:block" />
      <div className="w-full lg:w-[520px] flex items-center justify-center p-10">
        <div className="w-full max-w-sm">
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
                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-primary-500 transition" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Password</label>
              <div className="relative">
                <input type={show ? "text" : "password"} placeholder="••••••••••••" value={password}
                  onChange={(e) => setPassword(e.target.value)} autoComplete="off"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-primary-500 transition" />
                <button type="button" onClick={() => setShow(!show)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-xs font-medium">
                  {show ? "Hide" : "Show"}
                </button>
              </div>
            </div>
            {error && <p className="text-red-500 text-xs font-medium">{error}</p>}
            <div className="flex items-center gap-2">
              <input type="checkbox" id="keep" className="w-4 h-4 accent-primary-500" />
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
            <button className="w-full flex items-center justify-center gap-2 border border-gray-200 rounded-xl py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 transition">
              <img src="https://www.google.com/favicon.ico" className="w-4 h-4" alt="google" />
              Continue with Google
            </button>
            <p className="text-center text-sm text-gray-500">
              <a href="#" className="text-primary-500 font-medium">Create an account</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}`)

console.log('Login.jsx berhasil diupdate!')