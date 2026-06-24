import { writeFileSync } from 'fs'

// Button dengan cursor-pointer hover:scale-105
writeFileSync('src/components/Elements/Button.jsx',
`function Button(props) {
  const { children, type = "submit", variant = "primary", onClick } = props

  const baseClasses = "h-12 rounded-md text-sm w-full cursor-pointer hover:scale-105 transition-transform"
  const variantClasses = {
    primary: "bg-primary-500 text-white hover:bg-primary-600",
    secondary: "bg-gray-100 text-gray-600 hover:bg-gray-200",
  }

  const finalClasses = \`\${baseClasses} \${variantClasses[variant] || variantClasses.primary}\`

  return (
    <button className={finalClasses} type={type} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button`)

// FormSignIn dengan Formik + Yup
writeFileSync('src/components/Fragments/FormSignIn.jsx',
`import { Link, useNavigate } from "react-router-dom"
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"
import LabeledInput from "../Elements/LabeledInput"
import CheckBox from "../Elements/CheckBox"
import Button from "../Elements/Button"

const SignInSchema = Yup.object().shape({
  email: Yup.string().email("Email tidak valid").required("Email wajib diisi"),
  password: Yup.string().required("Password wajib diisi"),
})

function FormSignIn({ onSubmit }) {
  return (
    <Formik
      initialValues={{ email: "", password: "", status: false }}
      validationSchema={SignInSchema}
      onSubmit={async (values, { setSubmitting }) => {
        try {
          if (onSubmit) {
            await onSubmit(values.email, values.password)
          }
        } finally {
          setSubmitting(false)
        }
      }}
    >
      {({ isSubmitting }) => (
        <Form className="space-y-5">

          {/* EMAIL */}
          <div className="mb-6">
            <Field name="email">
              {({ field }) => (
                <LabeledInput
                  {...field}
                  id="email"
                  type="email"
                  label="Email Address"
                  placeholder="hello@example.com"
                />
              )}
            </Field>
            <ErrorMessage
              name="email"
              component="p"
              className="text-red-500 text-xs mt-1"
            />
          </div>

          {/* PASSWORD */}
          <div className="mb-6">
            <Field name="password">
              {({ field }) => (
                <LabeledInput
                  {...field}
                  id="password"
                  type="password"
                  label="Password"
                  placeholder="\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF"
                />
              )}
            </Field>
            <ErrorMessage
              name="password"
              component="p"
              className="text-red-500 text-xs mt-1"
            />
          </div>

          {/* CHECKBOX */}
          <div className="mb-3">
            <Field name="status">
              {({ field }) => (
                <CheckBox
                  {...field}
                  id="status"
                  type="checkbox"
                  checked={field.value}
                  label="Keep me signed in"
                />
              )}
            </Field>
          </div>

          {/* BUTTON */}
          <Button type="submit">
            {isSubmitting ? "Loading..." : "Login"}
          </Button>

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
            <Link to="/register" className="text-primary-500 font-medium animate-bounce inline-block">
              Create an account
            </Link>
          </p>

        </Form>
      )}
    </Formik>
  )
}

export default FormSignIn`)

// SignIn page - pass onSubmit handler
writeFileSync('src/pages/SignIn.jsx',
`import { useNavigate } from "react-router-dom"
import AuthLayout from "../components/Layouts/AuthLayout"
import FormSignIn from "../components/Fragments/FormSignIn"

function SignIn() {
  const navigate = useNavigate()

  const handleSubmit = async (email, password) => {
    console.log("Login attempt:", email, password)
    // Simulasi delay API
    await new Promise((res) => setTimeout(res, 1500))
    navigate("/dashboard")
  }

  return (
    <AuthLayout>
      <FormSignIn onSubmit={handleSubmit} />
    </AuthLayout>
  )
}

export default SignIn`)

console.log('setup-formik selesai!')
