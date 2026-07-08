import Card from "../Elements/Card";
import BarsDataset from "../Elements/BarsDataset";
import { useDarkMode } from "../../context/darkModeContext";

function CardStatistic({ data }) {
  const { isDark } = useDarkMode();
  return (
    <Card title="Statistics">
      <select className={`font-bold text-sm mb-2 rounded px-2 py-1 border ${isDark ? "bg-gray-800 text-white border-gray-700" : "bg-white text-gray-800 border-gray-200"}`}>
        <option>Weekly Comparison</option>
      </select>
      <BarsDataset dataset={data} />
    </Card>
  );
}

export default CardStatistic;