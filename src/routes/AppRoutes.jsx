import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import "../index.css";
import ErrorPage from "../components/error-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
]);

export default function AppRoutes() {
  return <RouterProvider router={router} />;
}
