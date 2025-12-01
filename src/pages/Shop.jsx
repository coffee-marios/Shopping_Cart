// import { useState, useEffect } from "react";
import { Link, useLoaderData } from "react-router-dom";
import "../styles/shop.css";
import { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";

function Card({ id, source, title, price, sendData }) {
  const [quantity, setQuantity] = useState(1);
  const [isActive, setIsActive] = useState(() => {
    const saved = localStorage.getItem(id);
    return saved ? JSON.parse(saved) : false;
  });

  useEffect(() => {
    localStorage.setItem(id, JSON.stringify(isActive));
  }, [isActive, id]);

  const onChange = (event) => {
    setQuantity(event.target.value);
  };

  function handleSubmit(e) {
    e.preventDefault();
    setIsActive(true);
    sendData({
      id: id,
      source: source,
      title: title,
      price: price,
      quantity: quantity,
    });
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className={isActive ? "active" : "inactive"}>
        <img src={source} alt="product" />
        <p>{title}</p>
        <p>{price}</p>
        <input type="number" value={quantity} onChange={onChange} />
        <button type="submit">Add to cart</button>
      </div>
    </form>
  );
}

export default function Shop() {
  const products = useLoaderData();
  const { setOpenOrder } = useOutletContext();
  const { orders } = useOutletContext();
  const { setOrders } = useOutletContext();

  const handleClick = (data) => {
    console.log("PARENT", data);

    const id = data.id;
    const quantity = data.quantity;
    const price = data.price;
    const title = data.title;
    const new_order = {
      id: id,
      price: price,
      quantity: quantity,
      title: title,
    };
    console.log(new_order);
    setOrders({ ...orders, [new_order.id]: new_order });

    setOpenOrder(true);
    console.log("ORDERS", orders);
  };

  // console.log("nest", { products });

  return (
    <div className="shop">
      <h1>WELCOME Shop</h1>

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
