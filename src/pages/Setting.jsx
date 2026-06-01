import MainLayout from "../components/Layouts/MainLayout"
import { useState } from "react"

function Setting() {
  const [name, setName] = useState("Username")
  const [email, setEmail] = useState("user@example.com")
  const [notif, setNotif] = useState(true)
  const [toast, setToast] = useState(null)

  const handleSave = () => {
    setToast({ type: "success", message: "Changes Saved!", sub: "Your profile has been updated." })
    setTimeout(() => setToast(null), 3000)
  }

  const handleToggleNotif = () => {
    const next = !notif
    setNotif(next)
    setToast({
      type: next ? "success" : "info",
      message: next ? "Notifications Enabled" : "Notifications Disabled",
      sub: next ? "You will receive notifications." : "You won't receive notifications.",
    })
    setTimeout(() => setToast(null), 3000)
  }

  return (
    <MainLayout>
      {/* Toast Notification */}
      {toast && (
        <div className={`fixed top-6 right-6 z-50 flex items-center gap-3 text-white px-5 py-3 rounded-xl shadow-lg transition-all ${toast.type === "success" ? "bg-teal-500" : "bg-gray-600"}`}>
          <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
            {toast.type === "success" ? (
              <>
                <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="1.5"/>
                <path d="M8 12l3 3 5-5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </>
            ) : (
              <>
                <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="1.5"/>
                <path d="M12 8v4M12 16h.01" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
              </>
            )}
          </svg>
          <div>
            <p className="text-sm font-bold">{toast.message}</p>
            <p className="text-xs opacity-80">{toast.sub}</p>
          </div>
          <button onClick={() => setToast(null)} className="ml-2 opacity-70 hover:opacity-100 text-lg leading-none">×</button>
        </div>
      )}

      <div className="max-w-xl">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 mb-4">
          <h3 className="text-sm font-semibold text-gray-700 mb-4">Profile</h3>
          <div className="space-y-4">
            <div>
              <label className="text-xs text-gray-400 mb-1 block">Name</label>
              <input
                value={name}
                onChange={e => setName(e.target.value)}
                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-teal-500"
              />
            </div>
            <div>
              <label className="text-xs text-gray-400 mb-1 block">Email</label>
              <input
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-teal-500"
              />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 mb-4">
          <h3 className="text-sm font-semibold text-gray-700 mb-4">Preferences</h3>
          <div className="flex justify-between items-center">
            <p className="text-sm text-gray-600">Enable Notifications</p>
            <button
              onClick={handleToggleNotif}
              className={`w-12 h-6 rounded-full transition ${notif ? "bg-teal-500" : "bg-gray-200"}`}
            >
              <div className={`w-5 h-5 bg-white rounded-full shadow transition-transform mx-0.5 ${notif ? "translate-x-6" : ""}`} />
            </button>
          </div>
        </div>
        <button
          onClick={handleSave}
          className="bg-teal-500 text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-teal-600 transition"
        >
          Save Changes
        </button>
      </div>
    </MainLayout>
  )
}

export default Setting