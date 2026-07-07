import { useEffect, useState } from "react"
import MainLayout from "../components/Layouts/MainLayout"
import { CircularProgress } from "@mui/material"
import axios from "axios"

function Expense() {
  const [expenses, setExpenses] = useState([])
  const [loading, setLoading] = useState(true)

  const colors = [
    "bg-teal-500", "bg-blue-400", "bg-yellow-400",
    "bg-red-400", "bg-purple-400", "bg-pink-400", "bg-orange-400"
  ]

  useEffect(() => {
    const fetchExpenses = async () => {
      try {
        const token = localStorage.getItem("token")
        const response = await axios.get(
          "https://jwt-auth-eight-neon.vercel.app/expenses",
          { headers: { Authorization: `Bearer ${token}` } }
        )
        setExpenses(response.data)
      } catch (error) {
        console.error("Gagal mengambil data expenses:", error)
      } finally {
        setLoading(false)
      }
    }
    fetchExpenses()
  }, [])

  const totalAmount = expenses.reduce((sum, e) => sum + e.amount, 0)
  const highest = expenses.reduce((max, e) => e.amount > (max?.amount || 0) ? e : max, null)

  return (
    <MainLayout>
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {[
          {
            label: "Total Expense",
            value: loading ? "..." : `$${totalAmount.toLocaleString()}`,
            sub: "This month",
          },
          {
            label: "Highest Category",
            value: loading ? "..." : (highest?.category || "-"),
            sub: loading ? "..." : `$${highest?.amount} (${highest ? Math.round((highest.amount / totalAmount) * 100) : 0}%)`,
          },
          {
            label: "Total Transactions",
            value: loading ? "..." : expenses.length,
            sub: "Recorded expenses",
          },
        ].map((card) => (
          <div key={card.label} className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
            <p className="text-xs text-gray-400 mb-1">{card.label}</p>
            <p className="text-xl font-bold text-gray-800">{card.value}</p>
            <p className="text-xs text-gray-400 mt-1">{card.sub}</p>
          </div>
        ))}
      </div>

      {/* Expense List */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <h3 className="text-sm font-semibold text-gray-700 mb-4">Expense List</h3>

        {loading ? (
          <div className="flex justify-center items-center py-16">
            <CircularProgress size={32} style={{ color: "#299D91" }} />
          </div>
        ) : expenses.length === 0 ? (
          <p className="text-center text-sm text-gray-400 py-10">Tidak ada data expenses.</p>
        ) : (
          <div className="space-y-3">
            {expenses.map((e, i) => (
              <div
                key={e.id || i}
                className="flex items-center justify-between p-4 rounded-xl border border-gray-100 hover:bg-gray-50 transition"
              >
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full ${colors[i % colors.length]} flex items-center justify-center text-white font-bold text-sm`}>
                    {(e.category || e.name || "E").charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-800">{e.category || e.name || "Expense"}</p>
                    <p className="text-xs text-gray-400">{e.date || e.createdAt || "-"}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-semibold text-gray-800">${e.amount?.toLocaleString()}</p>
                  {e.description && (
                    <p className="text-xs text-gray-400">{e.description}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </MainLayout>
  )
}

export default Expense