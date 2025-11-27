// import { useState, useEffect } from "react";
import { Link, useLoaderData } from "react-router-dom";
import "../styles/shop.css";
import { useState } from "react";
import { useOutletContext } from "react-router-dom";

function Card({ id, source, title, price, sendData }) {
  const [quantity, setQuantity] = useState(1);
  const onChange = (event) => {
    setQuantity(event.target.value);
  };
  return (
    <div>
      <img src={source} alt="product" />
      <p>{title}</p>
      <p>{price}</p>
      <input value={quantity} onChange={onChange} />
      <button
        onClick={() =>
          sendData({
            product_id: id,
            name: { title },
            price: price,
            quantity: quantity,
          })
        }
      >
        Add to cart
      </button>
    </div>
  );
}

export default function Shop() {
  const products = useLoaderData();
  const { setOpenOrder } = useOutletContext();
  const { open_order } = useOutletContext();

  const orders = {};
  const handleClick = (data) => {
    const quantity = data.quantity;
    const price = data.price;
    const name = data.name;
    orders[data.product_id] = { price: price, quantity: quantity, name: name };
    console.log(orders);
    console.log(open_order);
    setOpenOrder(true);
  };

  console.log("nest", { products });

  return (
    <div className="shop">
      <h1>WELCOME Shop</h1>

      {/* {error !== null && <div> {error} </div>} */}
      <div className="products">
        {products.map((d) => (
          <div className="product-item" key={d.id}>
            <Card
              id={d.id}
              source={d.image}
              title={d.title}
              price={d.price}
              sendData={handleClick}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
