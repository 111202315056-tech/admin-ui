import { Link } from "react-router-dom";
import Card from "../Elements/Card";
import DotsMobileStepper from "../Elements/DotsMobileStepper";
import Icon from "../Elements/Icon";
import { useDarkMode } from "../../context/darkModeContext";

function CardBalance({ data }) {
  const { isDark } = useDarkMode();
  return (
    <Card title="Total Balance">
      <DotsMobileStepper
        data={data.map((item) => (
          <div key={item.id} className="p-1">
            <div className="flex items-baseline justify-between gap-2">
              <div className={`text-xl font-bold ${isDark ? "text-white" : "text-gray-800"}`}>${item.balance}</div>
              <Link to="/balance" className="text-teal-500 text-xs whitespace-nowrap">
                All account
              </Link>
            </div>
            <div className={`border-b my-3 ${isDark ? "border-gray-700" : "border-gray-200"}`}></div>
            <div className="flex justify-between items-start bg-teal-500 text-white p-4 rounded-lg">
              <div>
                <p className="text-xs opacity-80">Account Type</p>
                <p className="text-lg font-bold leading-tight">{item.accountType}</p>
                <p className="text-xs opacity-80 mt-1">{item.accountNumber}</p>
              </div>
              <div className="flex flex-col justify-between items-end h-full">
                <div className="w-6 h-6">{item.logo}</div>
                <div className="flex items-center gap-2 mt-4">
                  <span className="text-lg font-bold">${item.balance}</span>
                  <div className="bg-white text-teal-500 rounded-full p-0.5">
                    <Icon.ArrowUpRight size={14} />
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