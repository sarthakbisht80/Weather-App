import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const HourlyChart = ({ hourly, unit }) => {
  const chartData = hourly.map((hour) => ({
    time: hour.time.split(" ")[1],
    temp:
      unit === "metric"
        ? hour.temp_c
        : hour.temp_f,
  }));

  return (
    <div className="card" style={{ height: "400px" }}>
      <h3 style={{ marginBottom: "1rem" }}>
        Hourly Temperature (Today)
      </h3>

      <ResponsiveContainer width="100%" height="90%">
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
          <XAxis dataKey="time" stroke="#fff" />
          <YAxis stroke="#fff" />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="temp"
            stroke="#ffcc00"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default HourlyChart;