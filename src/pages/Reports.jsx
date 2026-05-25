import Card from "../components/Card"

export default function ReportsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm text-slate-500">Reports</p>
          <h1 className="text-2xl font-semibold text-slate-900">Reports and analytics</h1>
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        <Card title="Revenue" subtitle="This quarter" badge="+18%">
          <p className="text-3xl font-bold text-slate-900">$136K</p>
        </Card>
        <Card title="Expenses" subtitle="This quarter">
          <p className="text-3xl font-bold text-slate-900">$82K</p>
        </Card>
        <Card title="Profit" subtitle="Net results">
          <p className="text-3xl font-bold text-slate-900">$54K</p>
        </Card>
      </div>

      <Card title="Report summary" subtitle="Monthly performance overview">
        <p className="text-sm text-slate-500">Graphs and charts are coming soon. Use this space to display key metrics for revenue, customers, and cash flow.</p>
      </Card>
    </div>
  )
}
