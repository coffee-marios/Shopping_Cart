// import { useState, useEffect } from "react";
import { Link, useLoaderData } from "react-router-dom";
import "../styles/shop.css";
import { useState } from "react";
import { useOutletContext } from "react-router-dom";

function Card({ id, source, title, price, sendData }) {
  const [quantity, setQuantity] = useState(1);
  const [isActive, setIsActive] = useState(() => {
    const saved = localStorage.getItem(id);
    return saved ? JSON.parse(saved) : false;
  });

  const onChange = (event) => {
    setQuantity(event.target.value);
  };

  function handleSubmit(e) {
    e.preventDefault();
    const order_storage = {
      id: id,
      source: source,
      title: title,
      price: price,
      quantity: quantity,
    };

    setIsActive(true);
    localStorage.setItem(id, JSON.stringify(order_storage));
    const dkeys = JSON.parse(localStorage.getItem("cart_ready"));
    console.log("dkeys", dkeys);
    sendData({
      order_storage,
    });
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className={isActive ? "active" : "inactive"}>
        <img src={source} alt="product" />
        <br />
        <p>{title}</p>
        <br />
        <p>{price} EUR</p>
        <input
          min={1}
          max={5}
          type="number"
          value={quantity}
          onChange={onChange}
        />
        <button type="submit">Add to cart</button>
      </div>
    </form>
  );
}

export default function Shop() {
  const products = useLoaderData();
  const { setOpenOrder } = useOutletContext();
  const { open_order } = useOutletContext();

  const handleClick = () => {
    setOpenOrder(true);
    console.log("storage items: ", localStorage.length);
    console.log("open order", open_order);
  };

  return (
    <div className="shop">
      <h1>LINEUP</h1>
      <br />

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
