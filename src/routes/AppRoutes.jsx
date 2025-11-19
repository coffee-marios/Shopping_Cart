import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import "../index.css";
import ErrorPage from "../components/error-page";
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import Cart from "../pages/Cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/shop", element: <Shop /> },
      { path: "/cart", element: <Cart /> },
    ],
  },
]);

export default function AppRoutes() {
  return <RouterProvider router={router} />;
}
