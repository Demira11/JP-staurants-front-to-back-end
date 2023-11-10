import { useState, useEffect } from "react";
import { getRestaurants } from "../services/restaurants.js";
import Restaurant from "../components/Restaurant.jsx";

function Restaurants() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    fetchRestaurants();
  }, []);

  async function fetchRestaurants() {
    const allRestaurants = await getRestaurants();
    setRestaurants(allRestaurants);
  }

  return (
    <div>
      <h1>All the Restaurants!</h1>
      <div className="restaurants-container">
        {restaurants?.map((restaurant) => (
          <Restaurant restaurant={restaurant} />
        ))}
      </div>
    </div>
  );
}

export default Restaurants;
