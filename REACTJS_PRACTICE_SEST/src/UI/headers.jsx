import { NavLink } from "react-router-dom";
import "./header.css"
export const Header = () => {
  return (
    <div className="navbar">
      <NavLink 
        to="/home" 
        className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
      >
        Home
      </NavLink>

      <NavLink 
        to="/about" 
        className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
      >
        About
      </NavLink>

      <NavLink 
        to="/contact" 
        className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
      >
        Contact
      </NavLink>
    </div>
  );
};
