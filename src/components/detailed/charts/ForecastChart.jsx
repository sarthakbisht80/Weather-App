import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const ForecastChart = ({ forecast, unit }) => {
  const chartData = forecast.map((day) => ({
    date: day.date,
    temp:
      unit === "metric"
        ? day.day.avgtemp_c
        : day.day.avgtemp_f,
  }));

  return (
    <div className="card chart-card">
      <h3>7-Day Temperature Trend</h3>

      <ResponsiveContainer width="100%" height={350}>
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="temp"
            stroke="#00ffcc"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ForecastChart;