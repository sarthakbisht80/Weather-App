import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite } from "../features/favorites/favoritesSlice";
import {
  setQuery,
  setSelectedCity,
} from "../features/search/searchSlice";
import { useLazySearchCitiesQuery } from "../features/weather/weatherApi";

const SearchBar = () => {
  const dispatch = useDispatch();
  const savedQuery = useSelector((state) => state.search.query);

  const [input, setInput] = useState(savedQuery || "");
  const [triggerSearch, { data: suggestions = [], isFetching }] =
    useLazySearchCitiesQuery();

  useEffect(() => {
    if (!input || input.length < 2) return;
    const timeoutId = setTimeout(() => {
      triggerSearch(input);
    }, 300);
    return () => clearTimeout(timeoutId);
  }, [input, triggerSearch]);

  const handleSearch = () => {
    const value = input.trim();
    if (!value) return;
    dispatch(addFavorite(value));
    dispatch(setSelectedCity(value));
    setInput("");
    dispatch(setQuery(""));
  };

  return (
    <div className="search-container">
      <div className="search-input-wrapper">
        <input
          type="text"
          placeholder="Search city..."
          value={input}
          onChange={(e) => {
            const value = e.target.value;
            setInput(value);
            dispatch(setQuery(value));
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              if (suggestions && suggestions.length > 0) {
                const first = suggestions[0];
                const label = `${first.name}${
                  first.region ? ", " + first.region : ""
                }, ${first.country}`;
                setInput(label);
                dispatch(setQuery(label));
              } else {
                handleSearch();
              }
            }
          }}
        />
        <button onClick={handleSearch}>Add</button>
        {input.length >= 2 && (isFetching || suggestions.length > 0) && (
          <ul className="search-dropdown">
            {isFetching && suggestions.length === 0 && (
              <li className="search-dropdown-item">Searching...</li>
            )}
            {suggestions.map((city) => {
              const label = `${city.name}${
                city.region ? ", " + city.region : ""
              }, ${city.country}`;
              return (
                <li
                  key={`${city.id || city.name}-${city.lat}-${city.lon}`}
                  className="search-dropdown-item"
                  onMouseDown={(e) => {
                    e.preventDefault();
                    setInput(label);
                    dispatch(setQuery(label));
                  }}
                >
                  {label}
                </li>
              );
            })}
            {!isFetching && suggestions.length === 0 && (
              <li className="search-dropdown-item">No cities found</li>
            )}
          </ul>
        )}
      </div>
    </div>
  );
};

export default SearchBar;