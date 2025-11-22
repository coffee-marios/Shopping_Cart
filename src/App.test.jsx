// App.test.js
import { render, screen } from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import ErrorPage from "./components/error-page";
import Navbar from "./components/Navbar";

test("renders App with Home route", () => {
  const router = createMemoryRouter(
    [
      {
        path: "/home",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [{ index: true, element: <Home /> }],
      },
    ],
    { initialEntries: ["/home"] }
  );

  render(<RouterProvider router={router} />);
  expect(screen.getByText(/WELCOME/i)).toBeInTheDocument();
});
