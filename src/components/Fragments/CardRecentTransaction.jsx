import { useState } from "react";
import Card from "../Elements/Card";

function CardRecentTransaction({ data }) {
  const [active, setActive] = useState("All");
  const tabs = ["All", "Revenue", "Expense"];

  const filteredData =
    active === "All" ? data : data.filter((item) => item.type === active);

  return (
    <Card title="Recent Transactions" link="/transactions">
      <div className="mb-4 flex gap-2">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className={
              active === tab
                ? "px-4 py-1 font-bold text-teal-500 border-b-2 border-teal-500"
                : "px-4 py-1 font-bold text-gray-400"
            }
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="space-y-4">
        {filteredData.map((item) => (
          <div key={item.id} className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="bg-gray-100 p-2 rounded-lg text-gray-600">
                {item.icon}
              </div>
              <div>
                <p className="text-sm font-bold">{item.transactionName}</p>
                <p className="text-xs text-gray-400">{item.shopName}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm font-bold text-gray-600">${item.amount}</p>
              <p className="text-xs text-gray-400">{item.date}</p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

export default CardRecentTransaction;