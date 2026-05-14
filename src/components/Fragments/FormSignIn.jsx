import { Link } from "react-router-dom"
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

export default FormSignIn