import React from "react";

function Home() {
  return (
    <div>
      <h1 className="home">Anywhere in New York, find your restaurant here!</h1>
      <div className="search-container">
        <input type="text" class="search-box" placeholder="Enter City..." />
        <button class="search-button-home">Go</button>
      </div>
      <img
        src="https://dineatdome.com/wp-content/uploads/2022/10/308909473_534328565361801_4905719160182160214_n.jpeg"
        alt="colorful food"
      />
    </div>
  );
}

export default Home;
