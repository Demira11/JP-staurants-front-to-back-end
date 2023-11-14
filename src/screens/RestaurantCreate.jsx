import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createRestaurant } from "../services/restaurants";

function RestaurantCreate() {
  const [restaurant, setRestaurant] = useState({
    name: "",
    address_1: "",
    city: "",
    state_province: "",
    postal_code: "",
    phone: "",
    website_url: "",
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
          placeholder="Name"
          name="name"
          value={restaurant.name}
          onChange={handleChange}
        />

        <input
          type="text"
          placeholder="Address"
          name="address_1"
          value={restaurant.address_1}
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
          name="phone"
          value={restaurant.phone}
          onChange={handleChange}
        />
        <input
          type="number"
          placeholder="Postal Code"
          name="postal_code"
          value={restaurant.postal_code}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="URL link"
          name="website_url"
          value={restaurant.website_url}
          onChange={handleChange}
        />

        <button type="submit">Submit</button>
      </form>
      <img
        src="https://media.timeout.com/images/105802468/image.jpg"
        alt="colorful food"
      />
    </div>
  );
}

export default RestaurantCreate;
