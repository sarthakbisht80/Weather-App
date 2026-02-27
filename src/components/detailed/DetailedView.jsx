import { useSelector } from "react-redux";
import { useGetForecastQuery } from "../../features/weather/weatherApi";
import ForecastChart from "./charts/ForecastChart";
import WeatherStats from "./WeatherStats";

import HourlyChart from "./charts/HourlyChart";
import PrecipitationChart from "./charts/PrecipitationChart";
import WindChart from "./charts/WindChart";

const DetailedView = ({ city }) => {
  const unit = useSelector((state) => state.settings.unit);

  const { data, isLoading, error } = useGetForecastQuery(
    { city, unit },
    { pollingInterval: 60000 }
  );

  if (isLoading) return <div className="card">Loading forecast...</div>;
  if (error) return <div className="card">Error loading forecast</div>;

 return (
  <div>
    <h1 style={{ marginBottom: "1.5rem" }}>
      {data.location.name} - Weather Analytics
    </h1>

    <ForecastChart forecast={data.forecast.forecastday} unit={unit} />

    <div style={{ marginTop: "2rem" }}>
      <HourlyChart
        hourly={data.forecast.forecastday[0].hour}
        unit={unit}
      />
    </div>

    <div style={{ marginTop: "2rem" }}>
      <PrecipitationChart
        hourly={data.forecast.forecastday[0].hour}
      />
    </div>

    <div style={{ marginTop: "2rem" }}>
      <WindChart
        hourly={data.forecast.forecastday[0].hour}
      />
    </div>

    <div style={{ marginTop: "2rem" }}>
      <WeatherStats current={data.current} unit={unit} />
    </div>
  </div>
);
};

export default DetailedView;