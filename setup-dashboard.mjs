import { writeFileSync } from 'fs'

writeFileSync('src/pages/Dashboard.jsx', 
import MainLayout from "../components/Layouts/MainLayout"
import Card from "../components/Elements/Card"
import { Link } from "react-router-dom"

const transactions = [
  { id: 1, name: "GTR 5", category: "Gadget & Gear", amount: 160, date: "2023-05-17", type: "expense" },
  { id: 2, name: "Polo Shirt", category: "XL Fashions", amount: 20, date: "2023-05-17", type: "expense" },
  { id: 3, name: "Biriyani", category: "Hajir Biriyani", amount: 12, date: "2023-05-17", type: "expense" },
  { id: 4, name: "Movie Ticket", category: "Inox", amount: 15, date: "2023-05-17", type: "expense" },
  { id: 5, name: "Taxi Fare", category: "Uber", amount: 10, date: "2023-05-17", type: "expense" },
  { id: 6, name: "Pizza", category: "Pizza Hut", amount: 20, date: "2023-05-17", type: "expense" },
  { id: 7, name: "Keyboard", category: "Gadget & Gear", amount: 30, date: "2023-05-17", type: "expense" },
  { id: 8, name: "Project Fee", category: "Landing Page", amount: 100, date: "2023-05-17", type: "revenue" },
]

function Dashboard() {
  return (
    <MainLayout>
      {/* Top Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
          <p className="text-xs text-gray-400 mb-1">Total Balance</p>
          <p className="text-2xl font-bold text-gray-800">,850.00</p>
          <p className="text-xs text-green-500 mt-1">+2.5% from last month</p>
        </div>
        <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
          <div className="flex justify-between items-center mb-1">
            <p className="text-xs text-gray-400">Goals</p>
            <Link to="/goals" className="text-xs text-primary-500">View all</Link>
          </div>
          <p className="text-2xl font-bold text-gray-800">,200.00</p>
          <p className="text-xs text-gray-400 mt-1">3 active goals</p>
        </div>
        <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
          <div className="flex justify-between items-center mb-1">
            <p className="text-xs text-gray-400">Upcoming Bill</p>
            <Link to="/bill" className="text-xs text-primary-500">View all</Link>
          </div>
          <p className="text-2xl font-bold text-gray-800">.00</p>
          <p className="text-xs text-red-400 mt-1">2 bills due this week</p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Recent Transactions */}
        <div className="md:col-span-1 bg-white rounded-xl p-5 shadow-sm border border-gray-100">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-sm font-semibold text-gray-700">Recent Transactions</h3>
            <Link to="/transaction" className="text-xs text-primary-500">View All</Link>
          </div>
          <div className="flex gap-3 mb-4 text-xs font-medium">
            <button className="text-primary-500 border-b-2 border-primary-500 pb-1">All</button>
            <button className="text-gray-400 pb-1">Revenue</button>
            <button className="text-gray-400 pb-1">Expense</button>
          </div>
          <div className="space-y-3">
            {transactions.map(t => (
              <div key={t.id} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center text-xs">
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="text-xs font-medium text-gray-700">{t.name}</p>
                    <p className="text-xs text-gray-400">{t.category}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className={\	ext-xs font-semibold \\}>
                    {t.type === "revenue" ? "+" : "-"}\
                  </p>
                  <p className="text-xs text-gray-400">{t.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side */}
        <div className="md:col-span-2 flex flex-col gap-4">
          {/* Statistics */}
          <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
            <h3 className="text-sm font-semibold text-gray-700 mb-4">Statistics</h3>
            <div className="flex items-end gap-2 h-32">
              {[40, 70, 50, 90, 60, 80, 45, 75, 55, 85, 65, 95].map((h, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-1">
                  <div
                    className="w-full rounded-t-sm bg-primary-500 opacity-80"
                    style={{ height: \\%\ }}
                  />
                </div>
              ))}
            </div>
            <div className="flex justify-between mt-2">
              {["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"].map(m => (
                <span key={m} className="text-xs text-gray-400 flex-1 text-center">{m}</span>
              ))}
            </div>
          </div>

          {/* Expenses Breakdown */}
          <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
            <h3 className="text-sm font-semibold text-gray-700 mb-4">Expenses Breakdown</h3>
            <div className="space-y-3">
              {[
                { label: "Food & Drink", percent: 35, color: "bg-primary-500" },
                { label: "Shopping", percent: 25, color: "bg-blue-400" },
                { label: "Transport", percent: 20, color: "bg-yellow-400" },
                { label: "Entertainment", percent: 20, color: "bg-red-400" },
              ].map(item => (
                <div key={item.label}>
                  <div className="flex justify-between text-xs text-gray-500 mb-1">
                    <span>{item.label}</span>
                    <span>{item.percent}%</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full">
                    <div className={\h-2 rounded-full \\} style={{ width: \\%\ }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}

export default Dashboard
)

console.log('Dashboard updated!')
