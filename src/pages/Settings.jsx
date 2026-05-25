import Card from "../components/Card"

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm text-slate-500">Settings</p>
          <h1 className="text-2xl font-semibold text-slate-900">Application settings</h1>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        <Card title="Profile settings" subtitle="Manage your administrator profile">
          <p className="text-sm text-slate-500">Update your name, email, and contact information.</p>
        </Card>
        <Card title="Security" subtitle="Change password and access rules">
          <p className="text-sm text-slate-500">Set up two-factor authentication and login preferences.</p>
        </Card>
        <Card title="Notifications" subtitle="Email and alerts">
          <p className="text-sm text-slate-500">Enable or disable notifications for dashboard activity.</p>
        </Card>
      </div>
    </div>
  )
}
