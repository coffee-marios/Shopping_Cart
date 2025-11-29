import { useOutletContext } from "react-router-dom";

export default function Cart() {
  const { orders } = useOutletContext();
  const { setOrders } = useOutletContext();
  return (
    <div className="cart">
      <h1>WELCOME Cart</h1>
      {Object.keys(orders).map((key) => (
        <div key={key}>
          <p>
            {orders[key]["title"]} <span>{orders[key]["quantity"]}</span>{" "}
          </p>
        </div>
      ))}
    </div>
  );
}
