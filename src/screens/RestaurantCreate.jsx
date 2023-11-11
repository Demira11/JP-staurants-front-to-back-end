import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createRestaurant } from "../services/restaurants";

function RestaurantCreate() {
  const [restaurant, setRestaurant] = useState({
    name: "Franchia Vegan Café",
    address: "12 Park Ave",
    city: "New York",
    state_province: "New York",
    postal_code: "10016",
    phone: "2122131001",
    website_url: "https://franchia.com/",
  });

  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await createRestaurant(restaurant);
    navigate("/restaurants");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setRestaurant((prevRestaurant) => ({
      ...prevRestaurant,
      [name]: value,
    }));
  };

  return (
    <div>
      <h1>Add your favorite restaurant into our Database!</h1>
      <form className="create-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Please add the restaurants name"
          name="name"
          value={restaurant.name}
          onChange={handleChange}
        />
        <input type="text" placeholder="Name" onChange={handleChange} />
        <input
          type="text"
          name="address"
          value={restaurant.address}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="City"
          name="city"
          value={restaurant.city}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="State"
          name="state"
          value={restaurant.state}
          onChange={handleChange}
        />
        <input
          type="number"
          placeholder="Phone number"
          name="number"
          value={restaurant.number}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Please add the retsuarant's URL link"
          name="link"
          value={restaurant.link}
          onChange={handleChange}
        />
        <button type="submit">Submit Your Restaurant!</button>
      </form>
    </div>
  );
}

export default RestaurantCreate;
