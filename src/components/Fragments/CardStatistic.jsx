import Card from "../Elements/Card";
import BarsDataset from "../Elements/BarsDataset";

function CardStatistic({ data }) {
  return (
    <Card title="Statistics">
      <select className="font-bold text-lg mb-2">
        <option>Weekly Comparison</option>
      </select>
      <BarsDataset dataset={data} />
    </Card>
  );
}

export default CardStatistic;