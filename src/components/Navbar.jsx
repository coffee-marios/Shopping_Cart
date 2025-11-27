import { Link } from "react-router-dom";
import "../styles/navBar.css";

export default function Navbar({ open_order }) {
  return (
    <nav className="navBar">
      <Link to="/" className="linkButton">
        Home
      </Link>
      <Link to="/Shop" className="linkButton">
        Shop
      </Link>
      <Link to="cart" className={open_order ? "orderOpen" : "linkButton"}>
        Cart
      </Link>
    </nav>
  );
}
