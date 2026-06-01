import Card from "../Elements/Card";
import Icon from "../Elements/Icon";
import CompositionExample from "../Elements/CompositionExample";

function CardGoal({ data }) {
  const chartValue = (data.presentAmount / data.targetAmount) * 100;

  return (
    <Card title="Goals">
      <div className="p-2">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <span className="text-2xl font-bold">${data.targetAmount}</span>
            <div className="p-2 bg-gray-100 text-gray-500 rounded-md">
              <Icon.Edit size={16} />
            </div>
          </div>
          <div className="text-sm text-gray-400">Nov, 2023</div>
        </div>
        <div className="border-b-2 border-gray-100 my-4"></div>
        <div className="flex justify-between">
          <div>
            <div className="flex mt-3 mb-6 text-gray-400 gap-3">
              <Icon.Award />
              <div>
                <div className="text-sm">Target Achieved</div>
                <div className="font-bold text-xl text-gray-800">${data.presentAmount}</div>
              </div>
            </div>
            <div className="flex text-gray-400 gap-3">
              <Icon.Target />
              <div>
                <div className="text-sm">This Month Target</div>
                <div className="font-bold text-xl text-gray-800">${data.targetAmount}</div>
              </div>
            </div>
          </div>
          <div className="text-center">
            <CompositionExample data={chartValue} />
            <div className="flex justify-between text-xs gap-4">
              <span className="text-gray-400">$0</span>
              <span className="font-bold text-lg">12K</span>
              <span className="text-gray-400">$20K</span>
            </div>
            <div className="text-xs mt-1 text-gray-400">Target vs Achievement</div>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default CardGoal;