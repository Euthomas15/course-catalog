import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header className="site-header">
      <nav className="navbar container" aria-label="Main navigation">
        <NavLink to="/" end className="brand">
          <span className="brand-mark">TJ</span>
          <span>TJ Courses</span>
        </NavLink>

        <div className="nav-links">
          <NavLink to="/" end className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            All Courses
          </NavLink>
          <NavLink to="/category/Beginner" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            Beginner
          </NavLink>
          <NavLink to="/category/Intermediate" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            Intermediate
          </NavLink>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
