import Card from "../components/Card"

export default function AccountsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm text-slate-500">Accounts</p>
          <h1 className="text-2xl font-semibold text-slate-900">Account management</h1>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        <Card title="Main checking" subtitle="Active account">
          <p className="text-3xl font-bold text-slate-900">$12,840</p>
          <p className="text-sm text-slate-500 mt-2">Account #4352</p>
        </Card>
        <Card title="Savings" subtitle="Available balance">
          <p className="text-3xl font-bold text-slate-900">$24,150</p>
          <p className="text-sm text-slate-500 mt-2">Account #1290</p>
        </Card>
        <Card title="Credit" subtitle="Current limit">
          <p className="text-3xl font-bold text-slate-900">$8,500</p>
          <p className="text-sm text-slate-500 mt-2">Limit used 32%</p>
        </Card>
      </div>
    </div>
  )
}
