import { useState } from "react"
import MainLayout from "../components/Layouts/MainLayout"

export default function SettingsPage() {
  const [name, setName] = useState("aldi")
  const [email, setEmail] = useState("aldi@example.com")
  const [notifications, setNotifications] = useState(true)
  const [saved, setSaved] = useState(false)

  const handleSave = () => {
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  return (
    <MainLayout>
      <div className="max-w-2xl space-y-4">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h2 className="text-base font-bold text-gray-800 mb-4">Profile</h2>
          <div className="space-y-4">
            <div>
              <label className="text-xs text-gray-400 mb-1 block">Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-teal-500"
              />
            </div>
            <div>
              <label className="text-xs text-gray-400 mb-1 block">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-teal-500"
              />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h2 className="text-base font-bold text-gray-800 mb-4">Preferences</h2>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">Enable Notifications</span>
            <button
              onClick={() => setNotifications(!notifications)}
              className={`w-12 h-6 rounded-full transition-colors ${notifications ? "bg-teal-500" : "bg-gray-300"}`}
            >
              <div className={`w-5 h-5 bg-white rounded-full shadow transition-transform mx-0.5 ${notifications ? "translate-x-6" : "translate-x-0"}`} />
            </button>
          </div>
        </div>

        <button
          onClick={handleSave}
          className="bg-teal-500 hover:bg-teal-600 text-white font-semibold px-6 py-3 rounded-lg transition"
        >
          {saved ? "Saved! ✓" : "Save Changes"}
        </button>
      </div>
    </MainLayout>
  )
}