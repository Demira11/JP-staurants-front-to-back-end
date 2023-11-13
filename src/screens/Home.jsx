import React from "react";

function Home() {
  return (
    <div>
      <h1 className="home">Anywhere in New York, find you restaurant here!</h1>
      <div className="search-container">
        <input type="text" class="search-box" placeholder="Enter City..." />
        <button class="search-button-home">Go</button>
      </div>
      <img
        src="https://www.legratinnyc.com/wp-content/uploads/2022/06/menu-homepage-80.jpg"
        alt="colorful food"
      />
    </div>
  );
}

export default Home;
