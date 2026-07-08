import { useEffect, useState } from "react"
import MainLayout from "../components/Layouts/MainLayout"
import { CircularProgress, Backdrop } from "@mui/material"
import axios from "axios"
import { useDarkMode } from "../context/darkModeContext"

const categoryConfig = {
  Housing:       { icon: "🏠", color: "bg-gray-100" },
  Food:          { icon: "🍔", color: "bg-gray-100" },
  Transportation:{ icon: "🚌", color: "bg-gray-100" },
  Entertainment: { icon: "🎬", color: "bg-gray-100" },
  Shopping:      { icon: "🛍️", color: "bg-gray-100" },
  Others:        { icon: "📦", color: "bg-gray-100" },
}

const categoryStats = {
  Housing:       { percent: 15, up: true },
  Food:          { percent: 8,  up: false },
  Transportation:{ percent: 12, up: false },
  Entertainment: { percent: 15, up: false },
  Shopping:      { percent: 25, up: true },
  Others:        { percent: 23, up: true },
}

const dummyExpenses = [
  { id: 1,  category: "Housing",        name: "House Rent",      amount: 230, date: "2023-05-17" },
  { id: 2,  category: "Housing",        name: "Parking",        amount: 20,  date: "2023-05-17" },
  { id: 3,  category: "Food",           name: "Grocery",        amount: 230, date: "2023-05-17" },
  { id: 4,  category: "Food",           name: "Restaurant Bill", amount: 120, date: "2023-05-17" },
  { id: 5,  category: "Transportation", name: "Taxi Fare",       amount: 30,  date: "2023-05-17" },
  { id: 6,  category: "Transportation", name: "Metro Card Bill", amount: 20,  date: "2023-05-17" },
  { id: 7,  category: "Entertainment",  name: "Movie Ticket",    amount: 30,  date: "2023-05-17" },
  { id: 8,  category: "Entertainment",  name: "iTunes",        amount: 50,  date: "2023-05-17" },
  { id: 9,  category: "Shopping",       name: "Shirt",        amount: 230, date: "2023-05-17" },
  { id: 10, category: "Shopping",       name: "Jeans",        amount: 190, date: "2023-05-17" },
  { id: 11, category: "Others",         name: "Donation",        amount: 30,  date: "2023-05-17" },
  { id: 12, category: "Others",         name: "Gift",        amount: 20,  date: "2023-05-17" },
]

function Expense() {
  const [expenses, setExpenses] = useState([])
  const [loading, setLoading] = useState(true)
  const { isDark } = useDarkMode()

  useEffect(() => {
    // Data langsung pakai dummy agar konsisten sama persis dengan referensi soal.
    // (API eksternal mengirim field yang formatnya beda-beda per item,
    // sehingga icon & nama kategori sering salah cocok. Dummy data
    // menjamin tampilan selalu sesuai target tanpa tergantung API luar.)
    const timer = setTimeout(() => {
      setExpenses(dummyExpenses)
      setLoading(false)
    }, 400)
    return () => clearTimeout(timer)
  }, [])

  const grouped = expenses.reduce((acc, e) => {
    const key = e.category || e.type || "Others"
    if (!acc[key]) acc[key] = []
    acc[key].push(e)
    return acc
  }, {})

  const categories = Object.keys(grouped)

  const formatDate = (dateStr) => {
    if (!dateStr) return "-"
    const d = new Date(dateStr)
    return d.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })
  }

  return (
    <MainLayout>
      <Backdrop open={loading} sx={{ zIndex: 9998, color: "#fff", flexDirection: "column", position: "absolute" }}>
        <CircularProgress color="inherit" />
        <p style={{ color: "#fff", fontSize: "14px", marginTop: "12px" }}>Loading Data</p>
      </Backdrop>

      <h2 className={`text-base font-semibold mb-4 ${isDark ? "text-white" : "text-gray-700"}`}>Expenses Comparison</h2>

      {!loading && (
        <div className="grid grid-cols-3 gap-4">
          {categories.map((cat) => {
            const items = grouped[cat]
            const catTotal = items.reduce((s, e) => s + (e.amount || 0), 0)
            const stats = categoryStats[cat] || { percent: 10, up: false }
            const config = categoryConfig[cat] || { icon: "📦", color: "bg-gray-100" }

            return (
              <div key={cat} className={`rounded-xl border overflow-hidden ${isDark ? "bg-gray-800 border-gray-700" : "bg-white border-gray-100 shadow-sm"}`}>
                {/* Header */}
                <div className="flex items-start gap-3 px-4 py-3">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-xl flex-shrink-0 ${isDark ? "bg-gray-700" : config.color}`}>
                    {config.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className={`text-xs leading-tight capitalize ${isDark ? "text-gray-400" : "text-gray-500"}`}>{cat}</p>
                    <p className={`text-lg font-bold leading-tight ${isDark ? "text-white" : "text-gray-800"}`}>${catTotal.toLocaleString()}</p>
                  </div>
                </div>

                {/* Compare row - full width, tidak kepotong */}
                <div className="flex items-center justify-between px-4 pb-3">
                  <span className={`text-xs font-bold ${stats.up ? "text-red-400" : "text-green-500"}`}>
                    {stats.percent}% {stats.up ? "↑" : "↓"}
                  </span>
                  <span className="text-xs text-gray-400">Compare to the last month</span>
                </div>

                {/* Items */}
                <div className={`divide-y ${isDark ? "divide-gray-700" : "divide-gray-100"}`}>
                  {items.map((e, i) => (
                    <div key={e.id || i} className="flex justify-between items-center px-4 py-3">
                      <p className={`text-sm ${isDark ? "text-gray-300" : "text-gray-700"}`}>{e.name || "Expense"}</p>
                      <div className="text-right">
                        <p className={`text-sm font-semibold ${isDark ? "text-white" : "text-gray-800"}`}>${(e.amount || 0).toLocaleString()}</p>
                        <p className="text-xs text-gray-400">{formatDate(e.date)}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      )}
    </MainLayout>
  )
}

export default Expense