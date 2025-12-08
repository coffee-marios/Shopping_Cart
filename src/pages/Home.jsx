import { Link, useLoaderData } from "react-router-dom";
import "../styles/home.css";

export default function Home() {
  const oneProduct = useLoaderData();

  return (
    <div>
      <h1 className="title-shop">
        <Link to="./shop">SHOP WITH STYLE</Link>
      </h1>
      <br />
      <div className="image-container">
        <Link to="./shop">
          <img className="firstPage" src={oneProduct.image} alt="product" />
        </Link>
      </div>
    </div>
  );
}
