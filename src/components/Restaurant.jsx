import { Link } from "react-router-dom";

function Restaurant({ restaurant }) {
  return (
    <div>
      <Link to={`/restaurants/${restaurant._id}`}>
        <img
          className="restaurant-images"
          src={restaurant.image}
          alt={restaurant.name}
        />
      </Link>
    </div>
  );
}

export default Restaurant;
