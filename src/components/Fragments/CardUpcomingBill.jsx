import Card from "../Elements/Card";

function CardUpcomingBill({ data }) {
  return (
    <Card title="Upcoming Bill" link="/bill">
      <div className="flex flex-col gap-4">
        {data.map((item) => (
          <div key={item.id} className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="bg-gray-100 p-2 rounded-lg text-center min-w-12">
                <span className="text-xs text-gray-400">{item.month}</span>
                <p className="text-xl font-bold">{item.date}</p>
              </div>
              <div>
                <div className="text-gray-400">{item.icon}</div>
                <p className="text-sm font-bold">{item.name}</p>
                <p className="text-xs text-gray-400">Last Charge - {item.lastCharge}</p>
              </div>
            </div>
            <span className="py-2 px-4 border border-gray-200 rounded-lg font-bold text-sm">
              ${item.amount}
            </span>
          </div>
        ))}
      </div>
    </Card>
  );
}

export default CardUpcomingBill;