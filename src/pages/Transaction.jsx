import MainLayout from "../components/Layouts/MainLayout"

function Transaction() {
  return (
    <MainLayout>
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Transactions</h2>
        <p className="text-sm text-gray-400">No transactions yet.</p>
      </div>
    </MainLayout>
  )
}

export default Transaction