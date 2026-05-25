import SignInPage from "./pages/SignIn"
import SignUpPage from "./pages/SignUp"
import ErrorPage from "./pages/Error"
import Balance from "./pages/Balance"
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
    {
      path: "/balance",
      element: <Balance />,
    },
  ])

  return (
    <>
      <RouterProvider router={myRouter} />
    </>
  )
}

export default App