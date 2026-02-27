import { useDispatch, useSelector } from "react-redux";
import { toggleUnit } from "../features/settings/settingsSlice";
import { selectUnit } from "../features/settings/settingsSelectors";

const UnitToggle = () => {
  const dispatch = useDispatch();
  const unit = useSelector(selectUnit);

  return (
    <button
      className="unit-toggle"
      onClick={() => dispatch(toggleUnit())}
    >
      {unit === "metric" ? "Switch to °F" : "Switch to °C"}
    </button>
  );
};

export default UnitToggle;