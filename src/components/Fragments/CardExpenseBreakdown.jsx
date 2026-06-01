import Card from "../Elements/Card";
import Icon from "../Elements/Icon";

function CardExpenseBreakdown({ data }) {
  return (
    <Card title="Expenses Breakdown">
      <div className="grid grid-cols-3 gap-4">
        {data.map((item) => (
          <div key={item.id} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-gray-100 p-3 rounded-lg text-gray-600">
                {item.icon}
              </div>
              <div>
                <p className="text-xs text-gray-400">{item.category}</p>
                <p className="text-sm font-bold">${item.amount}</p>
                <div className="flex items-center gap-1">
                  <span className="text-xs text-gray-400">{item.percentage}%</span>
                  {item.arrow}
                </div>
              </div>
            </div>
            <Icon.ArrowRight size={16} color="#9CA3AF" />
          </div>
        ))}
      </div>
    </Card>
  );
}

export default CardExpenseBreakdown;