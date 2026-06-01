import MainLayout from "../components/Layouts/MainLayout"
import { useState } from "react"

const allTransactions = [
  { id: 1, name: "GTR 5", category: "Gadget & Gear", amount: 160, date: "2023-05-17", type: "expense" },
  { id: 2, name: "Polo Shirt", category: "XL Fashions", amount: 20, date: "2023-05-17", type: "expense" },
  { id: 3, name: "Biriyani", category: "Hajir Biriyani", amount: 12, date: "2023-05-17", type: "expense" },
  { id: 4, name: "Movie Ticket", category: "Inox", amount: 15, date: "2023-05-17", type: "expense" },
  { id: 5, name: "Taxi Fare", category: "Uber", amount: 10, date: "2023-05-17", type: "expense" },
  { id: 6, name: "Pizza", category: "Pizza Hut", amount: 20, date: "2023-05-17", type: "expense" },
  { id: 7, name: "Keyboard", category: "Gadget & Gear", amount: 30, date: "2023-05-17", type: "expense" },
  { id: 8, name: "Project Fee", category: "Landing Page", amount: 100, date: "2023-05-17", type: "revenue" },
  { id: 9, name: "Freelance", category: "Web Design", amount: 250, date: "2023-05-18", type: "revenue" },
  { id: 10, name: "Netflix", category: "Entertainment", amount: 15, date: "2023-05-18", type: "expense" },
]

function Transaction() {
  const [filter, setFilter] = useState("all")

  const filtered = allTransactions.filter(t =>
    filter === "all" ? true : t.type === filter
  )

  return (
    <MainLayout>
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-bold text-gray-800">Transactions</h2>
          <div className="flex gap-2">
            {["all", "revenue", "expense"].map(f => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-1.5 rounded-lg text-sm font-medium capitalize transition ${
                  filter === f ? "bg-teal-500 text-white" : "bg-gray-100 text-gray-600 hover:bg-teal-50"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <table className="w-full">
          <thead>
            <tr className="text-left text-xs text-gray-400 border-b border-gray-100">
              <th className="pb-3">Name</th>
              <th className="pb-3">Category</th>
              <th className="pb-3">Date</th>
              <th className="pb-3">Type</th>
              <th className="pb-3 text-right">Amount</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map(t => (
              <tr key={t.id} className="border-b border-gray-50 hover:bg-gray-50">
                <td className="py-3 text-sm font-medium text-gray-700">{t.name}</td>
                <td className="py-3 text-sm text-gray-400">{t.category}</td>
                <td className="py-3 text-sm text-gray-400">{t.date}</td>
                <td className="py-3">
                  <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                    t.type === "revenue" ? "bg-green-100 text-green-600" : "bg-red-100 text-red-500"
                  }`}>
                    {t.type}
                  </span>
                </td>
                <td className="py-3 text-sm font-semibold text-right">
                  <span className={t.type === "revenue" ? "text-green-500" : "text-red-400"}>
                    {t.type === "revenue" ? "+" : "-"}${t.amount}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </MainLayout>
  )
}

export default Transaction