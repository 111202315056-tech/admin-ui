export default function Dashboard() {
  const stats = [
    { label: "Total Balance", value: "$24,563.00", change: "+2.5%", color: "bg-primary-500" },
    { label: "Monthly Income", value: "$8,350.00", change: "+1.2%", color: "bg-green-500" },
    { label: "Monthly Expense", value: "$3,120.00", change: "-0.8%", color: "bg-red-500" },
    { label: "Savings", value: "$5,230.00", change: "+4.1%", color: "bg-yellow-500" },
  ]

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Welcome back, Admin 👋</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
            <div className={`w-10 h-10 rounded-lg ${stat.color} mb-3`}></div>
            <p className="text-sm text-gray-500">{stat.label}</p>
            <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
            <p className="text-xs text-green-500 mt-1">{stat.change} this month</p>
          </div>
        ))}
      </div>
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Recent Transactions</h2>
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-gray-400 border-b border-gray-100">
              <th className="pb-3">Description</th>
              <th className="pb-3">Date</th>
              <th className="pb-3">Amount</th>
              <th className="pb-3">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {[
              { desc: "Netflix Subscription", date: "Apr 12, 2026", amount: "-$15.00", status: "Completed" },
              { desc: "Salary Deposit", date: "Apr 10, 2026", amount: "+$8,350.00", status: "Completed" },
              { desc: "Grocery Store", date: "Apr 9, 2026", amount: "-$120.50", status: "Completed" },
              { desc: "Electric Bill", date: "Apr 8, 2026", amount: "-$85.00", status: "Pending" },
            ].map((tx, i) => (
              <tr key={i}>
                <td className="py-3 text-gray-700 font-medium">{tx.desc}</td>
                <td className="py-3 text-gray-400">{tx.date}</td>
                <td className={`py-3 font-semibold ${tx.amount.startsWith("+") ? "text-green-500" : "text-red-500"}`}>{tx.amount}</td>
                <td className="py-3">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${tx.status === "Completed" ? "bg-green-100 text-green-600" : "bg-yellow-100 text-yellow-600"}`}>
                    {tx.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}