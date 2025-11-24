import { useState, useEffect } from "react";

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
    <div>
      <h1>WELCOME Shop</h1>
      <div>
        {data.map((d) => (
          <div key={d.id}>
            <p>{d.id}</p>
            <img src={d.image} alt="product" />
            <p>{d.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
