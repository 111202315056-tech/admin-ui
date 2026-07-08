import { useState, useEffect } from "react"
import Card from "../Elements/Card"
import Icon from "../Elements/Icon"
import CompositionExample from "../Elements/CompositionExample"
import axios from "axios"
import { useDarkMode } from "../../context/darkModeContext"

function CardGoal() {
  const [goals, setGoals] = useState({})
  const { isDark } = useDarkMode()

  const fetchGoals = async () => {
    try {
      const token = localStorage.getItem("token")
      const response = await axios.get(
        "https://jwt-auth-eight-neon.vercel.app/goals",
        { headers: { Authorization: `Bearer ${token}` } }
      )
      setGoals(response.data.data[0] || {})
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchGoals()
  }, [])

  const chartValue = goals.target_amount
    ? (goals.present_amount / goals.target_amount) * 100
    : 0

  return (
    <Card title="Goals">
      <div className="p-1">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className={`text-xl font-bold ${isDark ? "text-white" : "text-gray-800"}`}>${goals.target_amount || 0}</span>
            <div className={`p-1.5 rounded-md ${isDark ? "bg-gray-700 text-gray-300" : "bg-gray-100 text-gray-500"}`}>
              <Icon.Edit size={14} />
            </div>
          </div>
          <div className="text-xs text-gray-400 whitespace-nowrap">Nov, 2026</div>
        </div>
        <div className={`border-b my-3 ${isDark ? "border-gray-700" : "border-gray-100"}`}></div>
        <div className="flex justify-between items-start gap-2">
          <div className="flex-shrink-0">
            <div className="flex items-start mb-4 text-gray-400 gap-2">
              <Icon.Award size={16} className="mt-0.5" />
              <div>
                <div className="text-xs whitespace-nowrap">Target Achieved</div>
                <div className={`font-bold text-base ${isDark ? "text-white" : "text-gray-800"}`}>${goals.present_amount || 0}</div>
              </div>
            </div>
            <div className="flex items-start text-gray-400 gap-2">
              <Icon.Target size={16} className="mt-0.5" />
              <div>
                <div className="text-xs whitespace-nowrap">This Month Target</div>
                <div className={`font-bold text-base ${isDark ? "text-white" : "text-gray-800"}`}>${goals.target_amount || 0}</div>
              </div>
            </div>
          </div>
          <div className="text-center flex-shrink-0">
            <CompositionExample data={chartValue} />
            <div className="flex justify-between text-xs gap-3">
              <span className="text-gray-400">$0</span>
              <span className={`font-bold text-sm ${isDark ? "text-white" : "text-gray-800"}`}>{Math.round(chartValue)}%</span>
              <span className="text-gray-400">${goals.target_amount || 0}</span>
            </div>
            <div className="text-xs mt-1 text-gray-400 whitespace-nowrap">Target vs Achievement</div>
          </div>
        </div>
      </div>
    </Card>
  )
}

export default CardGoal