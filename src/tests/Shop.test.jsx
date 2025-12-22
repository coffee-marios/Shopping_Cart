import { Link, useLoaderData } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import {
  RouterProvider,
  BrowserRouter,
  createMemoryRouter,
} from "react-router-dom";
import Shop from "../pages/Shop";
import ErrorShop from "../components/error-shop";
import { Outlet } from "react-router-dom";

describe("Shop page renders test", () => {
  test("test title", async () => {
    const router = createMemoryRouter(
      [
        {
          path: "/",
          element: <FakeLayout />,
          children: [
            {
              path: "shop",
              element: <Shop />,
              loader: async () => [
                [
                  {
                    id: 1,
                    title:
                      "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
                    price: 109.95,
                    description:
                      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
                  },
                ],
              ],
            },
          ],
        },
      ],

      {
        initialEntries: ["/shop"],
      }
    );
    render(<RouterProvider router={router} />);

    expect(await screen.findByText(/LINEUP/i)).toBeInTheDocument();
  });
});
function FakeLayout() {
  const outletContext = {
    open_order: 0,
    setOpenOrder: 0,
    orders: 0,
    setOrders: 0,
  };

  return <Outlet context={outletContext} />;
}
