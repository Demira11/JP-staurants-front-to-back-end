import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav className="nav-vontainer">
      <NavLink to="/">Home</NavLink> &nbsp;
      <NavLink to="/restaurants">Find Restaurants</NavLink> &nbsp;
      <NavLink to="/add-restaurant">Add New Restaurant</NavLink>
    </nav>
  );
}

export default Nav;
