import { useState, useEffect } from "react"
import Card from "../Elements/Card"
import Icon from "../Elements/Icon"
import CompositionExample from "../Elements/CompositionExample"
import axios from "axios"

function CardGoal() {
  const [goals, setGoals] = useState({})

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
      <div className="p-2">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <span className="text-2xl font-bold">${goals.target_amount || 0}</span>
            <div className="p-2 bg-gray-100 text-gray-500 rounded-md">
              <Icon.Edit size={16} />
            </div>
          </div>
          <div className="text-sm text-gray-400">Nov, 2026</div>
        </div>
        <div className="border-b-2 border-gray-100 my-4"></div>
        <div className="flex justify-between">
          <div>
            <div className="flex mt-3 mb-6 text-gray-400 gap-3">
              <Icon.Award />
              <div>
                <div className="text-sm">Target Achieved</div>
                <div className="font-bold text-xl text-gray-800">${goals.present_amount || 0}</div>
              </div>
            </div>
            <div className="flex text-gray-400 gap-3">
              <Icon.Target />
              <div>
                <div className="text-sm">This Month Target</div>
                <div className="font-bold text-xl text-gray-800">${goals.target_amount || 0}</div>
              </div>
            </div>
          </div>
          <div className="text-center">
            <CompositionExample data={chartValue} />
            <div className="flex justify-between text-xs gap-4">
              <span className="text-gray-400">$0</span>
              <span className="font-bold text-lg">{Math.round(chartValue)}%</span>
              <span className="text-gray-400">${goals.target_amount || 0}</span>
            </div>
            <div className="text-xs mt-1 text-gray-400">Target vs Achievement</div>
          </div>
        </div>
      </div>
    </Card>
  )
}

export default CardGoal