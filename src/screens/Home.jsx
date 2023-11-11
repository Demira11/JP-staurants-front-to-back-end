import React from "react";

function Home() {
  return (
    <div>
      <h1 className="home">Find you restaurant here!</h1>
      <div class="search-container">
        <input
          class="search-box"
          type="text"
          placeholder="Search Restaurant by city..."
        />
        <button class="search-button-home">Go</button>
      </div>
      <img
        src="https://dineatdome.com/wp-content/uploads/2022/10/308909473_534328565361801_4905719160182160214_n.jpeg"
        alt="colorful food"
        class="responsive"
      />
    </div>
  );
}

export default Home;
