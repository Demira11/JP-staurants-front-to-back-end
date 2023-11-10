import "./App.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
import Nav from "./components/Nav.jsx";
import Home from "./screens/Home.jsx";
import Restaurants from "./screens/Restaurants.jsx";
import RestaurantDetail from "./screens/RestaurantDetail.jsx";
import RestaurantCreate from "./screens/RestaurantCreate.jsx";
import RestaurantEdit from "./screens/restaurantEdit.jsx";
import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/restaurants" element={<Restaurants />} />
        <Route path="/restaurants/:id" element={<RestaurantDetail />} />
        <Route path="/add-restaurant" element={<RestaurantCreate />} />
        <Route path="/restaurants/:id/edit" element={<RestaurantEdit />} />
      </Routes>
    </div>
  );
}

export default App;
