import { NavLink } from "react-router-dom";
import "../styles/navBar.css";
import homeIcon from "../assets/home.svg";
import shopIcon from "../assets/bag.svg";
import cartIcon from "../assets/shopping-cart.svg";

export default function Navbar({ open_order, orders }) {
  return (
    <nav className="navBar">
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "active-link" : "linkButton")}
      >
        <img src={homeIcon} alt="Home" />
      </NavLink>
      <NavLink
        to="/shop"
        className={({ isActive }) => (isActive ? "active-link" : "linkButton")}
      >
        <img src={shopIcon} alt="Shop" />
      </NavLink>
      <NavLink
        to="cart"
        className={({ isActive }) =>
          isActive ? "active-link" : open_order ? "orderOpen" : "linkButton"
        }
      >
        <div>
          <img src={cartIcon} alt="Cart" />
          {orders > 0 && <p className="underNumber">{orders}</p>}
        </div>
      </NavLink>
    </nav>
  );
}
