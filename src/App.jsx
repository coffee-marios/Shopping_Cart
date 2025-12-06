import { useState } from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import React from "react";

function App() {
  const [open_order, setOpenOrder] = useState(() => {
    return false;
  });
  const [orders, setOrders] = useState({}); // dummy because changes in localStorage don't re-render the page

  return (
    <div>
      <div>
        <Navbar open_order={open_order} />
      </div>

      <main>
        <Outlet context={{ open_order, setOpenOrder, orders, setOrders }} />
      </main>
    </div>
  );
}

export default App;
