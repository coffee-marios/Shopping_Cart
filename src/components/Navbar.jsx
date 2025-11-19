import { Link } from "react-router";
import "../styles/navBar.css";

export default function Navbar() {
  return (
    <div className="navBar">
      <Link to="/" className="linkButton">
        Home
      </Link>
      <Link to="/Shop" className="linkButton">
        Shop
      </Link>
      <Link to="cart" className="linkButton">
        Cart
      </Link>
    </div>
  );
}
