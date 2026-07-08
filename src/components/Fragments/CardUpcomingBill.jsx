import { useEffect, useState } from "react"
import axios from "axios"
import Card from "../Elements/Card"
import { CircularProgress } from "@mui/material"
import { useDarkMode } from "../../context/darkModeContext"

function CardUpcomingBill() {
  const [bills, setBills] = useState([])
  const [loading, setLoading] = useState(true)
  const { isDark } = useDarkMode()

  useEffect(() => {
    const fetchBills = async () => {
      try {
        const token = localStorage.getItem("token")
        const response = await axios.get(
          "https://jwt-auth-eight-neon.vercel.app/bills",
          { headers: { Authorization: `Bearer ${token}` } }
        )
        const result = response.data
        setBills(Array.isArray(result) ? result : result.data || result.bills || [])
      } catch (error) {
        console.error("Gagal mengambil data bills:", error)
        setBills([])
      } finally {
        setLoading(false)
      }
    }
    fetchBills()
  }, [])

  const formatDate = (dateStr) => {
    if (!dateStr) return { month: "-", date: "-" }
    const d = new Date(dateStr)
    if (isNaN(d.getTime())) return { month: "-", date: "-" }
    return {
      month: d.toLocaleString("en-US", { month: "short" }),
      date: d.getDate(),
    }
  }

  return (
    <Card title="Upcoming Bill" link="/bill">
      {loading ? (
        <div className="flex justify-center items-center py-8">
          <CircularProgress size={24} style={{ color: "#299D91" }} />
        </div>
      ) : bills.length === 0 ? (
        <p className="text-center text-xs text-gray-400 py-4">Tidak ada data.</p>
      ) : (
        <div className="flex flex-col gap-3">
          {bills.map((item) => {
            const { month, date } = formatDate(item.dueDate || item.date)
            return (
              <div key={item.id} className="flex justify-between items-center gap-2">
                <div className="flex items-center gap-2 min-w-0">
                  <div className={`p-2 rounded-lg text-center min-w-10 flex-shrink-0 ${isDark ? "bg-gray-700" : "bg-gray-100"}`}>
                    <span className="text-xs text-gray-400">{month}</span>
                    <p className={`text-base font-bold ${isDark ? "text-white" : "text-gray-800"}`}>{date}</p>
                  </div>
                  <div className="min-w-0">
                    <p className={`text-sm font-bold truncate ${isDark ? "text-white" : "text-gray-800"}`}>{item.name || item.title}</p>
                    <p className="text-xs text-gray-400 truncate">
                      Last Charge - {item.lastCharge || item.lastChargeDate || "-"}
                    </p>
                  </div>
                </div>
                <span className={`py-1.5 px-3 border rounded-lg font-bold text-xs whitespace-nowrap ${isDark ? "border-gray-600 text-white" : "border-gray-200 text-gray-800"}`}>
                  ${item.amount}
                </span>
              </div>
            )
          })}
        </div>
      )}
    </Card>
  )
}

export default CardUpcomingBill