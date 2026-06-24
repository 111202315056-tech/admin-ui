import { BarChart } from "@mui/x-charts/BarChart";
import { useContext } from "react";
import { ThemeContext } from "../../context/themeContext";

const chartSetting = {
  height: 300,
  yAxis: [{ disableTicks: true, disableLine: true, width: 50 }],
  grid: { horizontal: true },
  sx: {
    "& .MuiChartsAxis-left .MuiChartsAxis-tickLabel": { fill: "#9F9F9F" },
    "& .MuiChartsAxis-bottom .MuiChartsAxis-tickLabel": { fill: "#9F9F9F" },
  },
};

export default function BarsDataset({ dataset }) {
  const { theme } = useContext(ThemeContext);

  const coloredSeries = dataset.series.map((s, i) =>
    i === dataset.series.length - 1 ? { ...s, color: theme.color } : s
  );

  return (
    <BarChart
      dataset={dataset.data}
      xAxis={[{ dataKey: dataset.dataKey, categoryGapRatio: 0.6 }]}
      series={coloredSeries}
      {...chartSetting}
    />
  );
}