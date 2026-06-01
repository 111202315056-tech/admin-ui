import MainLayout from "../components/Layouts/MainLayout"

const cards = [
  { id: 1, type: "Credit Card", number: "3388 4556 8860 80000", balance: 25000, color: "from-teal-500 to-teal-700" },
  { id: 2, type: "Debit Card", number: "5512 3344 5566 7788", balance: 8500, color: "from-blue-500 to-blue-700" },
  { id: 3, type: "Savings", number: "9901 2233 4455 6677", balance: 42000, color: "from-purple-500 to-purple-700" },
]

const history = [
  { id: 1, label: "Top Up", amount: 500, date: "2023-05-17", type: "revenue" },
  { id: 2, label: "Transfer Out", amount: 200, date: "2023-05-16", type: "expense" },
  { id: 3, label: "Received", amount: 1000, date: "2023-05-15", type: "revenue" },
  { id: 4, label: "Withdrawal", amount: 150, date: "2023-05-14", type: "expense" },
  { id: 5, label: "Top Up", amount: 300, date: "2023-05-13", type: "revenue" },
]

function Balance() {
  return (
    <MainLayout>
      <div className="grid grid-cols-3 gap-4 mb-6">
        {cards.map(card => (
          <div key={card.id} className={`bg-gradient-to-br ${card.color} rounded-xl p-5 text-white`}>
            <p className="text-xs opacity-70 mb-1">{card.type}</p>
            <p className="text-2xl font-bold mb-4">${card.balance.toLocaleString()}</p>
            <p className="text-xs opacity-70 tracking-widest">{card.number}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
          <h3 className="text-sm font-semibold text-gray-700 mb-4">Balance History</h3>
          <div className="space-y-3">
            {history.map(h => (
              <div key={h.id} className="flex justify-between items-center">
                <div>
                  <p className="text-sm font-medium text-gray-700">{h.label}</p>
                  <p className="text-xs text-gray-400">{h.date}</p>
                </div>
                <span className={`text-sm font-semibold ${h.type === "revenue" ? "text-green-500" : "text-red-400"}`}>
                  {h.type === "revenue" ? "+" : "-"}${h.amount}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
          <h3 className="text-sm font-semibold text-gray-700 mb-4">Summary</h3>
          <div className="space-y-4">
            {[
              { label: "Total Income", value: "$12,500", color: "text-green-500" },
              { label: "Total Expense", value: "$7,650", color: "text-red-400" },
              { label: "Net Balance", value: "$4,850", color: "text-teal-500" },
            ].map(item => (
              <div key={item.label} className="flex justify-between items-center border-b border-gray-50 pb-3">
                <p className="text-sm text-gray-500">{item.label}</p>
                <p className={`text-sm font-bold ${item.color}`}>{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  )
}

export default Balance