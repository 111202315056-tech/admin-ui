import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [show, setShow] = useState(false)
  const [keep, setKeep] = useState(false)
  const navigate = useNavigate()

  const handleLogin = () => {
    navigate("/dashboard")
  }

  return (
    <main className="min-h-screen bg-special-mainBg flex justify-center items-center">
      {/* container start */}
      <div className="w-full max-w-sm">

        {/* logo start */}
        <div className="flex justify-center font-poppins tracking-wide text-primary text-4xl">
          <span className="font-bold">FINE</span>
          bank
          <span className="font-bold">.IO</span>
        </div>
        {/* logo end */}

        {/* form start */}
        <div className="mt-16">
          <form>
            <div className="mb-6">
              <label htmlFor="email" className="block text-sm text-gray-01 mb-2">
                Email address
              </label>
              <input
                type="email"
                className="text-sm rounded-md w-full bg-special-mainBg border border-gray-03 text-gray-01 py-3 pl-4 focus:border-black focus:outline-none focus:ring-0"
                placeholder="hello@example.com"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-sm text-gray-01 mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type={show ? "text" : "password"}
                  className="text-sm rounded-md w-full bg-special-mainBg border border-gray-03 text-gray-01 py-3 pl-4 focus:border-black focus:outline-none focus:ring-0"
                  placeholder="************"
                  name="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  onClick={() => setShow(!show)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-03 text-xs">
                  {show ? "Hide" : "Show"}
                </button>
              </div>
            </div>
            <div className="mb-3">
              <input
                type="checkbox"
                className="accent-primary"
                name="status"
                id="status"
                checked={keep}
                onChange={(e) => setKeep(e.target.checked)}
              />
              <label htmlFor="status" className="text-sm text-gray-01 ml-6">
                Keep me signed in
              </label>
            </div>
            <button
              onClick={handleLogin}
              className="rounded-md text-sm bg-primary w-full text-white h-12"
              type="button"
            >
              Login
            </button>
          </form>
        </div>
        {/* form end */}

        {/* teks start */}
        <div className="flex flex-col justify-center items-center text-xs text-gray-03 my-9 px-7">
          <div className="border border-gray-05 w-full"></div>
          <div className="bg-special-mainBg absolute px-2">or sign in with</div>
        </div>
        {/* teks end */}

        {/* sign in with google start */}
        <div className="mb-8">
          <button
            className="flex items-center justify-center rounded-md text-sm w-full bg-gray-05 text-gray-01 h-12"
            type="button"
          >
            <svg className="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="-0.5 0 48 48">
              <g fill="none" fillRule="evenodd">
                <g transform="translate(-401 -860)">
                  <g transform="translate(401 860)">
                    <path d="M9.827,24c0-1.524.253-2.986.705-4.356L2.623,13.604C1.082,16.734.214,20.26.214,24s.867,7.261 2.41,10.388L10.525,28.337C10.077,26.973 9.827,25.517 9.827,24" fill="#FBBC05"/>
                    <path d="M23.714,10.133c3.311,0 6.302,1.173 8.652,3.093L39.202,6.4C35.036,2.773 29.695.533 23.714.533 14.427.533 6.445,5.844 2.623,13.604l7.909,6.04C12.355,14.112 17.549,10.133 23.714,10.133" fill="#EB4335"/>
                    <path d="M23.714,37.867c-6.165,0-11.359-3.979-13.182-9.511L2.623,34.395C6.445,42.156 14.427,47.467 23.714,47.467c5.732,0 11.204-2.035 15.311-5.849L31.518,35.814C29.4,37.149 26.732,37.867 23.714,37.867" fill="#34A853"/>
                    <path d="M46.145,24c0-1.387-.213-2.88-.534-4.267H23.714v9.067h12.604c-.63,3.091-2.346,5.468-4.8,7.014l7.507,5.804C43.339,37.614 46.145,31.649 46.145,24" fill="#4285F4"/>
                  </g>
                </g>
              </g>
            </svg>
            <span>Continue with Google</span>
          </button>
        </div>
        {/* sign in with google end */}

        {/* link start */}
        <div className="flex justify-center">
          <a className="text-primary text-sm font-bold cursor-pointer">Create an account</a>
        </div>
        {/* link end */}

      </div>
      {/* container end */}
    </main>
  )
}