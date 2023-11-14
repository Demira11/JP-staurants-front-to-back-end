import { Link } from "react-router-dom";

function Restaurant({ restaurant }) {
  return (
    <div>
      <Link to={`/restaurants/${restaurant._id}`}>
        <p className="restaurant-images">{restaurant.name}</p>
      </Link>
    </div>
  );
}

export default Restaurant;
