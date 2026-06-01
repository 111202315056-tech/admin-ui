import MainLayout from "../components/Layouts/MainLayout"

const goals = [
  { id: 1, name: "New Laptop", target: 1500, saved: 900, color: "bg-teal-500" },
  { id: 2, name: "Vacation", target: 3000, saved: 1200, color: "bg-blue-400" },
  { id: 3, name: "Emergency Fund", target: 5000, saved: 4200, color: "bg-purple-400" },
]

function Goals() {
  return (
    <MainLayout>
      <div className="grid grid-cols-3 gap-4 mb-6">
        {goals.map(g => (
          <div key={g.id} className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
            <p className="text-sm font-semibold text-gray-700 mb-1">{g.name}</p>
            <p className="text-2xl font-bold text-gray-800">${g.saved.toLocaleString()}</p>
            <p className="text-xs text-gray-400 mb-3">of ${g.target.toLocaleString()}</p>
            <div className="h-2 bg-gray-100 rounded-full">
              <div
                className={`${g.color} h-2 rounded-full`}
                style={{ width: Math.round((g.saved / g.target) * 100) + "%" }}
              />
            </div>
            <p className="text-xs text-gray-400 mt-1">{Math.round((g.saved / g.target) * 100)}% reached</p>
          </div>
        ))}
      </div>
    </MainLayout>
  )
}

export default Goals