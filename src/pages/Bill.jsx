import MainLayout from "../components/Layouts/MainLayout"

const bills = [
  { id: 1, name: "Figma", plan: "Yearly Plan", amount: 150, due: "May 15", logo: "F", color: "bg-purple-100 text-purple-600" },
  { id: 2, name: "Adobe", plan: "Yearly Plan", amount: 559, due: "Jun 16", logo: "A", color: "bg-red-100 text-red-600" },
  { id: 3, name: "Netflix", plan: "Monthly Plan", amount: 15, due: "Jun 1", logo: "N", color: "bg-red-100 text-red-500" },
  { id: 4, name: "Spotify", plan: "Monthly Plan", amount: 10, due: "Jun 5", logo: "S", color: "bg-green-100 text-green-600" },
  { id: 5, name: "AWS", plan: "Monthly Plan", amount: 45, due: "Jun 10", logo: "W", color: "bg-yellow-100 text-yellow-600" },
]

function Bill() {
  return (
    <MainLayout>
      <div className="grid grid-cols-3 gap-4 mb-6">
        {[
          { label: "Total Bills", value: "$779", sub: "5 active bills" },
          { label: "Due This Week", value: "$150", sub: "1 bill due" },
          { label: "Paid This Month", value: "$25", sub: "2 bills paid" },
        ].map(card => (
          <div key={card.label} className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
            <p className="text-xs text-gray-400 mb-1">{card.label}</p>
            <p className="text-2xl font-bold text-gray-800">{card.value}</p>
            <p className="text-xs text-gray-400 mt-1">{card.sub}</p>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <h3 className="text-sm font-semibold text-gray-700 mb-4">Upcoming Bills</h3>
        <div className="space-y-3">
          {bills.map(bill => (
            <div key={bill.id} className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold text-sm ${bill.color}`}>
                  {bill.logo}
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-700">{bill.name}</p>
                  <p className="text-xs text-gray-400">{bill.plan}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm font-bold text-gray-800">${bill.amount}</p>
                <p className="text-xs text-gray-400">Due {bill.due}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  )
}

export default Bill