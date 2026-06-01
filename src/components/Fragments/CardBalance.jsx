import { Link } from "react-router-dom";
import Card from "../Elements/Card";
import DotsMobileStepper from "../Elements/DotsMobileStepper";
import Icon from "../Elements/Icon";

function CardBalance({ data }) {
  return (
    <Card title="Total Balance">
      <DotsMobileStepper
        data={data.map((item) => (
          <div key={item.id} className="p-2">
            <div className="flex justify-between">
              <div className="text-2xl font-bold">${item.balance}</div>
              <Link to="/balance" className="text-teal-500 text-sm">All account</Link>
            </div>
            <div className="border-b border-gray-200 my-4"></div>
            <div className="flex justify-between bg-teal-500 text-white p-4 rounded-lg">
              <div>
                <p className="text-xs">Account Type</p>
                <p className="text-xl font-bold">{item.accountType}</p>
                <p className="text-xs">{item.accountNumber}</p>
              </div>
              <div className="flex flex-col justify-between items-end">
                <div>{item.logo}</div>
                <div className="flex items-center gap-2">
                  <span className="text-xl font-bold">${item.balance}</span>
                  <div className="bg-white text-teal-500 rounded-full p-0.5">
                    <Icon.ArrowUpRight size={16} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      />
    </Card>
  );
}

export default CardBalance;