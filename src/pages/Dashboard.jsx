import { useMemo, useState } from "react"
import Card from "../components/Card"
import SearchBox from "../components/SearchBox"

export default function Dashboard() {
  const [query, setQuery] = useState("")

  const stats = useMemo(
    () => [
      { label: "Total Balance", value: "$24,563.00", change: "+2.5%", color: "bg-primary-500" },
      { label: "Monthly Income", value: "$8,350.00", change: "+1.2%", color: "bg-emerald-500" },
      { label: "Monthly Expense", value: "$3,120.00", change: "-0.8%", color: "bg-red-500" },
      { label: "Savings", value: "$5,230.00", change: "+4.1%", color: "bg-amber-500" },
    ],
    [],
  )

  const transactions = useMemo(
    () => [
      { desc: "Netflix Subscription", date: "Apr 12, 2026", amount: "-$15.00", status: "Completed" },
      { desc: "Salary Deposit", date: "Apr 10, 2026", amount: "+$8,350.00", status: "Completed" },
      { desc: "Grocery Store", date: "Apr 9, 2026", amount: "-$120.50", status: "Completed" },
      { desc: "Electric Bill", date: "Apr 8, 2026", amount: "-$85.00", status: "Pending" },
    ],
    [],
  )

  const filteredTransactions = useMemo(
    () =>
      transactions.filter((item) => item.desc.toLowerCase().includes(query.toLowerCase())),
    [query, transactions],
  )

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-sm text-slate-500">Overview</p>
          <h1 className="text-3xl font-semibold text-slate-900">Welcome back, Admin 👋</h1>
        </div>

        <SearchBox value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search transactions" />
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className={`inline-flex h-11 w-11 items-center justify-center rounded-2xl ${stat.color} text-white`} />
            <p className="mt-6 text-sm text-slate-500">{stat.label}</p>
            <p className="mt-2 text-3xl font-semibold text-slate-900">{stat.value}</p>
            <p className="mt-3 text-sm font-medium text-slate-600">{stat.change} this month</p>
          </div>
        ))}
      </div>

      <div className="grid gap-6 xl:grid-cols-[2fr_1fr]">
        <Card title="Recent Transactions" subtitle="Latest activity in your account">
          <div className="overflow-hidden rounded-3xl border border-slate-200">
            <table className="min-w-full text-left text-sm">
              <thead className="bg-slate-50 text-slate-500">
                <tr>
                  <th className="px-6 py-4">Description</th>
                  <th className="px-6 py-4">Date</th>
                  <th className="px-6 py-4">Amount</th>
                  <th className="px-6 py-4">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-white">
                {filteredTransactions.map((tx, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 text-slate-700 font-medium">{tx.desc}</td>
                    <td className="px-6 py-4 text-slate-500">{tx.date}</td>
                    <td className={`px-6 py-4 font-semibold ${tx.amount.startsWith("+") ? "text-emerald-500" : "text-red-500"}`}>
                      {tx.amount}
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex rounded-full px-3 py-1 text-xs font-medium ${
                        tx.status === "Completed" ? "bg-emerald-100 text-emerald-700" : "bg-amber-100 text-amber-700"
                      }`}>
                        {tx.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        <div className="grid gap-6">
          <Card title="Upcoming bills" subtitle="Expected payments this month">
            <div className="space-y-4">
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4">
                <p className="font-semibold text-slate-900">Electric bill</p>
                <p className="text-sm text-slate-500">Due Apr 30 • $120.50</p>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4">
                <p className="font-semibold text-slate-900">Credit card</p>
                <p className="text-sm text-slate-500">Due May 2 • $310.00</p>
              </div>
            </div>
          </Card>

          <Card title="Expenses breakdown" subtitle="Category spending this month">
            <div className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm text-slate-600">
                  <span>Groceries</span>
                  <span>$420</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-slate-200">
                  <div className="h-full w-3/5 rounded-full bg-primary-500" />
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm text-slate-600">
                  <span>Streaming</span>
                  <span>$60</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-slate-200">
                  <div className="h-full w-2/5 rounded-full bg-amber-500" />
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
