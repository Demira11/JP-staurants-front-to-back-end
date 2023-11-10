import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/restaurants">All Restaurants</NavLink>
      <NavLink to="/add-restaurant">Add New Restaurant!</NavLink>
    </nav>
  );
}

export default Nav;
