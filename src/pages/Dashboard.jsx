import MainLayout from "../components/Layouts/MainLayout"
import CardBalance from "../components/Fragments/CardBalance"
import CardGoal from "../components/Fragments/CardGoal"
import CardRecentTransaction from "../components/Fragments/CardRecentTransaction"
import CardUpcomingBill from "../components/Fragments/CardUpcomingBill"
import CardExpenseBreakdown from "../components/Fragments/CardExpenseBreakdown"
import CardStatistic from "../components/Fragments/CardStatistic"
import { transactions, expensesBreakdowns, balances, goals, expensesStatistics } from "../data"

function Dashboard() {
  return (
    <MainLayout>
      <div className="grid grid-cols-3 gap-4 mb-4">
        <CardBalance data={balances} />
        <CardGoal data={goals} />
        <CardUpcomingBill />
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-1">
          <CardRecentTransaction data={transactions} />
        </div>
        <div className="col-span-2 flex flex-col gap-4">
          <CardStatistic data={expensesStatistics} />
          <CardExpenseBreakdown data={expensesBreakdowns} />
        </div>
      </div>
    </MainLayout>
  )
}

export default Dashboard