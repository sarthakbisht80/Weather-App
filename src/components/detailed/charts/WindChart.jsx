import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const WindChart = ({ hourly }) => {
  const chartData = hourly.map((hour) => ({
    time: hour.time.split(" ")[1],
    wind: hour.wind_kph,
  }));

  return (
    <div className="card" style={{ height: "400px" }}>
      <h3 style={{ marginBottom: "1rem" }}>
        Hourly Wind Speed (kph)
      </h3>

      <ResponsiveContainer width="100%" height="90%">
        <AreaChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
          <XAxis dataKey="time" stroke="#fff" />
          <YAxis stroke="#fff" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="wind"
            stroke="#00ffcc"
            fill="#00ffcc"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default WindChart;