import { useParams } from "react-router-dom";
import DetailedView from "../components/detailed/DetailedView";

const CityPage = () => {
  const { cityName } = useParams();

  return <DetailedView city={cityName} />;
};

export default CityPage;