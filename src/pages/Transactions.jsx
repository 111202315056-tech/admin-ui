import Card from "../components/Card"

export default function TransactionsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm text-slate-500">Transactions</p>
          <h1 className="text-2xl font-semibold text-slate-900">Transaction overview</h1>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <Card title="Monthly volume" subtitle="Total transaction value" badge="+12%">
          <p className="text-3xl font-bold text-slate-900">$48.2K</p>
          <p className="text-sm text-slate-500 mt-2">Updated today</p>
        </Card>
        <Card title="Pending" subtitle="Awaiting approval" badge="3 pending">
          <p className="text-3xl font-bold text-slate-900">$2.8K</p>
        </Card>
        <Card title="Completed" subtitle="Settled payments">
          <p className="text-3xl font-bold text-slate-900">$45.4K</p>
        </Card>
        <Card title="Failed" subtitle="Returned or declined" className="border-slate-200">
          <p className="text-3xl font-bold text-slate-900">$320</p>
        </Card>
      </div>

      <Card title="Recent transaction history" subtitle="See the latest payment activity">
        <div className="space-y-4">
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4">
            <p className="font-semibold text-slate-900">Invoice #8542</p>
            <p className="text-sm text-slate-500">Apr 23 • $1,220 • Completed</p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4">
            <p className="font-semibold text-slate-900">Subscription payment</p>
            <p className="text-sm text-slate-500">Apr 22 • $80 • Completed</p>
          </div>
        </div>
      </Card>
    </div>
  )
}
