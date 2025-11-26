// import { useState, useEffect } from "react";
import { Link, useLoaderData } from "react-router-dom";
import "../styles/shop.css";

export default function Shop() {
  // const [isLoading, setIsLoading] = useState(true);
  // const [data, setData] = useState([]);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   const dataFetch = async () => {
  //     try {
  //       const data = await await fetch(
  //         "https://fakestoreapi.com/products"
  //       ).then((response) => response.json());

  //       setData(data);
  //     } catch (err) {
  //       setError(err);
  //       console.log("Fetching data: error", err);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };
  //   dataFetch();
  // }, []);
  const products = useLoaderData();

  console.log("nest", { products });

  return (
    <div className="shop">
      <h1>WELCOME Shop</h1>

      {/* {error !== null && <div> {error} </div>} */}
      <div className="products">
        {products.map((d) => (
          <div className="product-item" key={d.id}>
            <img src={d.image} alt="product" />
            <br />
            <p>{d.title}</p>
            <br />
            <p>$ {d.price}</p>
            <br />
          </div>
        ))}
      </div>
    </div>
  );
}
