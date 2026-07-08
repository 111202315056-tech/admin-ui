import { BarChart } from "@mui/x-charts/BarChart";
import { useContext } from "react";
import { ThemeContext } from "../../context/themeContext";
import { useDarkMode } from "../../context/darkModeContext";

export default function BarsDataset({ dataset }) {
  const { theme } = useContext(ThemeContext);
  const { isDark } = useDarkMode();

  const tickColor = isDark ? "#9CA3AF" : "#6B7280";
  const gridColor = isDark ? "#374151" : "#E5E7EB";

  const chartSetting = {
    height: 260,
    yAxis: [{ disableTicks: true, disableLine: true, width: 40 }],
    grid: { horizontal: true },
    sx: {
      "& .MuiChartsAxis-left .MuiChartsAxis-tickLabel": { fill: tickColor },
      "& .MuiChartsAxis-bottom .MuiChartsAxis-tickLabel": { fill: tickColor },
      "& .MuiChartsGrid-line": { stroke: gridColor },
      "& .MuiChartsLegend-series text": { fill: `${tickColor} !important` },
    },
  };

  const coloredSeries = dataset.series.map((s, i) =>
    i === dataset.series.length - 1
      ? { ...s, color: theme.color }
      : { ...s, color: isDark ? "#4B5563" : "#E5E7EB" }
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