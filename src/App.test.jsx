// App.test.js
import { render, screen } from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import ErrorPage from "./components/error-page";
import Navbar from "./components/Navbar";

describe("App routing", () => {
  test("renders App with Home route", () => {
    const router = createMemoryRouter(
      [
        {
          path: "/",
          element: <App />,
          errorElement: <ErrorPage />,
          children: [
            { index: true, element: <Home /> },
            { path: "shop", element: <div>Shop</div> },
          ],
        },
      ],
      { initialEntries: ["/"] }
    );

    render(<RouterProvider router={router} />);
    expect(screen.getByText(/WELCOME/i)).toBeInTheDocument();
  });

  test("renders shop at /shop", () => {
    const router = createMemoryRouter(
      [
        {
          path: "/",
          element: <App />,
          errorElement: <ErrorPage />,
          children: [
            { index: true, element: <Home /> },
            { path: "shop", element: <div>Shop</div> },
          ],
        },
      ],
      { initialEntries: ["/shop"] }
    );
    render(<RouterProvider router={router} />);
    screen.getByRole("link", { name: /shop/i });
  });
});
