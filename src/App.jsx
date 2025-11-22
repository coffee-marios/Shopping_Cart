import { useState } from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import React from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div>
        <Navbar />
      </div>

      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
