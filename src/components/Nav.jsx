import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav className="nav-container">
      <NavLink to="/">Home.</NavLink> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <NavLink to="/restaurants">Find Restaurants.</NavLink>{" "}
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <NavLink to="/add-restaurant">Add New Restaurant.</NavLink>
    </nav>
  );
}

export default Nav;
