import { useSelector } from "react-redux";
import CityCard from "./CityCard";
import SearchBar from "../SearchBar";

const Dashboard = () => {
  const favoriteCities = useSelector((state) => state.favorites.cities);

  return (
    <div>
      <SearchBar />

      <div className="grid" style={{ marginTop: "2rem" }}>
        {favoriteCities.map((city) => (
          <CityCard key={city} city={city} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;