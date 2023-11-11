import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = async () => {
    try {
      const response = await fetch(
        `https://restaurant-api1-0cadf6d31e8f.herokuapp.com/api/restaurants?city=${searchTerm}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            // Add any other headers you may need (e.g., authentication headers)
          },
        }
      );

      if (!response.ok) {
        console.error("Error searching for restaurants:", response.statusText);
        return;
      }

      const searchResults = await response.json();
      console.log("Search results:", searchResults);

      // You can navigate to a search results page or update state to render the results
      // For now, let's log the results and clear the search term
      setSearchTerm("");
    } catch (error) {
      console.error("Error during search:", error.message);
    }
  };

  return (
    <div>
      <h1 className="home">Find your restaurant here!</h1>
      <div className="search-container">
        <input
          className="search-box"
          type="text"
          placeholder="Search Restaurant by city..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="search-button-home" onClick={handleSearch}>
          Go
        </button>
      </div>
      {/* Rest of your content */}
    </div>
  );
}

export default Home;
