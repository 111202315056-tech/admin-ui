import { useRouteError } from "react-router-dom"

function ErrorPage() {
  const error = useRouteError()
  return (
    <div className="flex justify-center min-h-screen items-center bg-gray-50 flex-col">
      <h1 className="text-3xl font-black mb-2">
        <span className="text-primary-500">FINE</span>bank<span className="text-primary-500">.IO</span>
      </h1>
      <h2 className="text-2xl font-bold mt-3 mb-1">Sorry,</h2>
      <p className="text-gray-500">{error.status} | {error.statusText || error.message}</p>
    </div>
  )
}

export default ErrorPage