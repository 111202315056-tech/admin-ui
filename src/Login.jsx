import { useState } from "react"
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
          <h1 className="text-3xl font-extrabold text-primary font-poppins">Finebank</h1>
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
              className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-primary transition"
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
                className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-primary transition"
              />
              <button type="button" onClick={() => setShow(!show)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs">
                {show ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          {error && (
            <p className="text-red-500 text-xs font-medium">{error}</p>
          )}

          <div className="flex justify-end">
            <a href="#" className="text-sm text-primary font-medium">Forgot password?</a>
          </div>
          <button
            onClick={handleLogin}
            className="w-full bg-primary hover:opacity-90 text-white font-semibold text-sm py-2.5 rounded-lg transition">
            Sign In
          </button>
        </div>
        <p className="text-center text-sm text-gray-500 mt-6">
          Don't have an account?{" "}
          <a href="#" className="text-primary font-medium">Sign up</a>
        </p>
      </div>
    </div>
  )
}import { useState } from "react"
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
      {/* Left side - kosong */}
      <div className="flex-1 hidden lg:block" />

      {/* Right side - Form */}
      <div className="w-full lg:w-[520px] flex items-center justify-center p-10">
        <div className="w-full max-w-sm">

          {/* Logo */}
          <div className="mb-10">
            <h1 className="text-3xl font-black tracking-tight">
              <span className="text-primary-500">FINE</span>
              <span className="text-gray-800">bank</span>
              <span className="text-primary-500">.IO</span>
            </h1>
          </div>

          {/* Form Fields */}
          <div className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Email address
              </label>
              <input
                type="email"
                placeholder="hello@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="off"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Password
              </label>
              <div className="relative">
                <input
                  type={show ? "text" : "password"}
                  placeholder="••••••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="off"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition"
                />
                <button type="button" onClick={() => setShow(!show)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-xs font-medium">
                  {show ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            {error && (
              <p className="text-red-500 text-xs font-medium">{error}</p>
            )}

            {/* Keep me signed in */}
            <div className="flex items-center gap-2">
              <input type="checkbox" id="keep" className="w-4 h-4 accent-primary-500" />
              <label htmlFor="keep" className="text-sm text-gray-600">Keep me signed in</label>
            </div>

            {/* Login Button */}
            <button
              onClick={handleLogin}
              className="w-full bg-primary-500 hover:bg-primary-600 text-white font-semibold text-sm py-3 rounded-xl transition">
              Login
            </button>

            {/* Divider */}
            <div className="flex items-center gap-3">
              <div className="flex-1 h-px bg-gray-200" />
              <span className="text-xs text-gray-400">or sign in with</span>
              <div className="flex-1 h-px bg-gray-200" />
            </div>

            {/* Google Button */}
            <button className="w-full flex items-center justify-center gap-2 border border-gray-200 rounded-xl py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 transition">
              <img src="https://www.google.com/favicon.ico" className="w-4 h-4" />
              Continue with Google
            </button>

            {/* Create account */}
            <p className="text-center text-sm text-gray-500">
              <a href="#" className="text-primary-500 font-medium">Create an account</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}