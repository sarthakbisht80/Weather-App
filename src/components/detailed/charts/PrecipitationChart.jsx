import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const PrecipitationChart = ({ hourly }) => {
  const chartData = hourly.map((hour) => ({
    time: hour.time.split(" ")[1],
    rain: hour.precip_mm,
  }));

  return (
    <div className="card" style={{ height: "400px" }}>
      <h3 style={{ marginBottom: "1rem" }}>
        Hourly Precipitation (mm)
      </h3>

      <ResponsiveContainer width="100%" height="90%">
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
          <XAxis dataKey="time" stroke="#fff" />
          <YAxis stroke="#fff" />
          <Tooltip />
          <Bar dataKey="rain" fill="#00bfff" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PrecipitationChart;