import { writeFileSync } from 'fs'

// App.jsx dengan createBrowserRouter
writeFileSync('src/App.jsx',
`import SignInPage from "./pages/SignIn"
import SignUpPage from "./pages/SignUp"
import ErrorPage from "./pages/Error"
import { createBrowserRouter, RouterProvider, Link } from "react-router-dom"

function App() {
  const myRouter = createBrowserRouter([
    {
      path: "/",
      element: (
        <div className="flex justify-center items-center min-h-screen">
          <Link to="/login" className="p-2 m-5 bg-primary-500 text-white rounded">
            Login
          </Link>
          |
          <Link to="/register" className="p-2 m-5 bg-primary-500 text-white rounded">
            Register
          </Link>
        </div>
      ),
      errorElement: <ErrorPage />,
    },
    {
      path: "/login",
      element: <SignInPage />,
    },
    {
      path: "/register",
      element: <SignUpPage />,
    },
  ])

  return (
    <>
      <RouterProvider router={myRouter} />
    </>
  )
}

export default App`)

// Error page
writeFileSync('src/pages/Error.jsx',
`import React from "react"
import { useRouteError } from "react-router-dom"
import Logo from "../components/Elements/Logo"

function ErrorPage() {
  const error = useRouteError()

  return (
    <div className="flex justify-center min-h-screen items-center bg-gray-50 flex-col">
      <Logo />
      <h1 className="text-2xl font-bold mt-3 mb-1">Sorry,</h1>
      <p className="text-gray-500">
        {error.status} | {error.statusText || error.message}
      </p>
    </div>
  )
}

export default ErrorPage`)

// FormSignIn dengan Link
writeFileSync('src/components/Fragments/FormSignIn.jsx',
`import { Link } from "react-router-dom"
import LabeledInput from "../Elements/LabeledInput"
import CheckBox from "../Elements/CheckBox"
import Button from "../Elements/Button"

function FormSignIn() {
  return (
    <form className="space-y-5">
      <LabeledInput
        label="Email address"
        type="email"
        name="email"
        placeholder="hello@example.com"
      />
      <LabeledInput
        label="Password"
        type="password"
        name="password"
        placeholder="••••••••••••"
      />
      <CheckBox label="Keep me signed in" name="remember" />
      <Button>Login</Button>
      <div className="flex items-center gap-3">
        <div className="flex-1 h-px bg-gray-200" />
        <span className="text-xs text-gray-400">or sign in with</span>
        <div className="flex-1 h-px bg-gray-200" />
      </div>
      <Button type="button" variant="secondary">
        <span className="flex items-center justify-center gap-2">
          <img src="https://www.google.com/favicon.ico" className="w-4 h-4" alt="google" />
          Continue with Google
        </span>
      </Button>
      <p className="text-center text-sm text-gray-500">
        <Link to="/register" className="text-primary-500 font-medium">
          Create an account
        </Link>
      </p>
    </form>
  )
}

export default FormSignIn`)

// FormSignUp dengan Link
writeFileSync('src/components/Fragments/FormSignUp.jsx',
`import { Link } from "react-router-dom"
import LabeledInput from "../Elements/LabeledInput"
import Button from "../Elements/Button"

function FormSignUp() {
  return (
    <form className="space-y-5">
      <LabeledInput label="Name" type="text" name="name" placeholder="Your Name" />
      <LabeledInput label="Email address" type="email" name="email" placeholder="hello@example.com" />
      <LabeledInput label="Password" type="password" name="password" placeholder="••••••••••••" />
      <Button>Sign Up</Button>
      <div className="flex items-center gap-3">
        <div className="flex-1 h-px bg-gray-200" />
        <span className="text-xs text-gray-400">or sign up with</span>
        <div className="flex-1 h-px bg-gray-200" />
      </div>
      <Button type="button" variant="secondary">
        <span className="flex items-center justify-center gap-2">
          <img src="https://www.google.com/favicon.ico" className="w-4 h-4" alt="google" />
          Continue with Google
        </span>
      </Button>
      <p className="text-center text-sm text-gray-500">
        Already have an account?{" "}
        <Link to="/login" className="text-primary-500 font-medium">
          Sign In Here
        </Link>
      </p>
    </form>
  )
}

export default FormSignUp`)

// vercel.json
writeFileSync('vercel.json',
`{
  "rewrites": [{ "source": "/(.*)", "destination": "/" }]
}`)

console.log('setup-router selesai!')