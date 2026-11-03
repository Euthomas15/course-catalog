import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <NavLink to="/">TJ Courses</NavLink>

      <div>
        <NavLink to="/">All Courses</NavLink>
        <NavLink to="/category/Beginner">Beginner</NavLink>
        <NavLink to="/category/Intermediate">Intermediate</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;