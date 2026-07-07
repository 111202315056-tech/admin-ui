import { useEffect, useState } from "react"
import axios from "axios"
import Card from "../Elements/Card"
import { CircularProgress } from "@mui/material"

function CardUpcomingBill() {
  const [bills, setBills] = useState([])
  const [loading, setLoading] = useState(true)

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
        <div className="flex flex-col gap-4">
          {bills.map((item) => {
            const { month, date } = formatDate(item.dueDate || item.date)
            return (
              <div key={item.id} className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className="bg-gray-100 p-2 rounded-lg text-center min-w-12">
                    <span className="text-xs text-gray-400">{month}</span>
                    <p className="text-xl font-bold">{date}</p>
                  </div>
                  <div>
                    <p className="text-sm font-bold">{item.name || item.title}</p>
                    <p className="text-xs text-gray-400">
                      Last Charge - {item.lastCharge || item.lastChargeDate || "-"}
                    </p>
                  </div>
                </div>
                <span className="py-2 px-4 border border-gray-200 rounded-lg font-bold text-sm">
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