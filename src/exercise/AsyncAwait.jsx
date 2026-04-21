import { useState, useEffect } from "react"

export default function AsyncAwait() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchUsers() {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users")
        const data = await res.json()
        setUsers(data.slice(0, 5))
      } catch (err) {
        setError("Gagal mengambil data")
      } finally {
        setLoading(false)
      }
    }
    fetchUsers()
  }, [])

  if (loading) return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
      <p className="text-sm text-gray-400 animate-pulse">Mengambil data...</p>
    </div>
  )

  if (error) return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-red-100">
      <p className="text-sm text-red-500">{error}</p>
    </div>
  )

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
      <h2 className="text-lg font-bold text-gray-800 mb-4">Async/Await — Fetch API</h2>
      <div className="space-y-2">
        {users.map((user) => (
          <div key={user.id} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
            <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 font-semibold text-sm">
              {user.name.charAt(0)}
            </div>
            <div>
              <p className="text-sm font-medium text-gray-800">{user.name}</p>
              <p className="text-xs text-gray-400">{user.email}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}