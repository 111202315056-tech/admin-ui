import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom"
import SignInPage from "./pages/SignIn"
import SignUpPage from "./pages/SignUp"
import ErrorPage from "./pages/Error"
import Dashboard from "./pages/Dashboard"
import Balance from "./pages/Balance"
import Transaction from "./pages/Transaction"
import Bill from "./pages/Bill"
import Expense from "./pages/Expense"
import Goals from "./pages/Goals"
import Setting from "./pages/Setting"
import ProtectedRoute from "./components/Elements/ProtectedRoute"

function App() {
  const myRouter = createBrowserRouter([
    { path: "/", element: <Navigate to="/login" replace />, errorElement: <ErrorPage /> },
    { path: "/login", element: <SignInPage /> },
    { path: "/register", element: <SignUpPage /> },
    { path: "/dashboard", element: <ProtectedRoute><Dashboard /></ProtectedRoute> },
    { path: "/balance", element: <ProtectedRoute><Balance /></ProtectedRoute> },
    { path: "/transaction", element: <ProtectedRoute><Transaction /></ProtectedRoute> },
    { path: "/bill", element: <ProtectedRoute><Bill /></ProtectedRoute> },
    { path: "/expense", element: <ProtectedRoute><Expense /></ProtectedRoute> },
    { path: "/goals", element: <ProtectedRoute><Goals /></ProtectedRoute> },
    { path: "/setting", element: <ProtectedRoute><Setting /></ProtectedRoute> },
  ])
  return <RouterProvider router={myRouter} />
}

export default App