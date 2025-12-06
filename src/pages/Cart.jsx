import { useOutletContext } from "react-router-dom";
import "../styles/cart.css";

const Order_table = () => {
  const { setOrders } = useOutletContext();
  const { setOpenOrder } = useOutletContext();

  const order_keys = Object.keys(localStorage);
  console.log("keys", order_keys);
  const myKeys = order_keys.map((key) => localStorage.getItem(key));
  console.log("keys map", myKeys);

  const myKeys_parsed = myKeys.map((s) => JSON.parse(s));
  console.log("parsed", myKeys_parsed);

  const filter_keys = myKeys_parsed.filter(Boolean);
  console.log("filter_keys", filter_keys);

  const sum_order = filter_keys.reduce(
    (accumulator, currentValue) =>
      accumulator + currentValue.price * currentValue.quantity,
    0
  );
  console.log("sum", sum_order);
  const deleteProduct = (id) => {
    setOrders({});
    localStorage.removeItem(id["id"]);
    if (localStorage.length == 0) {
      setOpenOrder(false);
    }
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Qty</th>
            <th>Price</th>
            <th>Delete</th>
          </tr>
        </thead>

        <tbody>
          {filter_keys.map((item) => {
            console.log("item price", item);

            return (
              <tr key={item["id"]}>
                <th>{item["id"]}</th>

                <td>{item["title"]}</td>
                <td>{item["quantity"]}</td>
                <td>{item["price"] * item["quantity"]}</td>
                <td>
                  <button onClick={() => deleteProduct(item)}>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr>
            <th colSpan="3" scope="row"></th>
            <td>{sum_order}</td>
            <td>
              <button>Buy</button>
            </td>
          </tr>
        </tfoot>
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
