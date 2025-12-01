import { useOutletContext } from "react-router-dom";
import "../styles/cart.css";

const Order_table = () => {
  const { setOrders } = useOutletContext();

  const { orders } = useOutletContext();
  const deleteProduct = (id) => {
    const copyOrders = { ...orders };
    console.log(copyOrders);
    delete copyOrders[id];
    setOrders(copyOrders);
  };

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
          {Object.keys(orders).map((key) => {
            const item = orders[key];
            return (
              <tr key={item["id"]}>
                <th>{item["id"]}</th>

                <td>{item["title"]}</td>
                <td>{item["quantity"]}</td>
                <td>{item["price"]}</td>
                <td>
                  <button onClick={() => deleteProduct(key)}>Delete</button>
                </td>
              </tr>
            );
          })}
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
