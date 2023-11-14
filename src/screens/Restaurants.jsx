// src/screens/Restaurants.jsx

import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getRestaurants } from "../services/restaurants.js";
import Restaurant from "../components/Restaurant.jsx";

function Restaurants() {
  const [restaurants, setRestaurants] = useState([]);
  const location = useLocation();
  const city = new URLSearchParams(location.search).get("city");

  useEffect(() => {
    if (city) {
      fetchRestaurants();
    }
  }, []);

  async function fetchRestaurants() {
    const restaurants = await getRestaurants();
    setRestaurants(restaurants);
  }

  return (
    <div>
      <h1>All the Restaurants in {city}!</h1>
      <div className="restaurants-container">
        {restaurants
          ?.filter((restaurant) => restaurant.city)
          .map((restaurant) => (
            <Restaurant key={restaurant._id} restaurant={restaurant} />
          ))}
      </div>
    </div>
  );
}

export default Restaurants;
