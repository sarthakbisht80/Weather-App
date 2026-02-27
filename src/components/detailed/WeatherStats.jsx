const WeatherStats = ({ current, unit }) => {
  return (
    <div className="card">
      <h3 style={{ marginBottom: "1rem" }}>Detailed Statistics</h3>

      <div className="stats-grid">
        <div>
          <strong>Feels Like:</strong>{" "}
          {unit === "metric"
            ? `${current.feelslike_c} °C`
            : `${current.feelslike_f} °F`}
        </div>

        <div>
          <strong>Humidity:</strong> {current.humidity}%
        </div>

        <div>
          <strong>Wind Speed:</strong> {current.wind_kph} kph
        </div>

        <div>
          <strong>Pressure:</strong> {current.pressure_mb} mb
        </div>

        <div>
          <strong>UV Index:</strong> {current.uv}
        </div>

        <div>
          <strong>Dew Point:</strong> {current.dewpoint_c} °C
        </div>
      </div>
    </div>
  );
};

export default WeatherStats;