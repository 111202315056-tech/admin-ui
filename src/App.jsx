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

function App() {
  const myRouter = createBrowserRouter([
    { path: "/", element: <Navigate to="/login" replace />, errorElement: <ErrorPage /> },
    { path: "/login", element: <SignInPage /> },
    { path: "/register", element: <SignUpPage /> },
    { path: "/dashboard", element: <Dashboard /> },
    { path: "/balance", element: <Balance /> },
    { path: "/transaction", element: <Transaction /> },
    { path: "/bill", element: <Bill /> },
    { path: "/expense", element: <Expense /> },
    { path: "/goals", element: <Goals /> },
    { path: "/setting", element: <Setting /> },
  ])

  return <RouterProvider router={myRouter} />
}

export default App