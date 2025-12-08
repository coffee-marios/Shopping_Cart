import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import "./index.css";
import ErrorPage from "./components/error-page";
import ErrorShop from "./components/error-shop";

import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar";
import { loadProducts } from "./pages/loadProducts";
import { loadOne } from "./pages/loadOne";

import { createRoutesFromElements, Route } from "react-router-dom";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} errorElement={<ErrorPage />}>
      <Route index element={<Home />} loader={loadOne} />
      <Route
        path="shop"
        element={<Shop />}
        loader={loadProducts}
        errorElement={<ErrorShop />}
      />
      <Route path="cart" element={<Cart />} />
    </Route>
  )
);
