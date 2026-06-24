import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Snackbar, Alert } from "@mui/material"
import { AuthContext } from "../context/authContext"
import AuthLayout from "../components/Layouts/AuthLayout"
import FormSignIn from "../components/Fragments/FormSignIn"

function SignIn() {
  const navigate = useNavigate()
  const { login } = useContext(AuthContext)

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success", // "success" | "error"
  })

  const handleCloseSnackbar = () => {
    setSnackbar((prev) => ({ ...prev, open: false }))
  }

  const handleSubmit = async (email, password) => {
    try {
      await login(email, password)
      setSnackbar({
        open: true,
        message: "Login berhasil! Mengarahkan ke dashboard...",
        severity: "success",
      })
      // Beri waktu sebentar agar user melihat notifikasi sukses
      setTimeout(() => {
        navigate("/dashboard")
      }, 1000)
    } catch (error) {
      console.error("Login gagal:", error)
      setSnackbar({
        open: true,
        message:
          error?.response?.data?.message ||
          "Login gagal. Periksa kembali email dan password Anda.",
        severity: "error",
      })
    }
  }

  return (
    <AuthLayout>
      <FormSignIn onSubmit={handleSubmit} />

      <Snackbar
        open={snackbar.open}
        autoHideDuration={3000}
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
    </AuthLayout>
  )
}

export default SignIn