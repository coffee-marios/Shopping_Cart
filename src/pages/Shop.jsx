import { useState, useEffect } from "react";

import "../styles/shop.css";

export default function Shop() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  useEffect(() => {
    const dataFetch = async () => {
      try {
        const data = await await fetch(
          "https://fakestoreapi.com/products"
        ).then((response) => response.json());

        setData(data);
      } catch (err) {
        console.log("Fetching data: error", err);
      } finally {
        setIsLoading(false);
      }
    };
    dataFetch();
  }, []);

  if (isLoading) return <p>Loading...</p>;
  console.log("nest", data);

  return (
    <div className="shop">
      <h1>WELCOME Shop</h1>
      <div className="products">
        {data.map((d) => (
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
