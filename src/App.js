import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [city, setCity] = useState("");
  const [restaurants, setRestaurants] = useState([]);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    try {
      const response = await fetch(`/api/restaurants/${city}`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setRestaurants(data);
      setError(null); // Clear any previous errors
    } catch (error) {
      console.error("Error fetching data:", error);
      setRestaurants([]); // Clear restaurants on error
      setError("Error fetching data. Please try again."); // Set an error message
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Find your restaurant fast</h1>
        <div className="search-container">
          <input
            type="text"
            placeholder="Enter city name"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
        {error && <p className="error-message">{error}</p>}
        <div className="restaurants-container">
          {restaurants.length > 0 ? (
            restaurants.map((restaurant) => (
              <div key={restaurant._id} className="restaurant-card">
                <h2>{restaurant.name}</h2>
                <p>
                  {restaurant.address_1}, {restaurant.city},{" "}
                  {restaurant.state_province}
                </p>
              </div>
            ))
          ) : (
            <p>No restaurants found.</p>
          )}
        </div>
      </header>
    </div>
  );
};

export default App;
