import OverviewSvg from "../../assets/icons/Overview.svg?react"
import TransactionSvg from "../../assets/icons/Transaction.svg?react"
import BalanceSvg from "../../assets/icons/Balance.svg?react"
import BillSvg from "../../assets/icons/Bill.svg?react"
import ExpenseSvg from "../../assets/icons/Expense.svg?react"
import SettingsSvg from "../../assets/icons/Settings.svg?react"
import LogoutSvg from "../../assets/icons/Logout.svg?react"
import ChevronRightSvg from "../../assets/icons/ChevronRight.svg?react"

const Icon = {
  Overview: ({ size = 20, color = "currentColor", ...props }) => (
    <OverviewSvg width={size} height={size} stroke={color} {...props} />
  ),
  Transaction: ({ size = 20, color = "currentColor", ...props }) => (
    <TransactionSvg width={size} height={size} stroke={color} {...props} />
  ),
  Balance: ({ size = 20, color = "currentColor", ...props }) => (
    <BalanceSvg width={size} height={size} stroke={color} {...props} />
  ),
  Bill: ({ size = 20, color = "currentColor", ...props }) => (
    <BillSvg width={size} height={size} stroke={color} {...props} />
  ),
  Expense: ({ size = 20, color = "currentColor", ...props }) => (
    <ExpenseSvg width={size} height={size} stroke={color} {...props} />
  ),
  Setting: ({ size = 20, color = "currentColor", ...props }) => (
    <SettingsSvg width={size} height={size} stroke={color} {...props} />
  ),
  Logout: ({ size = 20, color = "currentColor", ...props }) => (
    <LogoutSvg width={size} height={size} stroke={color} {...props} />
  ),
  ChevronRight: ({ size = 20, color = "currentColor", ...props }) => (
    <ChevronRightSvg width={size} height={size} stroke={color} {...props} />
  ),
}

export default Icon