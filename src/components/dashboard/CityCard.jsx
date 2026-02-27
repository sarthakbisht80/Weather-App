import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useGetCurrentWeatherQuery } from "../../features/weather/weatherApi";
import { removeFavorite } from "../../features/favorites/favoritesSlice";

const CityCard = ({ city }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const unit = useSelector((state) => state.settings.unit);

  const { data, isLoading, error, refetch } =
    useGetCurrentWeatherQuery(
      { city, unit },
      { pollingInterval: 60000 } 
    );

  if (isLoading) return <div className="card">Loading {city}...</div>;
  if (error) return <div className="card">Error loading {city}</div>;

  const temperature =
    unit === "metric" ? data.current.temp_c : data.current.temp_f;

  const windSpeed =
    unit === "metric"
      ? `${data.current.wind_kph} kph`
      : `${data.current.wind_mph} mph`;

  return (
    <div
      className="card"
      onClick={() => navigate(`/city/${city}`)}
    >
      <div className="card-primary-row">
        <div>
          <h3>{data.location.name}</h3>
          <div className="card-temp">
            {Math.round(temperature)}°
          </div>
          <div className="card-sub">{data.current.condition.text}</div>
        </div>
        <img src={data.current.condition.icon} alt="Weather icon" />
      </div>

      <div className="card-sub">
        Humidity {data.current.humidity}% • Wind {windSpeed}
      </div>

      <div className="card-footer">
        <span>
          Feels like{" "}
          {unit === "metric"
            ? `${Math.round(data.current.feelslike_c)}°C`
            : `${Math.round(data.current.feelslike_f)}°F`}
        </span>
        <div className="card-footer-actions">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              refetch();
            }}
          >
            Refresh
          </button>
          <button
            type="button"
            className="card-remove-btn"
            onClick={(e) => {
              e.stopPropagation();
              dispatch(removeFavorite(city));
            }}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default CityCard;