import "./App.css";
import axios from "axios";
import React, { useState , useEffect } from "react";

function App() {
  const [city, setCity] = useState("");
  const [restaurants, setRestaurants] = useState([]);
  const [error, setError] = useState(null);

   function handleSearch  async () => {
    try {
      const response = await axios.get(`/api/restaurants/${city}`);
      console.log(response.data);
      setRestaurants(response.data);
      setError(null);
    } catch (error) {
      console.error("Error fetching data:", error);
      setRestaurants([]);
      setError("Error fetching data. Please try again.");
    }
  };

  useEffect(() => {
    
    
  }, []);


  return (
    <div className="App">
      <h1>Find Restaurants by City</h1>
      <div>
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
        {restaurants.map((restaurant) => (
          <div key={restaurant._id} className="restaurant-card">
            <h2>{restaurant.name}</h2>
            <p>{restaurant.city}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
