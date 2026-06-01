import MainLayout from "../components/Layouts/MainLayout"

const expenses = [
  { label: "Food & Drink", amount: 350, percent: 35, color: "bg-teal-500" },
  { label: "Shopping", amount: 250, percent: 25, color: "bg-blue-400" },
  { label: "Transport", amount: 200, percent: 20, color: "bg-yellow-400" },
  { label: "Entertainment", amount: 120, percent: 12, color: "bg-red-400" },
  { label: "Housing", amount: 80, percent: 8, color: "bg-purple-400" },
]

function Expense() {
  return (
    <MainLayout>
      <div className="grid grid-cols-3 gap-4 mb-6">
        {[
          { label: "Total Expense", value: "$1,000", sub: "This month" },
          { label: "Highest Category", value: "Food & Drink", sub: "$350 (35%)" },
          { label: "vs Last Month", value: "-12%", sub: "You spent less" },
        ].map(card => (
          <div key={card.label} className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
            <p className="text-xs text-gray-400 mb-1">{card.label}</p>
            <p className="text-xl font-bold text-gray-800">{card.value}</p>
            <p className="text-xs text-gray-400 mt-1">{card.sub}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-sm font-semibold text-gray-700 mb-4">Breakdown by Category</h3>
          <div className="space-y-4">
            {expenses.map(e => (
              <div key={e.label}>
                <div className="flex justify-between text-xs text-gray-500 mb-1">
                  <span>{e.label}</span>
                  <span>${e.amount} ({e.percent}%)</span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full">
                  <div className={`${e.color} h-2 rounded-full`} style={{ width: e.percent + "%" }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-sm font-semibold text-gray-700 mb-4">Monthly Trend</h3>
          <div className="flex items-end gap-2 h-40">
            {[60, 80, 50, 90, 70, 85, 65, 75, 55, 80, 70, 100].map((h, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-1">
                <div className="w-full bg-teal-500 rounded-t-sm" style={{ height: h + "%" }} />
                <span className="text-xs text-gray-400">
                  {["J","F","M","A","M","J","J","A","S","O","N","D"][i]}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  )
}

export default Expense