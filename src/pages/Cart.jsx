import { useOutletContext } from "react-router-dom";
import "../styles/cart.css";

const Order_table = () => {
  const { orders } = useOutletContext();

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Delete</th>
          </tr>
        </thead>

        <tbody>
          {Object.keys(orders).map((key) => (
            <tr key={orders[key]["id"]}>
              <th>{orders[key]["id"]}</th>

              <td>{orders[key]["title"]}</td>
              <td>{orders[key]["quantity"]}</td>
              <td>{orders[key]["price"]}</td>
              <td>
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default function Cart() {
  return (
    <div className="cart">
      <h1>WELCOME Cart</h1>

      <Order_table />
    </div>
  );
}
