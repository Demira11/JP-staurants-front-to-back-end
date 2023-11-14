import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [city, setCity] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate(`/restaurants?city=${encodeURIComponent(city)}`);
  };
  const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <div>
      <h1 className="home">Anywhere in New York, find your restaurant here!</h1>
      <div className="search-container">
        <input
          type="text"
          className="search-box"
          placeholder="Enter City..."
          value={city}
          onChange={(e) => setCity(capitalizeFirstLetter(e.target.value))}
        />
        <button className="search-button-home" onClick={handleSearch}>
          Go
        </button>
      </div>
      <img
        src="https://www.tastingtable.com/img/gallery/best-italian-restaurants-in-nyc/l-intro-1687816141.jpg"
        alt="colorful food"
      />
    </div>
  );
}

export default Home;
