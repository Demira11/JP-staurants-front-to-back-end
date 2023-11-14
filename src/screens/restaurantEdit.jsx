import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { editRestaurant, getRestaurant } from "../services/restaurants";

function RestaurantEdit() {
  const [restaurant, setRestaurant] = useState({
    name: "",
    address: "",
    city: "",
    state_province: "New York",
    postal_code: "",
    phone: "",
    website_url: "",
    likesCuddles: true,
  });

  let { id } = useParams();
  console.log(id);
  let navigate = useNavigate();

  useEffect(() => {
    fetchRestaurant();
  }, []);

  async function fetchRestaurant() {
    const oneRestaurant = await getRestaurant(id);
    setRestaurant(oneRestaurant);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    await editRestaurant(id, restaurant);
    navigate(`/restaurants/${id}`);
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
      <h1>Edit the restaurant in our Database!</h1>
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
          type="number"
          placeholder="Postal Code"
          name="postalcode"
          value={restaurant.postalcode}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Url link"
          name="url"
          value={restaurant.url}
          onChange={handleChange}
        />
        <button type="submit">Edit the Restaurant</button>
      </form>
    </div>
  );
}

export default RestaurantEdit;
