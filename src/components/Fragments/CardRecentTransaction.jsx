import { useState } from "react";
import Card from "../Elements/Card";
import { useDarkMode } from "../../context/darkModeContext";

function CardRecentTransaction({ data }) {
  const [active, setActive] = useState("All");
  const tabs = ["All", "Revenue", "Expense"];
  const { isDark } = useDarkMode();

  const filteredData =
    active === "All" ? data : data.filter((item) => item.type === active);

  return (
    <Card title="Recent Transactions" link="/transactions">
      <div className="mb-3 flex gap-1">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className={
              active === tab
                ? "px-3 py-1 text-sm font-bold text-teal-500 border-b-2 border-teal-500"
                : "px-3 py-1 text-sm font-bold text-gray-400"
            }
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="space-y-3">
        {filteredData.map((item) => (
          <div key={item.id} className="flex justify-between items-center gap-2">
            <div className="flex items-center gap-2 min-w-0">
              <div className={`p-2 rounded-lg flex-shrink-0 ${isDark ? "bg-gray-700 text-gray-300" : "bg-gray-100 text-gray-600"}`}>
                {item.icon}
              </div>
              <div className="min-w-0">
                <p className={`text-sm font-bold truncate ${isDark ? "text-white" : "text-gray-800"}`}>{item.transactionName}</p>
                <p className="text-xs text-gray-400 truncate">{item.shopName}</p>
              </div>
            </div>
            <div className="text-right flex-shrink-0">
              <p className={`text-sm font-bold ${isDark ? "text-white" : "text-gray-600"}`}>${item.amount}</p>
              <p className="text-xs text-gray-400">{item.date}</p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

export default CardRecentTransaction;