import { useState, useEffect } from "react";
import { getRestaurant, deleteRestaurant } from "../services/restaurants";
import { Link, useParams, useNavigate } from "react-router-dom";

function RestaurantDetail() {
  const [restaurant, setRestaurant] = useState({});

  let { id } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    fetchRestaurant();
  }, []);

  async function fetchRestaurant() {
    const oneRestaurant = await getRestaurant(id);
    setRestaurant(oneRestaurant);
  }

  async function handleDelete() {
    await deleteRestaurant(id);
    navigate("/restaurants");
  }

  return (
    <div>
      <h1>Welcome, to {restaurant.name}</h1>
      <url src={restaurant.url} alt={restaurant.name} />
      <p>{restaurant.city}</p>
      <p>{restaurant.state}</p>
      <p>{restaurant.phone}</p>
      <p>{restaurant.state}</p>
      {restaurant.isVegan ? (
        <p>Yes,Vegan friendly!</p>
      ) : (
        <p>Not Vegan friendly!</p>
      )}
      <div>
        <Link to={`/restaurants/${id}/edit`}>
          <button>Edit Restaurant</button>
        </Link>
        <button onClick={handleDelete}>DELETE</button>
      </div>
    </div>
  );
}

export default RestaurantDetail;
