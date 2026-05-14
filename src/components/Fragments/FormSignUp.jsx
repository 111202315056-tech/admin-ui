import { Link } from "react-router-dom"
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

export default FormSignUp