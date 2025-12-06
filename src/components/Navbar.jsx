import { NavLink } from "react-router-dom";
import "../styles/navBar.css";

export default function Navbar({ open_order }) {
  return (
    <nav className="navBar">
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "active-link" : "linkButton")}
      >
        Home
      </NavLink>
      <NavLink
        to="/Shop"
        className={({ isActive }) => (isActive ? "active-link" : "linkButton")}
      >
        Shop
      </NavLink>
      <NavLink
        to="cart"
        className={({ isActive }) =>
          isActive ? "active-link" : open_order ? "orderOpen" : "linkButton"
        }
      >
        Cart
      </NavLink>
    </nav>
  );
}
