import { NavLink } from "react-router-dom";
import "../styles/navBar.css";

export default function Navbar({ open_order, orders }) {
  return (
    <nav className="navBar">
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "active-link" : "linkButton")}
      >
        <img src="src/assets/home.svg" alt="Home" />
      </NavLink>
      <NavLink
        to="/Shop"
        className={({ isActive }) => (isActive ? "active-link" : "linkButton")}
      >
        <img src="src/assets/bag.svg" alt="Shop" />
      </NavLink>
      <NavLink
        to="cart"
        className={({ isActive }) =>
          isActive ? "active-link" : open_order ? "orderOpen" : "linkButton"
        }
      >
        <div>
          <img src="src/assets/shopping-cart.svg" alt="Cart" />
          {orders > 0 && <p className="underNumber">{orders}</p>}
        </div>
      </NavLink>
    </nav>
  );
}
