import Logo from "../Elements/Logo"

function AuthLayout({ children }) {
  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="w-full max-w-sm px-6">
        <Logo />
        {children}
      </div>
    </main>
  )
}

export default AuthLayout