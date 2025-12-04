import { useOutletContext } from "react-router-dom";
import "../styles/cart.css";

const Order_table = () => {
  const { setOrders } = useOutletContext();

  const { orders } = useOutletContext();

  const order_keys = Object.keys(localStorage);
  const myKeys = order_keys.map((key) => localStorage.getItem(key));

  console.log("Wait\n", Object.entries(localStorage));
  console.log("myKeys", myKeys);
  const myKeys_parsed = myKeys.map((s) => JSON.parse(s)); //.filter((key) => key !== "false"));

  console.log("my parsed keys\n", myKeys_parsed);

  const filter_keys = myKeys_parsed.filter(Boolean);
  console.log("filter keys\n", filter_keys);

  // console.log("myValues", myValues);

  const deleteProduct = (id) => {
    const copyOrders = { ...orders };
    console.log(copyOrders);
    delete copyOrders[id];
    setOrders(copyOrders);
    localStorage.removeItem(id["id"]);
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
          {/* {Object.keys(orders).map((key) => { */}
          {filter_keys.map((item) => {
            // const item = orders[key];
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
            <td>21,000</td>
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
