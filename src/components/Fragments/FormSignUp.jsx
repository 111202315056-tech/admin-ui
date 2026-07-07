import { Link } from "react-router-dom"
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"
import { Snackbar, Alert } from "@mui/material"
import { useState } from "react"
import LabeledInput from "../Elements/LabeledInput"
import Button from "../Elements/Button"
import axios from "axios"

const SignUpSchema = Yup.object().shape({
  name: Yup.string().required("Nama wajib diisi"),
  email: Yup.string().email("Email tidak valid").required("Email wajib diisi"),
  password: Yup.string().min(6, "Password minimal 6 karakter").required("Password wajib diisi"),
})

function FormSignUp() {
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  })

  const handleCloseSnackbar = () => {
    setSnackbar((prev) => ({ ...prev, open: false }))
  }

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      await axios.post("https://jwt-auth-eight-neon.vercel.app/register", {
        name: values.name,
        email: values.email,
        password: values.password,
      })
      setSnackbar({
        open: true,
        message: "Registrasi berhasil! Silakan login.",
        severity: "success",
      })
    } catch (error) {
      setSnackbar({
        open: true,
        message:
          error?.response?.data?.message ||
          "Registrasi gagal. Coba gunakan email yang berbeda.",
        severity: "error",
      })
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <>
      <Formik
        initialValues={{ name: "", email: "", password: "" }}
        validationSchema={SignUpSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="space-y-5">

            {/* NAME */}
            <div>
              <Field name="name">
                {({ field }) => (
                  <LabeledInput
                    {...field}
                    id="name"
                    type="text"
                    label="Name"
                    placeholder="Your Name"
                  />
                )}
              </Field>
              <ErrorMessage
                name="name"
                component="p"
                className="text-red-500 text-xs mt-1"
              />
            </div>

            {/* EMAIL */}
            <div>
              <Field name="email">
                {({ field }) => (
                  <LabeledInput
                    {...field}
                    id="email"
                    type="email"
                    label="Email address"
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
            <div>
              <Field name="password">
                {({ field }) => (
                  <LabeledInput
                    {...field}
                    id="password"
                    type="password"
                    label="Password"
                    placeholder="••••••••••••"
                  />
                )}
              </Field>
              <ErrorMessage
                name="password"
                component="p"
                className="text-red-500 text-xs mt-1"
              />
            </div>

            {/* BUTTON */}
            <Button type="submit">
              {isSubmitting ? "Loading.." : "Sign Up"}
            </Button>

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

          </Form>
        )}
      </Formik>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={4000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbar.severity}
          variant="filled"
          sx={{ width: "100%" }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </>
  )
}

export default FormSignUp