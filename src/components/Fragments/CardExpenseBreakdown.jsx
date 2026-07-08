import Card from "../Elements/Card";
import Icon from "../Elements/Icon";
import { useDarkMode } from "../../context/darkModeContext";

function CardExpenseBreakdown({ data }) {
  const { isDark } = useDarkMode();
  return (
    <Card title="Expenses Breakdown">
      <div className="grid grid-cols-3 gap-3">
        {data.map((item) => (
          <div key={item.id} className="flex items-center justify-between gap-1">
            <div className="flex items-center gap-2 min-w-0">
              <div className={`p-2 rounded-lg flex-shrink-0 ${isDark ? "bg-gray-700 text-gray-300" : "bg-gray-100 text-gray-600"}`}>
                {item.icon}
              </div>
              <div className="min-w-0">
                <p className="text-xs text-gray-400 truncate">{item.category}</p>
                <p className={`text-sm font-bold ${isDark ? "text-white" : "text-gray-800"}`}>${item.amount}</p>
                <div className="flex items-center gap-1">
                  <span className="text-xs text-gray-400">{item.percentage}%</span>
                  {item.arrow}
                </div>
              </div>
            </div>
            <Icon.ArrowRight size={14} color="#9CA3AF" />
          </div>
        ))}
      </div>
    </Card>
  );
}

export default CardExpenseBreakdown;